
let dataState = { selectedFeedDeliveries: [] , feedDeliveries: [], feedTypes: [], loading:true };

export const FeedDeliveriesReducer = (state = dataState, action) => {
    switch (action.type) {
        case "ADD_FEEDDELIVERIES" :{
            let feedDeliveries =  cloneObject(state.feedDeliveries) //clone the current state
            feedDeliveries.unshift(action.feedDeliveries); //add the new feedtype to the top
            state = Object.assign({}, state, { feedDeliveries: feedDeliveries, selectedFeedDeliveries:feedDeliveries});
            return state;
        }

        case "FEED_DELIVERIES" :
            state = Object.assign({}, state, { feedDeliveries: action.feedDeliveries,selectedFeedDeliveries: action.feedDeliveries, feedTypes:action.feedTypes, loading:false });
            return state;

        case "UPDATE_FEEDDELIVERIES" :{
            let feedDeliveries =  cloneObject(state.feedDeliveries) //clone the current state
            state = Object.assign({}, state, { feedDeliveries: feedDeliveries , selectedFeedDeliveries:feedDeliveries});
            return state;
        }
        
        case "FILTER_DELIVERIES": {
            if(action.selectedFeedType == 0)
               state = Object.assign({}, state, { selectedFeedDeliveries: state.feedDeliveries });
           else{
             selectedFeedDeliveries = []
             Object.keys(state.feedDeliveries).map(function (key) {
                if(parseInt(action.selectedFeedType) === parseInt(state.feedDeliveries[key]["fk_feedtype"])){
                    selectedFeedDeliveries.push(state.feedDeliveries[key]);
                }
                });
            state = Object.assign({}, state, { selectedFeedDeliveries:selectedFeedDeliveries});
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

function getIndex(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}
