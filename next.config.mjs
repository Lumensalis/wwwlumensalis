//import type { NextConfig } from "next";
//const CompressionPlugin = require("compression-webpack-plugin");

import nextra from 'nextra';

const withNextra = nextra({
  //theme: 'nextra-theme-docs',
  //themeConfig: './theme.config.tsx',
  // contentDirBasePath: '/content' 
    latex:true
  /*
   turbopack: {
       resolveAlias: {
            // Path to your `mdx-components` file with extension
         'next-mdx-import-source-file': './src/mdx-components.js'
       }
     }
       */
});




//const nextConfig: NextConfig = 
const nextConfig = 
{
  /* config options here */
reactStrictMode: true,
output:'export',

  //distDir:'dist',
  compress: true,

    trailingSlash: true,
   images: { 
        unoptimized: true  // required for static export
    } 

};

// export { Nextra, nextra as default };

export default withNextra(nextConfig);
//export { nextConfig, withNextra as default };
