const settings = {
  name: "frontity-landing-page",
  state: {
    frontity: {
      url: "http://wordpress-frontity-landing-page.test/",
      title: "Frontity",
      description: "Frontity is the easiest way to create lightning fast websites using WordPress and React. Open source and free to use."
    }
  },
  packages: [
    {
      name: "frontity-theme",
      state: {
        theme: {
          menu: [
            {
              label: 'Home',
              link: '/'
            },
            {
              label: 'Showcase',
              link: '/showcase'
            },
            {
              label: 'Blog',
              link: '/blog'
            },
            {
              label: 'About',
              link: '/about'
            },
            {
              label: 'Contact',
              link: '/contact'
            },
            {
              label: 'Contact by Cloudflare',
              link: '/contact-cloudflare'
            },
            {
              label: 'Gutenberg Page',
              link: '/gutenberg'
            },
          ]
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://wordpress-frontity-landing-page.test/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
