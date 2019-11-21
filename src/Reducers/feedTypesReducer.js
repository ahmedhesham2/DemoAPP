
let dataState = { feedtypes: [], loading:true };

export const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case "ADD_FEEDTYPE" :{
            let feedtypes =  cloneObject(state.feedtypes) //clone the current state
            feedtypes.unshift(action.feedtype); //add the new feedtype to the top
            state = Object.assign({}, state, { feedtypes: feedtypes});
            return state;
        }

        case "FEEDTYPES_AVAILABLE" :
            state = Object.assign({}, state, { feedtypes: action.feedtypes, loading:false });
            return state;

        case "UPDATE_FEEDTYPE" :{
            let feedtype = action.feedtype;
            let feedtypes =  cloneObject(state.feedtypes) //clone the current state
            let index = getIndex(feedtypes, feedtype.id); //find the index of the feedtype with the feedtype id passed
            if (index !== -1) {

                feedtypes[index]['text'] = feedtype.text;
            }
            state = Object.assign({}, state, { feedtypes: feedtypes});
            return state;
        }

        case "DELETE_FEEDTYPE" :{
            let feedtypes =  cloneObject(state.feedtypes) //clone the current state
            let index = getIndex(feedtypes, action.id); //find the index of the feedtype with the id passed
            if(index !== -1) feedtypes.splice(index, 1);//if yes, undo, remove the feedtype
            state = Object.assign({}, state, { feedtypes: feedtypes});
            return state;
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
