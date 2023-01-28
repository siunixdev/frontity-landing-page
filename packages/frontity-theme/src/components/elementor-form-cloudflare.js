import React, { useEffect, useState, useCallback } from "react";
import { connect, styled } from "frontity";
import axios from "axios";
import toast from "react-hot-toast";

function ContactFormCloudflare({ state, attributes, children }) {
  const [token, setToken] = useState("");

  const submitForm = async (formData) => {
    formData.append("action", "elementor_pro_forms_send_form");
    formData.append("cf-turnstile-response", token);
    const res = await axios.post(
      `${state.source.url}/wp-admin/admin-ajax.php`,
      formData
    );

    return res.data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = await submitForm(formData);
    if (data.success) {
      e.target.reset();
      toast.success("Form submitted successfully!");
    } else {
      toast.error(`${data?.data?.message}`);
    }

    setTimeout(() => {
      location.reload()
    }, 2000);

  };

  useEffect(() => {
    turnstile.render("#cloudflare-captcha-container", {
      sitekey: "0x4AAAAAAACCbt-BYwHycKpv",
      action: "SUBMIT_CONTACT",
      callback: function (token) {
        setToken(token);
      },
    });
  }, []);

  // window.onloadTurnstileCallback = function () {
  //   turnstile.render("#cloudflare-captcha-container", {
  //     sitekey: "0x4AAAAAAACCbt-BYwHycKpv",
  //     action: "SUBMIT_CONTACT",
  //     callback: function (token) {
  //       setToken(token);
  //     },
  //   });
  // };

  return (
    <form
      className={attributes.className}
      name={attributes.name}
      method={attributes.method}
      onSubmit={handleSubmit}
    >
      {children}
      <div id="cloudflare-captcha-container"></div>
      {/* <button type="submit">Submit with cloudflare captcha</button> */}
    </form>
  );
}

export default connect(ContactFormCloudflare);
