import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";

function ContentShowcaseListing({ state, libraries }) {
  const portofolio = state?.source?.portofolio;

  return (
    <MainContent>
      <PortofolioGrid>
        {Object.entries(portofolio).map(([key, value]) => {
          return (
            <div key={key}>
              <img src={value?.acf?.image?.sizes.large} alt={value?.acf?.title} />
              <PortofolioTitle>{value?.acf?.title}</PortofolioTitle>
            </div>
          );
        })}
      </PortofolioGrid>
    </MainContent>
  );
}

export default connect(ContentShowcaseListing);

const MainContent = styled.div`
  padding: 50px 100px;
  background-color: #f6f6f9;
  color: #252525;
`;

const PortofolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  gap: 50px;
`;

const PortofolioTitle = styled.h5`
  font-weight: bold;
  color: #0f1c64;
`;
