import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Numeric from './Numeric'
import { useSelector, useDispatch } from "react-redux";
import { addToShoppingCar, updateQuantity } from '../../redux/shoppingCar/shoppingCarActions'


function FoodCard(props) {
    const useStyles = makeStyles({
        card: {
            display: 'flex',
            alignItems: 'center'
        },
        cardDetails: {
            flex: 1,
        },
        dialogMedia: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
            width: '40vw',
            height: '40vw',
        },
        plusButton: {
            color: '#000000',
            borderRadius: '25px',
            fontSize: '14px',
            margin: '5px'
        },
        itemCount: {
            display: 'block',
            height: '25px',
            width: '25px',
            lineHeight: '25px',
            position: 'absolute',
            right: '-5px',
            top: '-5px',
            fontSize: '16px',
            textAlign: 'center',
            background: '#1C9E00',
            color: '#FFFFFF',
            padding: '0px 0px',
            margin: '0 auto',
            borderRadius: '50%'
        }

    });

    const dispatch = useDispatch()
    const shoppingCarData = useSelector(state => state.shoppingCarStore)
    const [open, setOpen] = useState(false);
    const [food, setFood] = useState({ ...props.food, AddOns: [] });
    const [selectedBtn, setSelectedBtn] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setSelectedID('')
        setOpen(false);
    };

    const handleToShoppingCar = (food) => {
        var existShopItem = shoppingCarData.shopList.find(item => item.item.FoodID === food.FoodID &&
            JSON.stringify(food.AddOns) === JSON.stringify(item.item.AddOns))
        let quantity = document.getElementById('itemCount').value
        if (existShopItem) {
            dispatch(updateQuantity(existShopItem.shopID, parseInt(quantity)))
        } else {
            dispatch(addToShoppingCar(food, parseInt(quantity)));
        }
        setOpen(false)
    }

    const confirmButtobStyle = {
        background: '#047BFE',
        color: '#FFFFFF',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '18px',
    }

    const cancelButtobStyle = {
        background: '#979797',
        color: '#FFFFFF',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '18px',
    }

    const optionsButtonStyle = {
        background: '#FFFFFF',
        color: '#000000',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'solid #000000 1px',
        margin: '0 5px',
        fontSize: '18px',
        outline: 'none',
        boxShadow: 'none'
    }

    const optionsSelectedStyle = {
        background: '#047BFE',
        color: '#ffffff',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'none',
        margin: '0 5px',
        fontSize: '18px',
        outline: 'none',
        boxShadow: 'none'
    }
    const [selectedID, setSelectedID] = useState('')
    const changeTypeOnlySelection = (currentOption, selection) => {
        setFood({
            ...food,
            Price: props.food.Price + selection.selectionPrice,
            AddOns: [{
                optionID: currentOption._id,
                optionName: currentOption.optionsName,
                selectionList: [selection]
            }]
        })

        setSelectedID(selection._id)
    }

    const changeTypeMultiSelection = (currentOption, selection) => {
        selectedID === selection._id ? setSelectedID('') : setSelectedID(selection._id)
        if (food.AddOns.find(option => option.optionID === currentOption._id) !== undefined) {
            setFood({
                ...food,
                Price: food.Price,//?????
                AddOns: food.AddOns.map(option => {
                    if (option.optionID !== currentOption._id) {
                        return option;
                    } else {

                        return Object.assign({}, option, {
                            selectionList: option.selectionList.find(selected => selected._id === selection._id) !== undefined ?
                                option.selectionList.filter(selected => selected !== selection)
                                : [...option.selectionList, selection]
                        })
                    }
                })
            })
        } else {
            setFood({
                ...food,
                Price: props.food.Price,
                AddOns: [...food.AddOns, {
                    optionID: currentOption._id,
                    optionName: currentOption.optionsName,
                    selectionList: [selection]
                }]
            })
        }
    }

    function TypeOnlyOptions(props) {
        let priceStr = props.selection.selectionPrice === 0 ? '' : `+$${props.selection.selectionPrice}`
        return (
            <button
                style={
                    selectedID === props.selection._id ? optionsSelectedStyle : optionsButtonStyle
                }
                onClick={() => changeTypeOnlySelection(props.option, props.selection)}>
                {
                    `${props.selection.selectionName} ${priceStr}`
                }
            </button>
        )
    }


    function TypeMultiOptions(props) {
        let priceStr = props.selection.selectionPrice === 0 ? '' : `$${props.selection.selectionPrice}`
        return (
            <button
                style={
                    selectedID === props.selection._id ? optionsSelectedStyle : optionsButtonStyle
                }
                onClick={() => changeTypeMultiSelection(props.option, props.selection)}>
                {
                    `${props.selection.selectionName} ${priceStr}`
                }
            </button>
        )
    }
    function OptionsComponents(props) {
        return (
            <div>
                <p>
                    {props.option.isRequire && <span style={{ color: 'red', fontWeight: 'bold' }}>*必選</span>}
                    {` ${props.option.optionsName}`}
                </p>

                {
                    props.option.optionsSelectionList.map(selection => {
                        return (
                            props.option.type === 'only' ?
                                <TypeOnlyOptions key={selection._id} option={props.option} selection={selection} /> : <TypeMultiOptions key={selection._id} option={props.option} selection={selection} />
                        )
                    })
                }

            </div>
        )
    }

    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12}>
                <CardActionArea component="a" onClick={handleClickOpen}>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography variant="h5">
                                    {props.food.FoodName}
                                </Typography>

                                <Typography variant="subtitle1" paragraph>
                                    ${props.food.Price}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </CardActionArea>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={'md'}

            >
                <DialogContent>
                    <Typography style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5em' }} >{props.food.FoodName}</Typography>
                    <Typography style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5em' }}>{`$${food.Price}`}</Typography>
                    {props.food.Options.map(option => {
                        return <OptionsComponents key={option._id} option={option} />
                    })}
                    <Numeric />

                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center'
                }}>
                    <Button onClick={handleClose} color="primary" autoFocus style={cancelButtobStyle}>
                        回目錄
                </Button>
                    <Button onClick={() => handleToShoppingCar(food)} color="primary" autoFocus style={confirmButtobStyle}>
                        選好了
                </Button>
                </DialogActions>
            </Dialog>
        </div >

    )
}

export default FoodCard
