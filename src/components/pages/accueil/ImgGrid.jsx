import styled from 'styled-components';
import fetchApiUnsplash from '../../images/FetchApiUnsplash';

const ImgContainer = styled.div`
  width: 90%;
  height: 50vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 40%;
  height: 98%;
  position: relative;
  background-color: lightgreen;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
const RightContainer = styled.div`
  width: 59%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const SmallImg = styled.div`
  width: 49%;
  height: 48%;
  position: relative;
  background-color: lightpink;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
const Myimg = styled.img`
  width: 100%;
  height: 100%;
`;
const InfosImg = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  margin: 0;
  background-color: #fff;
  opacity: 30%;
`;

const ImgGrid = () => {
  const img = {
    url: fetchApiUnsplash('paint').urlImg,
    userName: fetchApiUnsplash('paint').userName,
  };

  return (
    <ImgContainer>
      <LeftContainer>
        <Myimg src={img.url} alt="test" />
        <InfosImg>
          <p>Photo by {img.userName} on Unsplash</p>
        </InfosImg>
      </LeftContainer>
      <RightContainer>
        <SmallImg>
          <Myimg src={img.url} alt="image_test" />
          <InfosImg>
            <p>Photo by {img.userName} on Unsplash</p>
          </InfosImg>
        </SmallImg>
        <SmallImg>
          <Myimg src={img.url} alt="image_test" />
          <InfosImg>
            <p>Photo by {img.userName} on Unsplash</p>
          </InfosImg>
        </SmallImg>
        <SmallImg>
          <Myimg src={img.url} alt="image_test" />
          <InfosImg>
            <p>Photo by {img.userName} on Unsplash</p>
          </InfosImg>
        </SmallImg>
        <SmallImg>
          <Myimg src={img.url} alt="image_test" />
          <InfosImg>
            <p>Photo by {img.userName} on Unsplash</p>
          </InfosImg>
        </SmallImg>
      </RightContainer>
    </ImgContainer>
  );
};

export default ImgGrid;
