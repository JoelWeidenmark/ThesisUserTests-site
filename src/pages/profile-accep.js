import React, {useState, useContext} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LayoutProfile from "../components/layoutProfile"
import ProfileFeed from "../components/ProfileFeed/ProfileFeed"
import {LocalStateContext} from "../context/LocalStateContext"

const ProfilePage = (props) => {

    const{getActiveUser} = useContext(LocalStateContext)

    return(
      <LayoutProfile>
        <ProfileFeed profile={getActiveUser()}>

        </ProfileFeed>
          <Link to="/">
              Go back
          </Link>
      </LayoutProfile>
    )
}

export default ProfilePage
