const types = [
      { id:101, name: '--------------------'},
      { id:102, name: 'Sales 1'},
      { id:103, name: 'Sales 2'},
 ]
 const slaughterHouses = [
      { id:90, name: '--------------------'},
      { id:91, name: 'SH 1'},
      { id:92, name: 'SH 2'},
 ]

 const counter = 100

const SalesReducer = (default_state = { types : types, slaughterHouses: slaughterHouses , tableData : [], save: false } , Action) => {

        switch (Action.type) {
        case "updateHouseData": {
          if(Action.Data["sales"]["totalweight"] == '' && Action.Data["sales"]["quantity"] == ''){
            return default_state;
           }
    
          objID = Math.floor(Math.random() * 100) + 1
          default_state.tableData = [...default_state.tableData, {id:objID, data:[ Action.Data["sales"]["theTime"],Action.Data["sales"]["quantity"],Action.Data["sales"]["totalweight"],'',Action.Data["sales"]["price"],Action.Data["sales"]["salestype"],Action.Data["sales"]["internalsh"],Action.Data["sales"]["externalsh"]]}]
          return {types:types ,slaughterHouses: slaughterHouses, tableData:default_state.tableData,save:true};
        }
        case "updateSalesTableData":{
          return {...default_state, tableData: Action.data};
        }
        default:{
            return default_state;
        }
    }


  return{ types : types , slaughterHouses: slaughterHouses , tableData :default_state.tableData }
}

export default SalesReducer ;
