const MortalityReducer = (default_state = { tableData : [] ,save: false} , Action) => {
 
  switch (Action.type) {
        case "updateHouseData": {
            console.log("M/ortality === ",Action.Data["mortality"])
        	if(Action.Data["mortality"]["quantity"] == '' && Action.Data["mortality"]["mortality_weight"] == ''){
        		return default_state;
        	}
     
        	objID = Math.floor(Math.random() * 100) + 1
        	default_state.tableData = [...default_state.tableData, {id:objID, data:[ Action.Data["mortality"]["theTime"],Action.Data["mortality"]["quantity"],Action.Data["mortality"]["mortality_weight"],'']}]
            return {tableData:default_state.tableData, save:true};
        }
         case "updateMortalityTableData":{
          return {...default_state, tableData: Action.data};
        }
        default:{
            return default_state;
        }
    }
  return default_state

}

export default MortalityReducer ;
