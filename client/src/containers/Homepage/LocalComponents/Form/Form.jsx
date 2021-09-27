import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { CgCloseR } from 'react-icons/cg';

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
  title: '',
  tags: '',
  message: '',
  selectedFile: '',
};

const Form = () => {
  const { posts } = useSelector((state) => state);
  const { currentId, setCurrentId, setIsFormActive } =
    useCurrentIdAndFormContext();
  const [postData, setPostData] = useState(initialPostState);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const exactPost = posts.data.find((post) => post._id === currentId);

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

  const handleSubmitPost = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }

    handleClose();
  };

  return (
    <FormContainer>
      <FormBox>
        <H3>
          {currentId ? 'Update your memory' : 'Tell them your story and memory'}
        </H3>
        <Button onClick={handleClose} styledPurpose="close">
          <CgCloseR />
        </Button>
        <FormField onSubmit={handleSubmitPost}>
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
            name="tags"
            value={postData?.tags}
            onChange={(e) => {
              setPostData({
                ...postData,
                tags: e.target.value.split(','),
              });
            }}
            placeholder="Write tags separated with comma"
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
          <FlexField styledFieldPurpose="fileBase">
            {postData?.selectedFile ? (
              <Span>File imported</Span>
            ) : (
              <Span>No file imported</Span>
            )}
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setPostData({ ...postData, selectedFile: base64 });
              }}
              accept="image/gif, image/jpeg, image/png"
              required
            />
            <Button
              styledVariant="execution"
              type="submit"
              styledPurpose="submit"
            >
              {currentId ? 'Update' : 'Submit'}
            </Button>
            <Button
              styledVariant="execution"
              cancel
              onClick={handleClear}
              styledPurpose="clear"
            >
              Clear
            </Button>
          </FlexField>
        </FormField>
      </FormBox>
    </FormContainer>
  );
};

export default Form;
