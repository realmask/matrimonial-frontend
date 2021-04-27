import React from 'react'
import BodyContent from './UserBodyContent/BodyContent'
import UserHeader from './UserHeader/UserHeader'
import ShortProfileView from './UserPortfolio/shortProfileView'

function User() {
    return (
        <div>
            <UserHeader />
            <main>
                <ShortProfileView/>
                <BodyContent/>
            </main>
        </div>
    )
}

export default User
