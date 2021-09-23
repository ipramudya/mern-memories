import moment from 'moment';
import { FiEdit } from 'react-icons/fi';
import { FaHeart, FaTrash } from 'react-icons/fa';

import { useCurrentIdAndFormContext } from '../../../../context/currentIdAndForm';
import {
  Image,
  ImageWrapper,
  PostContainer,
  Content,
  FlexField,
  Button,
  H4,
  Text,
  Span,
} from './Post.style';

const Post = ({ post }) => {
  const { setCurrentId, setIsFormActive } = useCurrentIdAndFormContext();

  const editPostHandler = () => {
    setCurrentId(post._id);
    setIsFormActive((prev) => !prev);
  };

  return (
    <PostContainer>
      <ImageWrapper>
        <Image src={post?.selectedFile} alt={post?.title} />
        <FlexField top>
          <Button upper edit onClick={editPostHandler}>
            <FiEdit />
          </Button>
          <Button upper remove>
            <FaTrash />
          </Button>
        </FlexField>
      </ImageWrapper>
      <Content>
        <Text tags>{post?.tags[0].split(',').map((val) => `#${val} `)}</Text>
        <H4>{post?.title}</H4>
        <Text message>
          <Span>{post?.creator}</Span>
          {post?.message}
        </Text>
        <FlexField bottom>
          <Button>
            <FaHeart />
            <Text bottom>Like {post?.likeCount}</Text>
          </Button>
          <Text bottom>{moment(post?.createdAt).fromNow()}</Text>
        </FlexField>
      </Content>
    </PostContainer>
  );
};

export default Post;
