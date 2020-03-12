import React from 'react'

import styled from "styled-components"
import ProfileBar from "./ProfileBar/ProfileBar"

const LeftPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5px;
`

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
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
            <ProfileWrapper>
                <ProfileBar>

                </ProfileBar>
            </ProfileWrapper>
            <LeftPanelAdBox>
                AdBox
            </LeftPanelAdBox>
            LeftPanelWrapper
        </LeftPanelWrapper>
    )
}

export default LeftPanel
