
const counter = 100

const CommentsReducer = (default_state = { tableData : [], save: false } , Action) => {

  switch (Action.type) {
        case "updateHouseData": {
        	if(Action.Data["comments"]["comment"] == ''){
        		return default_state;
        	}
    
        	objID = Math.floor(Math.random() * 100) + 1
        	default_state.tableData = [...default_state.tableData, {id:objID, data:[ Action.Data["comments"]["theDate"],Action.Data["comments"]["comment"],'User','']}]
            return {tableData:default_state.tableData,save:true};
        }
        case "updateCommentsTableData":{
          return {...default_state, tableData: Action.data};
        }
        case "addComment":{

            objID = Math.floor(Math.random() * 100) + 1
            today = new Date()
            currentData = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            default_state.tableData = [...default_state.tableData, {id:objID, data: [ currentData , Action.data["comment"] ,'User', '']}]
            return {tableData:default_state.tableData,save:true};

        }
        default:{
            return default_state;
        }
    }

  return{ tableData :default_state.tableData }
}

export default CommentsReducer ;
