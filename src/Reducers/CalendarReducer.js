export const CalendarReducer = (Default_Calendar_State = { selected_date :new Date() , visiable : false } ,Action) => {
    switch(Action.type){
        case "toggle_calendar" :
            return {...Default_Calendar_State , visiable : Action.payload } ;
        case "change_selected_date" :
            return {...Default_Calendar_State , selected_date : Action.payload } ;
        default :
            return Default_Calendar_State ;
    }
}