const types = [
      { id:101, name: '--------------------'},
      { id:102, name: 'Counted-accounted'},
      { id:103, name: 'Countedew-accounted'},
 ]
 const counter = 100

const CullsReducer = (default_state = { types : types , tableData : [], save: false } , Action) => {
  switch (Action.type) {
        case "updateHouseData": {
          console.log("Culllls === ",Action.Data["culls"])
        	if(Action.Data["culls"]["quantity"] == '' && Action.Data["culls"]["culls_weight"] == ''){
        		return default_state;
        	}
    
        	objID = Math.floor(Math.random() * 100) + 1
        	default_state.tableData = [...default_state.tableData, {id:objID, data:[ Action.Data["culls"]["theTime"],Action.Data["culls"]["quantity"],Action.Data["culls"]["culls_weight"],'',Action.Data["culls"]["culls_type"]]}]
            return {types:types , tableData:default_state.tableData,save:true};
        }
        case "updateCullsTableData":{
          return {...default_state, tableData: Action.data};
        }
        default:{
            return default_state;
        }
    }

  return{ types : types , tableData :default_state.tableData }
}

export default CullsReducer ;
