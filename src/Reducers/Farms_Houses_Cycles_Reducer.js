export const Farms_Houses_Cycles_Reducer = ( Total_Farms_Data = [] , Action ) => {
    switch(Action.type){
        case "get_load_data" :
            Total_Farms_Data = [] ;
            Object.keys(Action.payload["farmsAndHouses"]["IDs"]).forEach(key => {
               Total_Farms_Data = [...Total_Farms_Data , { FarmID : Action.payload["farmsAndHouses"]["IDs"][key] , FarmName : key } ]
            });

            for(farm in Total_Farms_Data ){
                Houses_list = [];
                for(cycle_id in Action.payload["farmsAndHouses"]["cycles"]){
                    if(Total_Farms_Data[farm]["FarmName"] == cycle_id){
                        Total_Farms_Data[farm]["CycleID"] = Action.payload["farmsAndHouses"]["cycles"][cycle_id] ;
                    }
                }

                for (house_data in Action.payload["farmsAndHouses"]){
                    if(Total_Farms_Data[farm]["FarmName"] == house_data){
                       for(house in Action.payload["farmsAndHouses"][house_data]){
                            Houses_list = [...Houses_list , { HouseID : Action.payload["farmsAndHouses"][house_data][house][1] , HouseName : Action.payload["farmsAndHouses"][house_data][house][0] } ] ;
                       }
                    }
                    Total_Farms_Data[farm]["Houses"] = Houses_list ;
                }
            }
            return Total_Farms_Data;
        default :
            return Total_Farms_Data ;
    }
}


export const SelectedFarmReducer = ( SelectedFarm = {} , Action ) => {
    switch(Action.type){
        case "get_load_data" :
            var Selected_Farm_Data = []
            Object.keys(Action.payload["farmsAndHouses"]["IDs"]).forEach(key => {
               Selected_Farm_Data = [...Selected_Farm_Data , { FarmID : Action.payload["farmsAndHouses"]["IDs"][key] , FarmName : key } ]
            });

            for(farm in Selected_Farm_Data ){
                Houses_list = [];
                for(cycle_id in Action.payload["farmsAndHouses"]["cycles"]){
                    if(Selected_Farm_Data[farm]["FarmName"] == cycle_id){
                        Selected_Farm_Data[farm]["CycleID"] = Action.payload["farmsAndHouses"]["cycles"][cycle_id] ;
                    }
                }

                for (house_data in Action.payload["farmsAndHouses"]){
                    if(Selected_Farm_Data[farm]["FarmName"] == house_data){
                       for(house in Action.payload["farmsAndHouses"][house_data]){
                            Houses_list = [...Houses_list , { HouseID : Action.payload["farmsAndHouses"][house_data][house][1] , HouseName : Action.payload["farmsAndHouses"][house_data][house][0] } ] ;
                       }
                    }
                    Selected_Farm_Data[farm]["Houses"] = Houses_list ;
                }
            }
            return Selected_Farm_Data.length > 0 ? Selected_Farm_Data[0] : SelectedFarm ;

        case "select_menu_farm" :
            return Action.payload ;

        default :
            return SelectedFarm ;
    }
}