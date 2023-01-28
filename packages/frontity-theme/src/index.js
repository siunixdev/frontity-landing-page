import { Global, css, styled } from "frontity";
import Header from "./components/Header";
import FrontityHead from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ThemeStyle from "../src/assets/styles/css/theme.css"
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import processorShowcaseListing from "./processors/showcaseProcessor";
import processorBlogListing from "./processors/blogProcessor";
import processorFormListing from "./processors/formProcessor";
import processorGutenbergListing from "./processors/gutenbergProcessor";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <>
      <FrontityHead />
      <Global styles={globalStyles} />
      <Global styles={css(ThemeStyle)} />
      <Header />
      <Main />
      <Toaster position="top-right" />
      <Footer />
    </>
  );
};

export default {
  name: "frontity-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      init: ({libraries}) => {
      },
      beforeSSR: async ({ state, libraries }) => {
        const postCategories = await libraries.source.api.get({
          endpoint: "categories",
          params: { _embed: true, per_page: 100 },
        });
        await libraries.source.populate({
          response: postCategories,
          state,
        });
        const whyFrontity = await libraries.source.api.get({
          endpoint: "whyfrontity",
          params: { _embed: true, per_page: 100 },
        });
        await libraries.source.populate({
          response: whyFrontity,
          state,
        });
        const portofolio = await libraries.source.api.get({
          endpoint: "portofolio",
          params: {
            _embed: true,
            per_page: 100,
            order: "asc"
          },
        });
        await libraries.source.populate({
          response: portofolio,
          state,
        });
      }
    },
  },
  libraries: {
    html2react: {
      // processors: [image, iframe, link],
      processors: [
        iframe,
        link,
        processorShowcaseListing,
        processorBlogListing,
        processorFormListing,
        processorGutenbergListing,
      ],
    },
  },
};

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #f6f6f9;
    color: #6c73a3;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
