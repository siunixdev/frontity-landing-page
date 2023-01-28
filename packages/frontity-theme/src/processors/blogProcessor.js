import ContentBlogListing from "../components/blog-listing";

const processorBlogListing = {
  name: "blog-listing",
  priority: 10,
  test: ({ node }) => node.component === "blog-listing",
  processor: ({ node }) => {
    return {
      component: ContentBlogListing,
      props: {},
    };
  },
};

export default processorBlogListing;
