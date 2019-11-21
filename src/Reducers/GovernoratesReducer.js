export const GovernoratesReducer = (Governorates_list = [] ,Action) => {
     switch(Action.type){
        case "FETCH_Governorate" :
            return Action.payload ;
        default :
            return Governorates_list ;
     }
}
