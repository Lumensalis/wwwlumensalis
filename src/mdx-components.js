import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import YouTube from '@/components/mdx/YouTube'
  
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    YouTube:YouTube,
    ...themeComponents,
    
    ...components
  }
}