import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";

function ContentBlogListing({ state, libraries }) {
  const [selectedCategories, setSelectedCategories] = useState();

  return (
    <MainContent>
      <LeftSide>
      <CategoryContent>
        <h4>Categories</h4>
        <Category>
          <a onClick={() => setSelectedCategories()}>All</a>
        </Category>
        {Object.entries(state.source.category).map(([key, value]) => {
          return (
            <Category key={key}>
              <a onClick={() => setSelectedCategories(value.id)}>
                {value.name}
              </a>
            </Category>
          );
        })}
      </CategoryContent>
      </LeftSide>
    </MainContent>
  );
}

export default connect(ContentBlogListing);

const MainContent = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  width: 200px;
`

const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Category = styled.span`
  color: #364fc7;
  font-size: 15px;
  cursor: pointer;
  padding: 8px 10px;
  text-transform: uppercase;
  border-radius: 4px;
  &:hover {
    background-color: #364fc7;
    color: #ffffff;
  }
`;