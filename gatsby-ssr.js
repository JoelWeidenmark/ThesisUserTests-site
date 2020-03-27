/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it


import React from "react"
import {PostsStateProvider} from "./src/context/LocalStateContext";
import { ThemeProvider } from "styled-components"
import * as theme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <PostsStateProvider>
            {element}
        </PostsStateProvider>
    </ThemeProvider>
  )