import styled from 'styled-components';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import paintPicture from './Datas';

const ImgContainer = styled.div`
  width: 80%;
  height: 70vh;
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

const ImgGrid = () => (
  // const [pictures, setPictures] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://api.unsplash.com/search/photos?query=peinture&client_id=cv-qpRxao8VaEyXIgyhc9nU4c7x38nuqEeVOjmDXlc0',
  //     )
  //     .then((response) => response.data)
  //     .then((fetchedPictures) => setPictures(fetchedPictures.results));
  // }, []);

  // const numberRand = Math.floor(Math.random() * 10);
  // console.log(numberRand);

  <ImgContainer>
    <LeftContainer>
      <Myimg
        // src={pictures[2].urls.regular}
        src={paintPicture.urls.regular}
        alt="test"
        links={paintPicture.links}
      />
      <InfosImg>
        <p>Photo by {paintPicture.user.username} on Unsplash</p>
      </InfosImg>
    </LeftContainer>
    <RightContainer>
      <SmallImg>
        <Myimg
          // src={pictures[6].urls.regular}
          src={paintPicture.urls.regular}
          alt="image_test"
        />
        <InfosImg>
          <p>Photo by {paintPicture.user.username} on Unsplash</p>
        </InfosImg>
      </SmallImg>
      <SmallImg>
        <Myimg
          // src={pictures[6].urls.regular}
          src={paintPicture.urls.regular}
          alt="image_test"
        />
        <InfosImg>
          <p>Photo by {paintPicture.user.username} on Unsplash</p>
        </InfosImg>
      </SmallImg>
      <SmallImg>
        <Myimg
          // src={pictures[6].urls.regular}
          src={paintPicture.urls.regular}
          alt="image_test"
        />
        <InfosImg>
          <p>Photo by {paintPicture.user.username} on Unsplash</p>
        </InfosImg>
      </SmallImg>
      <SmallImg>
        <Myimg
          // src={pictures[6].urls.regular}
          src={paintPicture.urls.regular}
          alt="image_test"
        />
        <InfosImg>
          <p>Photo by {paintPicture.user.username} on Unsplash</p>
        </InfosImg>
      </SmallImg>
    </RightContainer>
  </ImgContainer>
);

export default ImgGrid;
