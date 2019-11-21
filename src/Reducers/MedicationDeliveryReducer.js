
let dataState = { selectedMedicationDeliveries: [] , medicationDeliveries: [], medicationNames: [], loading:true };

export const MedicationDeliveryReducer = (state = dataState, action) => {
    switch (action.type) {
       
        case "MEDICATION_DELIVERIES" :
            state = Object.assign({}, state, { medicationDeliveries: action.medicationDeliveries,selectedMedicationDeliveries: action.medicationDeliveries, medicationNames:action.medicationNames, loading:false });
            return state;
        
        case "FILTER_MEDDELIVERIES": {
            if(action.selectedMedicationName == 0)
               state = Object.assign({}, state, { selectedMedicationDeliveries: state.medicationDeliveries });
           else{
             selectedMedDeliveries = []
             Object.keys(state.medicationDeliveries).map(function (key) {
                if(parseInt(action.selectedMedicationName) === parseInt(state.medicationDeliveries[key]["fk_medication_info"])){
                    selectedMedDeliveries.push(state.medicationDeliveries[key]);
                }
                });
            state = Object.assign({}, state, { selectedMedicationDeliveries: selectedMedDeliveries});
            return state
           }
        }
        default:
            return state;
    }
};


function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

