import type { Metadata } from "next";
import "./globals.css";
import 'katex/dist/katex.min.css'

import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import {  PageMapItem } from 'nextra';
import 'nextra-theme-docs/style.css';


//import { LCPFRepoDocs } from "./LCPFRepo/[[...slug]]/page"
//import { gqlintRepoDocs } from "@/app/graphql-eslint/[[...slug]]/page"


export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: "Lumensalis Web",
  description: "Lumensalis Website",
}

const banner = <Banner storageKey="some-key">Lumensalis CircuitPython framework coming soon 🎉</Banner>
const navbar = (
  <Navbar
    logo={<div>
         <span className="logoNav"> <br/> <br/> </span>
       &nbsp; <b>Lumensalis</b>
                </div>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>©  {new Date().getFullYear()} James Fowler.</Footer>


async function getPageMapWithRemotes() : Promise<PageMapItem[]>{
    //const pageMap = [...(await getPageMap()), graphqlEslintPageMap]
    return [...(await getPageMap()),
        /// LCPFRepoDocs.pageMap
        // gqlintRepoDocs.pageMap
         ]    
}


export default async function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMapWithRemotes()}
          docsRepositoryBase="https://gitlab.com/lumensalis/wwwlumensalis/-/tree/master"
          //editLink={null}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
