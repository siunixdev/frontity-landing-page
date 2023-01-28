import React from 'react'
import { connect, styled } from 'frontity'
import Switch from "@frontity/components/switch";
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Loading from './base/loading';

function Main({state, libraries}) {
  const data = state.source.get(state.router.link);
  const post = state.source?.[data.type]?.[data.id];

  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <Switch>
        <Loading when={data.isFetching} />
        <Home when={data.isHome} />
        {/* <Showcase when={data.isShowCase} /> */}
        {/* <Blog when={data.isBlog} /> */}
        {data.isPage && <Html2React html={post.content.rendered} />}
      </Switch>
    </div>
  )
}

export default connect(Main)

const MainContent = styled.div`
  padding: 24px 200px;
  background-color: #f6f6f9;
  color: #252525;
`