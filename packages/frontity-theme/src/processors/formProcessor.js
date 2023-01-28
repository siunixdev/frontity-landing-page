import ContactForm from "../components/elementor-form";
import ContactFormCloudflare from '../components/elementor-form-cloudflare'

const processorFormListing = {
  name: "form-listing",
  priority: 10,
  test: ({ node }) => node.component === "form" &&
  node?.props?.className?.split(" ").includes("elementor-form"),
  processor: ({ node }) => {
    const pathname = window.location.pathname;
    return {
      component: pathname === '/contact-cloudflare/' ? ContactFormCloudflare : ContactForm,
      props: {
        attributes: node.props
      },
    };
  },
};

export default processorFormListing;
