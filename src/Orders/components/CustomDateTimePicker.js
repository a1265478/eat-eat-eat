import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TimePicker from './TimePicker'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { setTakeTime } from '../../redux/user/userActions'
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block',
        flexWrap: 'wrap',
        margin: '0 auto',
        justifyContent: 'center'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    datatimePick: {
        width: '100%',
        border: '1px solid #000000',
        borderRadius: '25px',
        padding: '5px'
    },
    datetime: {
        textAlign: 'center',
        margin: '5px',
        fontSize: '20px'
    },
    datePicker: {
        padding: '10px'
    },
    confirmButtobStyle: {
        background: '#047BFE',
        color: '#FFFFFF',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '18px',
    },
    cancelButtobStyle: {
        background: '#979797',
        color: '#FFFFFF',
        padding: '0px 30px 0px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '18px',
    }
}));


export default function CustomDatetimePicker() {
    const dispatch = useDispatch()
    const now = moment(new Date()).add(15, 'm').toDate();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(`${formatDateTime(now.getMonth() + 1)}-${formatDateTime(now.getDate())}(${formatWeekDay(now.getDay())})`);
    const [time, setTime] = useState(`${formatDateTime(now.getHours())}:${formatDateTime(now.getMinutes())}`);

    useEffect(() => {
        dispatch(setTakeTime(`${date} ${time}`))
        return () => {

        }
    }, [dispatch])
    const style = {
        datetimePicker: {
            padding: '5px',
            width: '150px',
            margin: '0 auto'
        }
    }
    const handleDateChange = (event) => {
        setDate(event.target.value)
        dispatch(setTakeTime(`${date} ${time}`))

    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
        dispatch(setTakeTime(`${date} ${time}`))
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function formatDateTime(value) {
        return ("0" + (value)).slice(-2)
    }

    function formatWeekDay(day) {
        switch (day) {
            case 1:
                return '一'
            case 2:
                return '二'
            case 3:
                return '三'
            case 4:
                return '四'
            case 5:
                return '五'
            case 6:
                return '六'
            case 7:
                return '日'
            default:
                break;
        }
    }

    console.log(typeof (moment(date).format('DD')))
    console.log(formatDateTime(now.getDate()))

    const minTime = `${now.getHours()}:${now.getMinutes()}AM`
    return (
        <div>
            <div className={classes.datatimePick} onClick={() => setOpen(true)}>
                <p className={classes.datetime}>{`${date} ${time}`}</p>
            </div>
            {/* <Button onClick={handleClickOpen}>Open select dialog</Button> */}
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>選擇取餐時間</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <select onChange={handleDateChange} style={style.datetimePicker}>
                                <option value={`${formatDateTime(now.getMonth() + 1)}-${formatDateTime(now.getDate())}(今天)`}>{`${("0" + (now.getMonth() + 1)).slice(-2)}-${("0" + (now.getDate())).slice(-2)}(今天)`}</option>
                                <option value={`${formatDateTime(now.getMonth() + 1)}-${formatDateTime(now.getDate() + 1)}`}>{`${("0" + (now.getMonth() + 1)).slice(-2)}-${("0" + (now.getDate() + 1)).slice(-2)}`}</option>
                                <option value={`${formatDateTime(now.getMonth() + 1)}-${formatDateTime(now.getDate() + 2)}`}>{`${("0" + (now.getMonth() + 1)).slice(-2)}-${("0" + (now.getDate() + 2)).slice(-2)}`}</option>
                            </select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TimePicker style={style.datetimePicker}
                                beginLimit={parseInt(moment(date).format('DD')) !== now.getDate() ? "07:00AM" : minTime}
                                endLimit="23:00PM"
                                onChange={handleTimeChange} />

                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions style={{
                    justifyContent: 'center',
                    marginBottom: '10px',
                }}>
                    <Button className={classes.cancelButtobStyle} onClick={handleClose} color="primary">關閉</Button>
                    <Button className={classes.confirmButtobStyle} onClick={handleClose} color="primary">確定</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}