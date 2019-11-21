const WizardReducer = (default_state = { FarmName : "" , Governorate : "1" , HouseName : "" , HouseArea : "" , HousesNumber : "" , PlacementQuantity : "" , DoA : "" , breed : "1" } , Action) => {
  switch(Action.type){
      case "First_Form_submitted" :
        return {...default_state , FarmName : Action.payload.FarmName , Governorate : Action.payload.Governorate } ;
      case "Second_Form_submitted":
        return {...default_state , HouseName : Action.payload.HouseName , HouseArea : Action.payload.HouseArea , HousesNumber : Action.payload.HousesNumber } ;
      case "Third_Form_submitted" :
        return {...default_state , PlacementQuantity : Action.payload.PlacementQuantity , DoA : Action.payload.DoA , breed : Action.payload.breed } ;
      case "reset_wizard_Form" :
        return {...default_state , FarmName : Action.payload.FarmName , Governorate : Action.payload.Governorate , HouseName : Action.payload.HouseName , HouseArea : Action.payload.HouseArea , HousesNumber : Action.payload.HousesNumber , PlacementQuantity : Action.payload.PlacementQuantity , DoA : Action.payload.DoA , breed : Action.payload.breed } ;
      default :
        return default_state ;
  }
}

export default WizardReducer ;
