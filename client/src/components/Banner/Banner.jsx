import {
  BannerContainer,
  BannerImage,
  Content,
  H1,
  H6,
  ImageContainer,
  Button,
} from './Banner.style';

import MemoriesImage from '../../assets/banner.jpg';

const Banner = ({ setActiveForm }) => {
  const clickHandler = () => {
    setActiveForm((prev) => !prev);
  };

  return (
    <BannerContainer>
      <Content>
        <H1>Memories App</H1>
        <H6>
          An app that you can share your stories and memories to people,
          <br />
          so you can gain more relation to each other
        </H6>
        <Button onClick={clickHandler}>Write Memories</Button>
      </Content>
      <ImageContainer>
        <BannerImage src={MemoriesImage} alt="Banner Rose and Camera" />
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;
