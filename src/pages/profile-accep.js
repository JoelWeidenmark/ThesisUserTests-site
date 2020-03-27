import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LayoutProfile from "../components/layoutProfile"
import ProfileFeed from "../components/ProfileFeed/ProfileFeed"

const ProfilePage = (props) => {
    console.log(props.location.state)
    return(
      <LayoutProfile>
        <ProfileFeed profile={props.location.state.Name}>

        </ProfileFeed>
          <Link to="/">
              Go back
          </Link>
      </LayoutProfile>
    )
}

export default ProfilePage
