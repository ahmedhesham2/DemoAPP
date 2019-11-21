
let dataState = { selectedEnergyDeliveries: [] , energyDeliveries: [], energyTypes: [], loading:true };

export const EnergyDeliveryReducer = (state = dataState, action) => {
    switch (action.type) {
        case "ADD_ENERGYDELIVERIES" :{
            let energyDeliveries =  cloneObject(state.energyDeliveries) //clone the current state
            energyDeliveries.unshift(action.energyDeliveries); //add the new feedtype to the top
            state = Object.assign({}, state, { energyDeliveries: energyDeliveries, selectedEnergyDeliveries:energyDeliveries});
            return state;
        }

        case "ENERGY_DELIVERIES" :
            state = Object.assign({}, state, { energyDeliveries: action.energyDeliveries,selectedEnergyDeliveries: action.energyDeliveries, energyTypes:action.energyTypes, loading:false });
            return state;

        case "UPDATE_ENERGYDELIVERIES" :{
            let energyDeliveries =  cloneObject(state.energyDeliveries) //clone the current state
            state = Object.assign({}, state, { energyDeliveries: energyDeliveries , selectedEnergyDeliveries:energyDeliveries});
            return state;
        }
        
        case "FILTER_ENERGYDELIVERIES": {
            if(action.selectedEnergyType == 0)
               state = Object.assign({}, state, { selectedEnergyDeliveries: state.energyDeliveries });
           else{
             selectedEnergyDeliveries = []
             Object.keys(state.energyDeliveries).map(function (key) {
                if(parseInt(action.selectedEnergyType) === parseInt(state.energyDeliveries[key]["fk_energy_type"])){
                    selectedEnergyDeliveries.push(state.energyDeliveries[key]);
                }
                });
            state = Object.assign({}, state, { selectedEnergyDeliveries:selectedEnergyDeliveries});
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

