/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import {PostsStateProvider} from "./src/context/LocalStateContext";
import {BirthdayProvider} from "./src/context/BirthdayContext";
import { ThemeProvider } from "styled-components"
import * as theme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <BirthdayProvider>
            <PostsStateProvider>
                {element}
            </PostsStateProvider>
        </BirthdayProvider>
    </ThemeProvider>
  )