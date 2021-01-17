import React from 'react'
import { Toolbar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


function FootBar(props) {
    const shoppingCarStore = useSelector(state => state.shoppingCarStore)
    const useStyles = makeStyles((theme) => ({
        toolbar: {
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            textAlign: 'center',
            background: '#F3F3F3',
        },
        totalCount: {
            flex: 1,
            color: '#CB5A4B'
        },
        confirmButton: {
            background: '#007BFF',
            color: '#FFFFFF',
            padding: '5px 20px 5px 20px',
            borderRadius: '25px',
            border: 'none',
            fontSize: '16px',
            marginRight: '35px',
            textDecoration: 'none'
        },
    }));

    const classes = useStyles();


    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <Typography>訂單小計</Typography>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.totalCount}
                >
                    ${shoppingCarStore.totalPrice}
                </Typography>
                <Link className={classes.confirmButton} to="/orders">確認訂單</Link>
            </Toolbar>
        </div>
    )
}

export default FootBar
