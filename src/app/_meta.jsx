import { GitHubIcon } from 'nextra/icons'
 
export default {
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
  About: {
    // Alternatively, you can set title with `title` property
    title: 'About Us',
    type: "page"
    // ... and provide extra configurations
  }
}
 
// Custom component for italicized text
function Italic({ children, ...props }) {
  return <i {...props}>{children}</i>
}