/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it


import React from "react"
import {PostsStateProvider} from "./src/context/LocalStateContext";
import {BirthdayProvider} from "./src/context/BirthdayContext";
import {TaskStateProvider} from "./src/context/TaskContext"
import { ThemeProvider } from "styled-components"
import * as theme from "./src/theme/theme"
import { types, transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 2000,
    offset: '20px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
    type: types.INFO
  }


export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <AlertProvider template={AlertTemplate} {...options}>
            <TaskStateProvider>
                <BirthdayProvider>
                    <PostsStateProvider>
                        {element}
                    </PostsStateProvider>
                </BirthdayProvider>
            </TaskStateProvider>
        </AlertProvider>
    </ThemeProvider>
  )