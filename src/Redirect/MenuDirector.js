import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { setAccessToken, setTokenID, getUserIDByToken } from '../redux/user/userActions'
import { CLIENT_ID, CLOSE_TIME_HOUR, OPEN_TIME_HOUR, ORIGIN_URI, REDIRECT_URI } from '../const';
import { useSelector, useDispatch } from 'react-redux'

function MenuDirector() {
    const [isOpenTime, setIsOpenTime] = useState(false)
    const userStore = useSelector(store => store.userStore)
    const dispatch = useDispatch()

    let url = new URL(document.URL);
    let currentCode = url.searchParams.get("code")
    let state = Math.random().toString(36).substring(7);

    function getUser(currectCode) {
        const params = new URLSearchParams()
        params.append('grant_type', 'authorization_code')
        params.append('code', currectCode)
        params.append('redirect_uri', `${ORIGIN_URI}menu`)
        params.append('client_id', CLIENT_ID)
        params.append('client_secret', '32a9033ad4cc7c022582395c2d54f340')

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('https://api.line.me/oauth2/v2.1/token', params, config)
            .then((result) => {
                console.log('eee')
                // dispatch(setAccessToken(result.data.access_token))
                // dispatch(setTokenID(result.data.id_token))
                // dispatch(getUserIDByToken(result.data.id_token))
            })
            .catch((err) => {
                // window.location.href = url.origin
                console.log(err)
            })
    }

    function checkOpenTime(params) {
        var today = new Date().getHours();
        if (today >= OPEN_TIME_HOUR && today <= CLOSE_TIME_HOUR) {
            return true
        } else {
            return false
        }
    }
    useEffect(() => {
        setIsOpenTime(checkOpenTime())
    }, [isOpenTime])

    if (isOpenTime) {
        // window.location.href = url.origin + '/menu'
        if (currentCode === null) {
            console.log('direct to line')
            window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}&scope=openid%20profile`
        } else {
            url = new URL(document.URL);
            currentCode = url.searchParams.get("code")
            getUser(currentCode)
        }
    }
    return (
        <div>
            <h1>{isOpenTime ? '' : '現在非營業時間'}</h1>
        </div>
    )
}

export default MenuDirector
