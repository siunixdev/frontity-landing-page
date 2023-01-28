import ContentShowcaseListing from "../components/showcase-listing";

const processorShowcaseListing = {
  name: "showcase-listing",
  priority: 10,
  test: ({ node }) => node.component === "showcase-listing",
  processor: ({ node }) => {
    return {
      component: ContentShowcaseListing,
      props: {},
    };
  },
};

export default processorShowcaseListing;
