export const Spinner = (state = false , Action) => {
    switch(Action.type){
        case "set_spinner" :
            return Action.payload ;
        default :
            return state;
    }
}