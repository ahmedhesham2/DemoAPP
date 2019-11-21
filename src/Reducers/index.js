import { combineReducers } from "redux";
import { MenuReducer } from "./MenuReducer";
import { Farms_Houses_Cycles_Reducer , SelectedFarmReducer } from "./Farms_Houses_Cycles_Reducer";
import { OverView_Data } from "./OverView_Data_Reducer.js"
import { dataReducer } from './feedTypesReducer';
import { CalendarReducer } from "./CalendarReducer";
import { Spinner } from "./Spinner_Reducer";
import { Farms_Reducer , Selected_Management_Farm , Users } from "./Farms_Management_Reducer";
import { GovernoratesReducer } from "./GovernoratesReducer";
import { FeedDeliveriesReducer } from "./FeedDeliveriesReducer";
import { EnergyDeliveryReducer } from "./EnergyDeliveryReducer";
import { MedicationDeliveryReducer } from "./MedicationDeliveryReducer";
import CullsReducer from "./CullsReducer";
import MortalityReducer from "./MortalityReducer";
import DailyDataReducer from "./DailyDataReducer";
import EnergyReducer from "./EnergyReducer";
import MedicationReducer from "./MedicationReducer";
import SalesReducer from "./SalesReducer";
import UnaccountablesReducer from "./UnaccountablesReducer";
import IntakeReducer from "./IntakeReducer";
import CommentsReducer from "./CommentsReducer";
import WizardReducer from "./WizardReducer";

const appReducer = combineReducers({

  Selected_Farm : SelectedFarmReducer ,
  Menu_Page : MenuReducer ,
  All_Farms_Houses_Cycles : Farms_Houses_Cycles_Reducer ,
  OverView_Data : OverView_Data ,
  FeedTypes_page: dataReducer ,
  Calendar : CalendarReducer ,
  Spinner : Spinner ,
  ManagementFarms : Farms_Reducer ,
  Selected_Management_Farm : Selected_Management_Farm,
  Governorates : GovernoratesReducer ,
  Users : Users ,
  WizardData : WizardReducer ,
  Culls: CullsReducer,
  Mortality: MortalityReducer,
  Energy:EnergyReducer,
  DailyData: DailyDataReducer,
  Medication: MedicationReducer,
  Sales: SalesReducer,
  Unaccountables: UnaccountablesReducer,
  Intake: IntakeReducer,
  Comments: CommentsReducer,
  FeedDeliveries : FeedDeliveriesReducer,
  EnergyDelivery : EnergyDeliveryReducer,
  MedicationDelivery: MedicationDeliveryReducer,
  
});

const All_Reducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}


export default All_Reducers ;
