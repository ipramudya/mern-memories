import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { MdArrowDropUp } from 'react-icons/md';
import { IoCheckmark, IoClose } from 'react-icons/io5';

import { createPost } from '../../../../redux/actions/posts';
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

const Form = ({ isFormActive, setActiveForm }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    tags: '',
    message: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();

  const clearPostData = () =>
    setPostData({
      creator: '',
      title: '',
      tags: '',
      message: '',
      selectedFile: '',
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData));

    clearPostData();
  };

  const handleClear = () => {
    clearPostData();
  };

  const handleClose = () => {
    setActiveForm((prev) => !prev);
    clearPostData();
  };

  return (
    <FormContainer active={isFormActive}>
      <FormBox>
        <H3>Tell them your story and memory</H3>
        <Button arrow onClick={handleClose}>
          <MdArrowDropUp />
        </Button>
        <FormField onSubmit={handleSubmit}>
          <FlexField>
            <Input
              type="text"
              name="title"
              value={postData.title}
              onChange={(e) => {
                setPostData({ ...postData, title: e.target.value });
              }}
              placeholder="Title"
              required
            />
            <Input
              type="text"
              name="creator"
              value={postData.creator}
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
            value={postData.tags}
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
            value={postData.message}
            onChange={(e) => {
              setPostData({ ...postData, message: e.target.value });
            }}
            placeholder="Write your message..."
            required
          />
          <FlexField buttons>
            {postData.selectedFile ? (
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
