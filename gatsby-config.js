module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `go3d04xtgx0h`,
        accessToken: `pmQzsEWyqJ-sMDeXgNSqh9bFFffUQRdzWOuje4tUxlY`,
      },
    },
  ],
};