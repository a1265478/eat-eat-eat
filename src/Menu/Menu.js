import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import FootBar from './components/FootBar';
import Navbar from './components/Navbar';
import FoodListContainer from './components/FoodListContainer'
import { listAllCategories } from "../redux/category/categoryActions";
import { listAllFoods } from '../redux/food/foodActions'
import { setOrderWay, setAccessToken, setTokenID, getUserIDByToken } from '../redux/user/userActions'
import SearchBar from './components/SearchBar'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShoppingCar from './components/ShoppingCar'
import OrderAgainListView from './components/OrderAgainListView'
import axios from 'axios'
import '../const'
import { CLOSE_TIME_HOUR, OPEN_TIME_HOUR, ORIGIN_URI } from '../const';

function Menu() {
    const [isOpen, setIsOpen] = useState(true)
    const [isOpenTime, setIsOpenTime] = useState(false)
    const [isHere, setIsHere] = useState(false)
    const userStore = useSelector(state => state.userStore)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAllCategories())
        dispatch(listAllFoods())
        setIsOpen(userStore.orderWay === '')
        setIsOpenTime(checkOpenTime())
        // getUser()
    }, [dispatch, isOpenTime])

    function checkOpenTime(params) {
        var today = new Date().getHours();
        if (today >= OPEN_TIME_HOUR && today <= CLOSE_TIME_HOUR) {
            return true
        } else {
            return false
        }
    }

    const changeOrderWay = (e) => {
        dispatch(setOrderWay(e.target.innerText))
        setIsOpen(false)
        setIsHere(e.target.innerText === '內用')
    }

    const getUser = () => {
        let url = new URL(document.location.href)
        let currentCode = url.searchParams.get('code')
        const params = new URLSearchParams()
        params.append('grant_type', 'authorization_code')
        params.append('code', currentCode)
        params.append('redirect_uri', `${ORIGIN_URI}menu`)
        params.append('client_id', '1655565427')
        params.append('client_secret', '32a9033ad4cc7c022582395c2d54f340')

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('https://api.line.me/oauth2/v2.1/token', params, config)
            .then((result) => {
                dispatch(setAccessToken(result.data.access_token))
                dispatch(setTokenID(result.data.id_token))
                dispatch(getUserIDByToken(result.data.id_token))
            })
            .catch((err) => {
                // window.location.href = url.origin
                console.log(err)
            })
    }

    function HereOrTogoDialog() {
        return (<Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">非營業時間</DialogTitle>
            <DialogContent>
                <h3>{`營業時間:${OPEN_TIME_HOUR}~${CLOSE_TIME_HOUR}`}</h3>
            </DialogContent>

        </Dialog>)
    }
    return (
        <div>
            {/* { !isOpenTime && <HereOrTogoDialog />} */}
            {/* <HereOrTogoDialog /> */}
            <Navbar />
            <SearchBar />
            {userStore.isAtOrderAgain ? <OrderAgainListView /> : <FoodListContainer />}
            {/* <FoodListContainer /> */}
            <ShoppingCar />
            <FootBar />
        </div>
    );
}

export default Menu;
