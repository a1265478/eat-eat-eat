import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NumericContainer from './NumericContainer';
import { Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, updateTotalPrice } from '../../redux/shoppingCar/shoppingCarActions'


function ShoppingCarItem(props) {
    const shoppingCarStore = useSelector(state => state.shoppingCarStore)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(updateQuantity(props.shopItem.shopID, 1))
        dispatch(updateTotalPrice(props.shopItem.item.Price))
    }
    const handleDecrement = () => {
        if (shoppingCarStore.shopList.find(shopItem => shopItem.shopID === props.shopItem.shopID).quantity - 1 < 0) {
            return
        }
        dispatch(updateQuantity(props.shopItem.shopID, -1))
        dispatch(updateTotalPrice(-props.shopItem.item.Price))
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },

    }));

    function formatAddOns(addOns) {
        let addOnStr = '';
        addOns.map(selection => {
            selection.selectionList.map(selected => {
                addOnStr += `${selected.selectionName} ${selected.selectionPrice === 0 ? '' : '+$' + selected.selectionPrice}/`
            })
        })

        return addOnStr === '' ? '' : `${addOnStr.slice(0, -1)}`;
    }

    const classes = useStyles();
    return (

        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography component="h2" variant="h5">
                                {props.shopItem.item.FoodName}
                            </Typography>
                            <p>{formatAddOns(props.shopItem.item.AddOns)}</p>
                        </Grid>

                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">${props.shopItem.item.Price * props.shopItem.quantity}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Box justifyContent='center' style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                <RemoveIcon onClick={handleDecrement} style={{ background: '#E5E6E5', borderRadius: '50%', width: '30px', height: '30px' }
                } />
                <p style={{
                    WebkitBorderRadius: '99em',
                    height: '30px', width: '80px',
                    margin: '0px 5px 0px 5px',
                    fontSize: '20px',
                    textAlign: 'center',
                    WebkitAppearance: 'none',
                    outline: 'none',
                    border: '2px solid #000000',
                }}>
                    {shoppingCarStore.shopList.find(shopItem => shopItem.shopID === props.shopItem.shopID).quantity}
                </p>

                <AddIcon onClick={handleIncrement} style={{ background: '#E5E6E5', borderRadius: '50%', width: '30px', height: '30px' }} />
            </Box >
            {/* <NumericContainer shopID={props.shopItem.shopID} shopItem={props.shopItem.item} quantity={props.shopItem.quantity} /> */}
        </Paper>
    )
}

export default ShoppingCarItem
