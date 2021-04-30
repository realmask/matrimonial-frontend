import React from 'react'
import ProfileCard from './UserBodyContent/ProfileCard'
import UserHeader from './UserHeader/UserHeader'
import ShortProfileView from './UserPortfolio/shortProfileView';
import PremiumPlans from '../PremiumPlans/PremiumBanner'
import { Route, Switch } from 'react-router-dom';

function User() {
    return (
        <div>
            <UserHeader />
            <Switch>
                <Route path='/plans'><PremiumPlans /></Route>
                <Route exact path='/'>
                    <main>
                        <ShortProfileView />
                        <ProfileCard />
                    </main>
                </Route>
            </Switch>


        </div>
    )
}

export default User
