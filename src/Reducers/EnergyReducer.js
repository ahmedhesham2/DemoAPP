const types = [
      { id:101, name: '--------------------'},
      { id:102, name: 'Gas'},
      { id:103, name: 'Coal'},
 ]
 const batches = [
      { id:90, name: '--------------------'},
      { id:91, name: 'Batch 1'},
      { id:92, name: 'Batch 2'},
 ]

 const counter = 100

const EnergyReducer = (default_state = { types : types, batches: batches , tableData : [], save: false } , Action) => {

        switch (Action.type) {
        case "updateHouseData": {
          if(Action.Data["energy"]["energyTypeID"] == '' && Action.Data["energy"]["energyDeliveryID"] == ''){
            return default_state;
           }
    
          objID = Math.floor(Math.random() * 100) + 1
          default_state.tableData = [...default_state.tableData, {id:objID, data:[ Action.Data["energy"]["theTime"],Action.Data["energy"]["energyTypeID"],Action.Data["energy"]["quantity"],'',Action.Data["energy"]["energyDeliveryID"]]}]
          return {types:types ,batches: batches, tableData:default_state.tableData,save:true};
        }
         case "updateEnergyTableData":{
          return {...default_state, tableData: Action.data};
        }
        default:{
            return default_state;
        }
    }


  return{ types : types , batches: batches, tableData :default_state.tableData }
}

export default EnergyReducer ;
