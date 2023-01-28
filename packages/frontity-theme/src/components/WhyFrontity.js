import React from "react";
import { connect, styled } from "frontity";

function WhyFrontity({ state, libraries }) {
  const whyfrontity = state?.source?.whyfrontity;

  return (
    <MainContent>
      <Title>Why Frontity ?</Title>
      <Subtitle>
        Frontity combines the best of both worlds with a great developer
        experience in mind
      </Subtitle>
      <WhyFrontityGrid>
        {Object.entries(whyfrontity).map(([key, value]) => {
          return (
            <div key={key}>
              <img src={value?.acf?.icon?.sizes.thumbnail} alt="" width={30} />
              <WhyFrontityTitle>{value?.acf?.title}</WhyFrontityTitle>
              <WhyFrontityDescription>{value?.acf?.description}</WhyFrontityDescription>
            </div>
          );
        })}
      </WhyFrontityGrid>
    </MainContent>
  );
}

export default connect(WhyFrontity);

const MainContent = styled.div`
  padding: 50px;
  background-color: #ffffff;
  border-radius: 10px;
`

const Title = styled.h1`
  text-align: center;
  color: #0f1c64;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #6c73a3;
`;

const WhyFrontityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  gap: 100px;
  margin: 50px 0;
`;

const WhyFrontityTitle = styled.h3`
  color: #0f1c64;
  font-size: 20px;
`;

const WhyFrontityDescription = styled.p`
  color: #6c73a3;
  font-size: 14px;
  line-height: 25px;
`;
