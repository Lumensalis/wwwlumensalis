// import { GitHubIcon } from 'nextra/icons'
import type { MetaRecord } from 'nextra'


const meta: MetaRecord = {
  index: 'Home',
  // You can use JSX elements to change the look of titles in the sidebar, e.g. insert icons
  /*Contact: (
    <Italic className="my-class">
      <GitHubIcon height="20" />
      Contact Us
    </Italic>
  ),
  */
    Projects: {

    },
    Topics: {
    },
  Contact: {
    type: "page"
  },
  //'graphql-eslint' : { display:'hidden'},
  About: {
    // Alternatively, you can set title with `title` property
    title: 'About Us',
    type: "page"
    // ... and provide extra configurations
  }
} ;

export default meta;
/*
// Custom component for italicized text
function Italic({ children:any, ...props }) {
  return <i {...props}>{children}</i>
}
  */