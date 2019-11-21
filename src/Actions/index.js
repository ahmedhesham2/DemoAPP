import load_data from "../API/load_data";
import Governorate from "../API/Governorate";
import Data from '../Components/Administration/feedtypes.json';
import feedDeliveriesData from '../Components/Deliveries/feedDeliveries.json';
import energyDeliveriesData from '../Components/Deliveries/energyDelivery.json';
import energyTypes from '../Components/Deliveries/energyTypes.json';
import medicationNames from '../Components/Deliveries/medicationNames.json';
import medDeliveriesData from '../Components/Deliveries/medicationDeliveries.json';

import farmOverView from '../staticData/farmOverView.json';

import loadDataView from '../staticData/load_data.json';
export const toggle_Menu = MenuPage => {
    return { type : "toggle_Menu" , payload : MenuPage } ;
}

export const toggle_calendar = visiable => {
    return { type : "toggle_calendar" , payload : visiable } ;
}

export const select_menu_farm = MenuFarm => {
    return { type : "select_menu_farm" , payload : MenuFarm } ;
}

export const change_selected_date = Date => {
    return { type : "change_selected_date" , payload : Date };
}

export const get_load_data = () => async dispatch => {
    const response = await load_data.get("/api/v0.1/LoadDataView/");
    // console.log(response["data"]);
    
    // console.log(loadDataView);

    // dispatch({ type : "get_load_data" , payload : loadDataView});
    dispatch({ type : "get_load_data" , payload : response["data"]});
}

export const set_spinner = state => {
    return { type : "set_spinner" , payload : state };
}


export const getFeedTypes = () => {
    return {type: "FEEDTYPES_AVAILABLE", feedtypes:Data.feedtypes};
}

export const addFeedType = (feedtype) => {
    return{type: "ADD_FEEDTYPE", feedtype:feedtype};
}

export const deleteFeedType = (id) => {
    return{type: "DELETE_FEEDTYPE", id:id};
}

export const Delete_Management_Farm = (FarmID) => {
    return { type : "Delete_Farm" , payload : FarmID } ;
}

export const Create_Management_Farm = Farm_Management_Values => {
    return { type : "Create_Farm" , payload : Farm_Management_Values  } ;
}

export const Update_Management_Farm = Farm_Management_Updated_Values => {
    return { type : "Update_Farm" , payload : Farm_Management_Updated_Values  } ;
};

export const change_Management_selected_Farm = selected_Management_Farm => {
    return { type : "change_Management_selected_Farm" , payload : selected_Management_Farm  } ;
}  
export const getFeedDeliveries = () => {
    return {type: "FEED_DELIVERIES", feedDeliveries: feedDeliveriesData.feedDeliveries, feedTypes: Data.feedtypes};
}

export const filterDeliveries = (Index) => {
    return {type: "FILTER_DELIVERIES", selectedFeedType: Index};
}

export const addFeedDelivery = (feedDeliveries) => {
    return{type: "ADD_FEEDDELIVERIES", feedDeliveries:feedDeliveries};
}

export const updateFeedDelivery = (feedDeliveries) => {
    return{type: "UPDATE_FEEDDELIVERIES", feedDeliveries:feedDeliveries};
}

export const getEnergyTypes = () => {
    return {type: "ENERGYTYPES_AVAILABLE", energytypes: energyTypes.energytypes};
}

export const getEnergyDeliveries = () => {
    return {type: "ENERGY_DELIVERIES", energyDeliveries: energyDeliveriesData.energyDeliveries, energyTypes: energyTypes.energytypes};
}

export const filterEnergyDeliveries = (Index) => {
    return {type: "FILTER_ENERGYDELIVERIES", selectedEnergyType: Index};
}

export const addEnergyDelivery = (energyDeliveries) => {
    return{type: "ADD_ENERGYDELIVERIES", energyDeliveries:energyDeliveries};
}

export const updateEnergyDelivery = (energyDeliveries) => {
    return{type: "UPDATE_ENERGYDELIVERIES", energyDeliveries:energyDeliveries};
}

export const getMedicationDeliveries = () => {
    return {type: "MEDICATION_DELIVERIES", medicationDeliveries: medDeliveriesData.medicationDeliveries, medicationNames: medicationNames.medicationtypes};
}

export const filterMedicationDeliveries = (Index) => {
    return {type: "FILTER_MEDDELIVERIES", selectedMedicationName: Index};
}

export const First_Form_submitted = FarmValues => {
    return { type : "First_Form_submitted" , payload : FarmValues } ;
}

export const Second_Form_submitted = HouseValues => {
    return { type : "Second_Form_submitted" , payload : HouseValues } ;
}

export const Third_Form_submitted = PlacementValues => {
    return { type : "Third_Form_submitted" , payload : PlacementValues } ;
}

export const reset_wizard_Form = InitValues => {
    return { type : "reset_wizard_Form" , payload : InitValues  } ;
}

export const get_overview_data = (selected_Farm , selected_Date) => async dispatch => {
    var today = selected_Date ;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    const response = await load_data.get(`/api/v0.1/FarmOverView/?id=${selected_Farm.FarmID}&dateFilter=${today}&cycleFilter=all&breedFilter=all&flockFilter=all`);
    // dispatch({ type : "get_overview_data" , payload : farmOverView  })
    dispatch({ type : "get_overview_data" , payload : response["data"] })
}

export const Fetch_Governorate = Country_code =>  {
    
      
      return { type: 'FETCH_Governorate', payload: [{"region":"As Suways","country":"eg"},{"region":"Beheira Governorate","country":"eg"},{"region":"Cairo Governorate","country":"eg"},{"region":"Damietta Governorate","country":"eg"},{"region":"Ismailia Governorate","country":"eg"},{"region":"Kafr ash Shaykh","country":"eg"},{"region":"Muhafazat ad Daqahliyah","country":"eg"},{"region":"Muhafazat al Fayyum","country":"eg"},{"region":"Muhafazat al Gharbiyah","country":"eg"},{"region":"Muhafazat al Iskandariyah","country":"eg"},{"region":"Muhafazat al Jizah","country":"eg"},{"region":"Muhafazat al Minufiyah","country":"eg"},{"region":"Muhafazat al Minya","country":"eg"},{"region":"Muhafazat al Qalyubiyah","country":"eg"},{"region":"Muhafazat al Uqsur","country":"eg"},{"region":"Muhafazat al Wadi al Jadid","country":"eg"},{"region":"Muhafazat ash Sharqiyah","country":"eg"},{"region":"Muhafazat Aswan","country":"eg"},{"region":"Muhafazat Asyut","country":"eg"},{"region":"Muhafazat Bani Suwayf","country":"eg"},{"region":"Muhafazat Bur Sa\u0027id","country":"eg"},{"region":"Muhafazat Matruh","country":"eg"},{"region":"Muhafazat Qina","country":"eg"},{"region":"Muhafazat Shamal Sina\u0027","country":"eg"},{"region":"Muhafazat Suhaj","country":"eg"},{"region":"Red Sea Governorate","country":"eg"},{"region":"South Sinai Governorate","country":"eg"}]}
    
}

export const updateFeedType = (feedtype) => {
    return (dispatch) => {
        feedtypes = JSON.parse(JSON.stringify(feedtype));
     
        if (feedtypes !== null){
            var index = getIndex(feedtype, feedtype.id);
            if (index !== -1) {
                feedtypes[index]['feedtype'] = feedtype.name;
            }
                dispatch({type: "UPDATE_FEEDTYPE", feedtype:feedtype});
        }
    };
}

function getIndex(data, id){
    var clone = Object.values(data);
    clone = clone.filter((val)=> val != undefined)
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}