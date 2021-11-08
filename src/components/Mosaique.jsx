import styled from 'styled-components';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

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

const ImgGrid = () => (
  //   const [pictures, setPictures] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         'https://api.unsplash.com/search/photos?query=peinture&client_id=cv-qpRxao8VaEyXIgyhc9nU4c7x38nuqEeVOjmDXlc0',
  //       )
  //       .then((response) => response.data)
  //       .then((fetchedPictures) => setPictures(fetchedPictures.results));
  //   }, []);

  //   const numberRand = Math.floor(Math.random() * pictures.length);
  //   console.log(numberRand);
  //   const imgRand = pictures[numberRand].urls.regular;

  //   console.log(pictures);
  <ImgContainer>
    <LeftContainer>
      <Myimg
        src="https://images.unsplash.com/photo-1557401018-aa08a2ddf43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVpbnR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="test"
      />
    </LeftContainer>
    <RightContainer>
      <SmallImg>
        <Myimg
          src="https://images.unsplash.com/photo-1549810950-43ff06f843f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlaW50dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="image_test"
        />
      </SmallImg>
      <SmallImg>
        <Myimg
          src="https://images.unsplash.com/photo-1599334682702-dcb76119754c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVpbnR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="image_test"
        />
      </SmallImg>
      <SmallImg>
        <Myimg
          src="https://images.unsplash.com/photo-1555885489-5381a21766ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlaW50dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="image_test"
        />
      </SmallImg>
      <SmallImg>
        <Myimg
          src="https://images.unsplash.com/photo-1618335321517-d8713bdbc418?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlaW50dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="image_test"
        />
      </SmallImg>
    </RightContainer>
  </ImgContainer>
);

export default ImgGrid;
