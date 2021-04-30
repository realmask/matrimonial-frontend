/* import React from 'react'
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

export default DropDown */
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',

  },
  dropdown: {
    position: 'absolute',
    width: 150,
    top: 34,
    right: 30,
    left: -120,
    zIndex: 1,

    /*  padding: theme.spacing(1), */
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  caret: {
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderBottom: '6px solid aliceblue',
    backgroundColor: ' rgba(240, 248, 255, 0)',
    marginLeft: '80px',
  }, dropBody: {
    backgroundColor: 'aliceblue',

    width: '100%',
    border: '1px solid rgba(14, 13, 14, 0.282)',
    borderTop: '0px',
    borderRadius: 4,

  }, p: {

    padding: "5px 12px 5px 12px ",
    fontSize: "small",

  },
  div: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.124)",
  }

}));

export default function DropDown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <div className={classes.root}>

        <ArrowDropDownRoundedIcon onClick={handleClick} style={{ fill: "white" }} />
        {open ? (

          <div className={classes.dropdown}>
            <span className={classes.caret}></span>
            <div className={classes.dropBody}>

              <p className={classes.p}>Your Profile</p>
              <p className={classes.p}>Payments</p>

              <div className={classes.div}></div>

              <p className={classes.p}>Premium Members</p>
              <p className={classes.p}>Success Story</p>
              <div className={classes.div}></div>

              <p className={classes.p}>Support</p>
              <p className={classes.p}>Help</p>
              <div className={classes.div}></div>

              <p className={classes.p} style={{ fontWeight: "bold" }}>Sign Out</p>
            </div>

          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}

