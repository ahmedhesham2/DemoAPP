import React from 'react';
import DateTimePicker from "react-native-modal-datetime-picker";
import { toggle_calendar , change_selected_date } from "../../Actions";
import { connect } from "react-redux";


const Calendar = React.memo(props => {

    return (
        <DateTimePicker
            mode="date"
            date={props.selected_date}
            maximumDate={new Date()}
            isVisible={props.isVisible}
            onConfirm={
               async (date) =>{
                  await props.toggle_calendar(false)
                  props.change_selected_date(date)
                }}
            onCancel={() =>{props.toggle_calendar(false)}}
            />
    );
});

const mapStateToProps = state => {
    return { isVisible : state.Calendar.visiable };
}

export default connect(mapStateToProps,{toggle_calendar , change_selected_date})(Calendar) ;