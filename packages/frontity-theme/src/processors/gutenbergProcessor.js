import GutenbergListing from "../components/gutenberg-listing";

const Testing = () => {
  return "Lorem Ipsum"
}

const processorGutenbergListing = {
  name: "gutenberg-listing",
  priority: 10,
  test: ({ node }) => node.component === "gutenberg-listing",
  processor: ({ node }) => {
    return {
      component: Testing,
      props: {},
    };
  },
};

export default processorGutenbergListing;