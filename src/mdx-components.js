import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import YouTube from '@/components/mdx/YouTube'
import Image from "next/image";

// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    YouTube:YouTube,
    Image:Image,
    ...themeComponents,
    
    ...components
  }
}