import React from "react";
import { connect, Head } from "frontity";

function FrontityHead({ state }) {
  const data = state.source.get(state.router.link);

  const refreshVersion = "1673323216";

  const bodyClass =
    "elementor-default elementor-page elementor-kit-5" + " page-id-" + data.id;

  const loadPageStyles = () => {
    let loadedStyles = [];
    if (
      state?.theme?.preLoadedPageStyles &&
      Array.isArray(state.theme.preLoadedPageStyles)
    ) {
      state.theme.preLoadedPageStyles.forEach((item) => {
        loadedStyles.push(item);
      });
    }
    if (!loadedStyles.includes(data.id)) loadedStyles.push(data.id);
    return loadedStyles.map((item, index) => {
      return (
        <link
          rel="stylesheet"
          id={`elementor-post-${item}-css`}
          href={`http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-${item}.css?ver=${refreshVersion}`}
          media="all"
        />
      );
    });
  };

  return (
    <Head
      bodyAttributes={{
        class: bodyClass,
      }}
    >
      <html lang="en" />
      <title>{state.frontity.title}</title>
      <meta name="description" content={state.frontity.description} />
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script> */}
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></script>
      {/* <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" async defer></script> */}
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <link
        rel="stylesheet"
        id="dashicons-css"
        href="http://wordpress-frontity-landing-page.test/wp-includes/css/dashicons.min.css?ver=6.1.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="admin-bar-css"
        href="http://wordpress-frontity-landing-page.test/wp-includes/css/admin-bar.min.css?ver=6.1.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.16.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-pro-notes-frontend-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor-pro/assets/css/modules/notes/frontend.min.css?ver=3.8.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-common-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor/assets/css/common.min.css?ver=3.9.2"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="http://wordpress-frontity-landing-page.test/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="classic-theme-styles-css"
        href="http://wordpress-frontity-landing-page.test/wp-includes/css/classic-themes.min.css?ver=1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="contact-form-7-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.7.2"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wp_dummy_content_generator-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/wp-dummy-content-generator/public/css/wp_dummy_content_generator-public.css?ver=2.1.2"
        media="all"
      />
      <link
        rel="stylesheet"
        id="hello-elementor-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/themes/hello-elementor/style.min.css?ver=2.6.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="hello-elementor-theme-style-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/themes/hello-elementor/theme.min.css?ver=2.6.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.9.2"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-33-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-33.css?ver=1673271693"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-pro-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css?ver=3.8.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-global-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/global.css?ver=1673271693"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-195-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-195.css?ver=1673506952"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-40-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-40.css?ver=1673273271"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-60-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-60.css?ver=1673273563"
        media="all"
      />
      <link
        rel="stylesheet"
        id="google-fonts-1-css"
        href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.1.1"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-824-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-824.css?ver=1674008434"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-33-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-33.css?ver=1673576785"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-global-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/global.css?ver=1673596031"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-40-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-40.css?ver=1673576785"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-60-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-60.css?ver=1673576785"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-778-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/uploads/elementor/css/post-778.css?ver=1673576785"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-shared-0-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-fa-solid-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-fa-brands-css"
        href="http://wordpress-frontity-landing-page.test/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3"
        media="all"
      />
      {loadPageStyles()}
    </Head>
  );
}

export default connect(FrontityHead);
