import React from 'react'
import UserHeader from './UserHeader/UserHeader'
import ShortProfileView from './UserPortfolio/shortProfileView'

function User() {
    return (
        <div>
            <UserHeader />
            <main>
                <ShortProfileView/>
            </main>
        </div>
    )
}

export default User
