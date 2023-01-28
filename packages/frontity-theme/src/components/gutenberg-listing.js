import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";

function ContentGutenbergListing() {
  return (
    <MainContent>
      <h4>Gutenberg Page, this page from frontity</h4>
    </MainContent>
  );
}

export default connect(ContentGutenbergListing);

const MainContent = styled.div`
  display: flex;
`;