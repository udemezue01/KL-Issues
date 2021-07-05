const { createHttpLink } = require(`apollo-link-http`);
const fetch = require(`node-fetch`);

module.exports = {
  siteMetadata: {
    title: "kl Issues",
  },
  plugins: [

    {
      resolve: `gatsby-source-google-reviews-en`,
      options: {
        placeId: `ChIJDdsPF6whTIYR3omS_FD6Iyw`,
        apiKey: `F66B09A0B8854F1DB9095E91D1438B17`,
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Kl",
        fieldName: "kl",
        // Create Apollo Link manually. Can return a Promise.
        createLink: pluginOptions => {
          return createHttpLink({
            uri: `https://kaleidoscope-graph-ql.herokuapp.com/graphql`,
            headers: {
              Authorization: `Bearer ${process.env.KL_TOKEN}`,
            },
            fetch,
        
          })
        },
      },
    },

  ],
};
