import React from 'react'
import moment from 'moment'
function TimePicker(props) {
    function isEarlierThanEndLimit(timeValue, endLimit, lastValue) {
        var timeValueIsEarlier = moment(timeValue, 'h:mmA').diff(moment(endLimit, 'h:mmA')) < 0;
        var timeValueIsLaterThanLastValue = lastValue === undefined ? true : moment(lastValue, 'h:mmA').diff(moment(timeValue, 'h:mmA')) < 0;
        return timeValueIsEarlier && timeValueIsLaterThanLastValue;
    }

    function TimeList(props) {
        var timeValue = props.props.beginLimit || "12:00AM";
        var lastValue;
        var endLimit = props.props.endLimit || "11:59PM";
        var step = props.props.step || 10;

        var options = [];
        options.push(React.createElement(
            'option',
            { key: timeValue, value: timeValue },
            timeValue
        ));

        while (isEarlierThanEndLimit(timeValue, endLimit, lastValue)) {
            lastValue = timeValue;
            timeValue = moment(timeValue, 'h:mmA').add(step, 'minutes').format('h:mmA');

            options.push(React.createElement(
                'option',
                { key: timeValue, value: timeValue, style: { fontSize: '14px' } },
                timeValue
            ));
        }
        return React.createElement(
            'select',
            {
                defaultValue: props.props.defaultValue, onChange: props.props.onChange, name: props.props.name, style: props.props.style
            },
            options
        );
    }

    return (
        <div>
            <TimeList props={props} />
        </div>
    )
}

export default TimePicker
