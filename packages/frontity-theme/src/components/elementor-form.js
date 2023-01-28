import React, { useEffect, useState, useCallback } from "react";
import { connect, styled } from "frontity";
import axios from "axios";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

function ContactForm({ state, attributes, children }) {
  const [verifed, setVerified] = useState(false);

  // children[3]?.props?.children.pop();

  const ReCaptchaComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("SEND_CONTACTS");
      // Do whatever you want with the token
      axios
        .post("http://localhost:5500/verify/", {
          token: token,
        })
        .then(
          (response) => {
            if (response.data?.success === true) setVerified(true);
          },
          (error) => {
            console.log(error);
          }
        );
    }, [executeRecaptcha]);

    // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
      handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (verifed) {
        const formData = new FormData(e.target);
        console.log(formData);

        formData.append("action", "elementor_pro_forms_send_form");
        const res = await axios.post(
          `${state.source.url}/wp-admin/admin-ajax.php`,
          formData
        );
        const data = res.data;
        console.log(data);
        if (data.success) {
          console.log(`Form submitted successfully`);
        } else {
          console.log(`${data?.data?.message}`);
        }
        e.target.reset();
        handleReCaptchaVerify();
      } else {
        console.log("You are not verified as human bro!");
      }
    };

    return (
      <form
        className={attributes.className}
        name={attributes.name}
        method={attributes.method}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    );
  };

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey="6Lfu_PMjAAAAAPsmW78h4l5ViOPKv-vYj8q7m0Fk">
        <ReCaptchaComponent />
      </GoogleReCaptchaProvider>
      <p>{`verified is ${verifed}`}</p>
    </>
  );
}

export default connect(ContactForm);