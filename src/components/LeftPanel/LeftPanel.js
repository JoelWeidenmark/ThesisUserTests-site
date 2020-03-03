import React from 'react'

import styled from "styled-components"

const LeftPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 5px;
`

const ProfileBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    border: 1px solid;
`

const LeftPanelAdBox = styled.div`
    display: flex;
    height: 200px;
    border: 1px solid;
    margin-top: 5px;
`

const LeftPanel = () => {
    return (
        <LeftPanelWrapper>
            <ProfileBar>
                ProfileBar
            </ProfileBar>
            <LeftPanelAdBox>
                AdBox
            </LeftPanelAdBox>
            LeftPanelWrapper
        </LeftPanelWrapper>
    )
}

export default LeftPanel
