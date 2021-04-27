import React from 'react'
import { Link } from '@material-ui/core';
function DropDown() {
    return (
        

            <div className="dropdown_menu">
                <p><strong>Signed in </strong> Yash</p>

                <Link className="dropdown_menu_option" to="#">Your Profile</Link>
                <Link className="dropdown_menu_option" to="#">Payment History</Link>
                <Link className="dropdown_menu_option" to="#">Upgrade</Link>
                <Link className="dropdown_menu_option" to="#">Help</Link>
                <Link className="dropdown_menu_option" to="#">settings</Link>

                <Link className="dropdown_menu_option " to="#">Sign out</Link>

            

        </div>


    )
}

export default DropDown
