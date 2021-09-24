import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { MdArrowDropUp } from 'react-icons/md';
import { IoCheckmark, IoClose } from 'react-icons/io5';

import { useCurrentIdAndFormContext } from '../../../../context/currentIdAndForm';
import { createPost, updatePost } from '../../../../redux/actions/posts';
import {
  Button,
  FormBox,
  FormContainer,
  FormField,
  FlexField,
  H3,
  Input,
  Textarea,
  Span,
} from './Form.style';

const initialPostState = {
  creator: '',
  title: '',
  tags: '',
  message: '',
  selectedFile: '',
};

const Form = () => {
  const { posts } = useSelector((state) => state);
  const { currentId, isFormActive, setCurrentId, setIsFormActive } =
    useCurrentIdAndFormContext();
  const [postData, setPostData] = useState(initialPostState);
  const dispatch = useDispatch();

  const exactPost = posts.find((post) => post._id === currentId);

  useEffect(() => {
    setPostData(exactPost);
  }, [exactPost]);

  const handleClear = () => {
    setCurrentId(null);
    setPostData(initialPostState);
  };

  const handleClose = () => {
    setIsFormActive((prev) => !prev);
    handleClear();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    handleClose();
  };

  return (
    <FormContainer active={isFormActive}>
      <FormBox>
        <H3>
          {currentId ? 'Update your memory' : 'Tell them your story and memory'}
        </H3>
        <Button arrow onClick={handleClose}>
          <MdArrowDropUp />
        </Button>
        <FormField onSubmit={handleSubmit}>
          <FlexField>
            <Input
              type="text"
              name="title"
              value={postData?.title}
              onChange={(e) => {
                setPostData({ ...postData, title: e.target.value });
              }}
              placeholder="Title"
              required
            />
            <Input
              type="text"
              name="creator"
              value={postData?.creator}
              onChange={(e) => {
                setPostData({ ...postData, creator: e.target.value });
              }}
              placeholder="Creator"
              required
            />
          </FlexField>
          <Input
            type="text"
            name="tags"
            value={postData?.tags}
            onChange={(e) => {
              setPostData({
                ...postData,
                tags: e.target.value,
              });
            }}
            placeholder="Tags"
            required
          />
          <Textarea
            type="text"
            name="message"
            value={postData?.message}
            onChange={(e) => {
              setPostData({ ...postData, message: e.target.value });
            }}
            placeholder="Write your message..."
            required
          />
          <FlexField buttons>
            {postData?.selectedFile ? (
              <Span>File imported</Span>
            ) : (
              <Span>No file imported</Span>
            )}
            <FileBase
              className="file"
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setPostData({ ...postData, selectedFile: base64 });
              }}
              accept="image/gif, image/jpeg, image/png"
              required
            />
            <Button execution submit type="submit">
              <IoCheckmark />
            </Button>
            <Button execution cancel onClick={handleClear}>
              <IoClose />
            </Button>
          </FlexField>
        </FormField>
      </FormBox>
    </FormContainer>
  );
};

export default Form;
