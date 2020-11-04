const dotenv = require("dotenv");

//if(process.env.NODE_ENV !== 'production'){
dotenv.config();
//}


module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: SPACE_ID,
        accessToken: ACCESS_TOKEN,
      },
    },
  ],
};