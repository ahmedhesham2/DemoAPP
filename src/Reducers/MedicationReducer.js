const types = [
      { id:101, name: '--------------------'},
      { id:102, name: 'Med 1'},
      { id:103, name: 'Med 2'},
 ]
 const batches = [
      { id:90, name: '--------------------'},
      { id:91, name: 'Batch 1'},
      { id:92, name: 'Batch 2'},
 ]

 const appRouteTypes = [
      { id:80, name: '--------------------'},
      { id:81, name: 'App Route 1'},
      { id:82, name: 'App Route 2'},
 ]

 const counter = 100

const MedicationReducer = (default_state = { types : types, batches: batches ,appRouteTypes:appRouteTypes, tableData : [], save: false } , Action) => {

        switch (Action.type) {
        case "updateHouseData": {
          if(Action.Data["medication"]["medicationNameID"] == '' && Action.Data["medication"]["medicationDeliveryID"] == ''){
            return default_state;
           }
    
          objID = Math.floor(Math.random() * 100) + 1
          default_state.tableData = [...default_state.tableData, {id:objID, data:[ Action.Data["medication"]["theTime"],Action.Data["medication"]["medicationNameID"],Action.Data["medication"]["medication_consumption"],'',Action.Data["medication"]["medicationDeliveryID"],Action.Data["medication"]["number_of_birds"],Action.Data["medication"]["application_route"]]}]
          return {types:types ,batches: batches, appRouteTypes:appRouteTypes, tableData:default_state.tableData,save:true};
        }
         case "updateMedTableData":{
          return {...default_state, tableData: Action.data};
        }
        default:{
            return default_state;
        }
    }


  return{ types : types , batches: batches, appRouteTypes: appRouteTypes, tableData :default_state.tableData }
}

export default MedicationReducer ;
