import React from "react";
import { connect, styled } from "frontity";
import Button from "../components/base/Button";
import WhyFrontity from "../components/WhyFrontity";

function Home({ state }) {
  return (
    <MainContent>
      <Hero>
        <video
          autoPlay
          loop
          src="https://frontity.org/wp-content/uploads/2020/04/LiveContentUpdate.mp4"
          height={400}
        ></video>
        <div>
          <Title>The React framework for WordPress</Title>
          <Subtitle>
            Frontity is the easiest way to create lightning fast websites using
            WordPress and React. Open source and free to use.
          </Subtitle>
          <Cta>
            <Button
              label="Get Started"
              link="https://docs.frontity.org/getting-started/quick-start-guide"
              openNewTab={true}
            />
            <Button
              label="Try Demo in your browser"
              link="https://codesandbox.io/s/github/frontity/frontity-template"
              openNewTab={true}
              primary={false}
            />
          </Cta>
        </div>
      </Hero>
      <WhyFrontity />
    </MainContent>
  );
}

export default connect(Home);

const MainContent = styled.div`
  padding: 24px 200px;
  color: #252525;
`

const Hero = styled.div`
  display: grid;
  grid: auto-flow / auto 1fr;
  gap: 100px;
  padding: 20px 0 40px;
`;
const Title = styled.h1`
  color: #0f1c64;
  font-size: 50px;
  line-height: 60px;
`;

const Subtitle = styled.p`
  color: #6c73a3;
  line-height: 25px;
`;

const Cta = styled.div`
  display: flex;
  gap: 10px;
`;