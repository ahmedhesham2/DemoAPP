const counter = 100

const UnaccountablesReducer = (default_state = { tableData : [], save: false } , Action) => {

        switch (Action.type) {
        case "updateHouseData": {
          if(Action.Data["unaccountables"]["justification"] == '' && Action.Data["unaccountables"]["quantity"] == ''){
            return default_state;
           }
    
          objID = Math.floor(Math.random() * 100) + 1
          default_state.tableData = [...default_state.tableData, {id:objID, data:[ Action.Data["unaccountables"]["theTime"],Action.Data["unaccountables"]["quantity"],Action.Data["unaccountables"]["justification"],'']}]
          return { tableData:default_state.tableData,save:true};
        }
        case "updateUnaccountablesTableData":{
          return {...default_state, tableData: Action.data};
        }
        default:{
            return default_state;
        }
    }


  return{ tableData :default_state.tableData }
}

export default UnaccountablesReducer ;
