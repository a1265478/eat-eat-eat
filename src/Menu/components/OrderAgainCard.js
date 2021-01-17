import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grid } from '@material-ui/core'


function OrderAgainCard(props) {
    const useStyles = makeStyles({
        card: {
            display: 'flex',
            alignItems: 'center'
        },
        cardDetails: {
            flex: 1,
        },
        cardMedia: {
            width: 160,
            height: 160,
            margin: '5px'
        },
        addToCardBtn: {
            background: '#CB5A4B',
            borderRadius: '25px',
            color: '#FFFFFF',
            padding: '0px 15px 0px 15px',
            fontSize: '16px'
        }
    });

    const classes = useStyles();
    const { order } = props;

    return (

        <Grid item xs={12} sm={12} md={12}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography variant="subtitle2" color="textSecondary">
                            {`訂單編號： ${order.orderID}`}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {`下單時間： ${order.orderTime}`}
                        </Typography>
                        <Typography variant="inherit" paragraph>
                            {order.orderItems}
                        </Typography>
                    </CardContent>
                </div>
                <Button className={classes.addToCardBtn}>加入購物車</Button>
            </Card >
        </Grid >
    )
}

export default OrderAgainCard
