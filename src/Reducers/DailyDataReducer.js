
const DailyDataReducer = ( default_state = { temperature: {tempMin: '', tempMax: '', outsideTempMin: '', outsideTempMax: ''},culls: {quantity:'', culls_weight:'', culls_type:'',theTime:'',theDate:''} ,mortality:{theTime:'',theDate:'',quantity:'', mortality_weight:'',catching:"1"}, humidity:{humidityMin: '', humidityMax: ''}, energy: {energyTypeID: '', energyDeliveryID: '', quantity: '',theTime:'',theDate:''},medication: {theTime:'', theDate:'', application_route: '',medication_consumption:'',medicationNameID:'',number_of_birds:'',medicationDeliveryID:''}, sales: {theTime: '', theDate:'', internalsh:'', externalsh:'', salestype:'',totalweight:'',quantity:'',price:''},unaccountables: {theTime: '', theDate:'', justification:'', quantity:''},intake: {feedIntake:'', feedType:'', feedBatch:'', waterIntake:'', waterPH:'', waterORP:'', feedIntake2:'', feedType2:'',feedBatch2:''} , comments: {theDate:'',theTime:'',comment:'',addedBy:'',timestamp:'',synced:'',replies:{},id:'',photoUrl:'',timestamp:''},carbondioxide: {minCO2: '', maxCO2: '',avgCO2:''}, weight:'',save: false}, action) => {
    //console.log("Action Typeeeeee === ",action.type, default_state)
    // console.log("Actionnnnnnnnnnn == ",action.type," *** ",default_state)
    switch (action.type) {
        case "updateHouseData": {
            // console.log("Hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            return {  energy: {energyTypeID: '', energyDeliveryID: '', quantity: '',theTime:'',theDate:''} , culls: {quantity:'', culls_weight:'', culls_type:'',theTime:'',theDate:''} ,mortality:{theTime:'',theDate:'',quantity:'', mortality_weight:'',catching:"1"}, medication: {theTime:'', theDate:'', application_route: '',medication_consumption:'',medicationNameID:'',number_of_birds:'',medicationDeliveryID:''}, sales: {theTime: '', theDate:'', internalsh:'', externalsh:'', salestype:'',totalweight:'',quantity:'',price:''}, unaccountables: {theTime: '', theDate:'', justification:'', quantity:''},intake: action.Data.intake , humidity: action.Data.humidity, temperature: action.Data.temperature,weight: action.Data.weight,comments: {theDate:'',theTime:'',comment:'',addedBy:'',timestamp:'',synced:'',replies:{},id:'',photoUrl:'',timestamp:''}, carbondioxide: {minCO2: '', maxCO2: '',avgCO2:''} ,save:true};
        }
        case 'LOAD_DATA':{
            //console.log('Default state == ',default_state)
            return default_state
        }
        default:{
            return {...default_state,save: false};
        }
    }
    return {...default_state,save:false};
}

export default DailyDataReducer ;