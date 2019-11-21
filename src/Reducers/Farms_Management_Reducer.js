export const Farms_Reducer = (All_Farms = [
      {
         id:"1",
         name:"Farm1",
         Num_of_Houses:"1",
         location :"1",
         Houses : [{id : "1" , name : "House1" , placement : {id : "1" , Date : "09/12/2019"} }],
         closed_cycles : [{id:"1" , cycle : "cycle1"}]
      },
      {
         id:"2",
         name:"Farm2",
         Num_of_Houses:"2",
         location :"2",
         Houses : [{id : "2" , name : "House1" , placement : {id : "2" , Date : "10/12/2019"} },{id : "3" , name : "House2" , placement : {id : "3" , Date : "11/12/2019"} }],
         closed_cycles : [{id:"2" , cycle : "cycle2"} , {id:"3" , cycle : "cycle3"}]
      },
      {
         id:"3",
         name:"Farm3",
         Num_of_Houses:"3",
         location :"3",
         Houses : [{id : "4" , name : "House1" , placement : {id : "4" , Date : "12/12/2019"} },{id : "5" , name : "House2" , placement : {id : "5" , Date : "13/12/2019"} },{id : "6" , name : "House3" , placement : {id : "6" , Date : "14/12/2019"} }],
         closed_cycles : [{id:"4" , cycle : "cycle4"} , {id:"5" , cycle : "cycle5"} , {id:"6" , cycle : "cycle6"}]
      }
   ] , Action ) => {

        switch(Action.type){

            case "Create_Farm" :
                var IDs_list = []
                All_Farms.map((val)=> IDs_list.push(Number(val.id)))
                Farm_ID = Math.max(...IDs_list) + 1 ;
                return [...All_Farms , { id : String(Farm_ID)  , name : Action.payload.FarmName , location : Action.payload.Governorate , Num_of_Houses : Action.payload.HousesNumber }]

            case "Update_Farm" :
                const NewFarms = All_Farms.map(FarmObj =>
                  FarmObj.id === Action.payload.id
                    ? { ...FarmObj, name : Action.payload.FarmName , location : Action.payload.Governorate , Num_of_Houses : Action.payload.HousesNumber  }
                    : FarmObj
                );
                return NewFarms;

            case "Third_Form_submitted":
                var IDs_list = []
                All_Farms.map((val)=> IDs_list.push(Number(val.id)))
                Farm_ID = Math.max(...IDs_list) + 1 ;
                return [...All_Farms , { id : String(Farm_ID)  , name : Action.payload.FarmName , location : Action.payload.Governorate , Num_of_Houses : Action.payload.HousesNumber }]



            case "Delete_Farm" :
                return All_Farms.filter((Farm)=> Farm.id !== Action.payload)

            default :
                return All_Farms ;
        }
   }


   export const Selected_Management_Farm = (selected_farm = null , Action ) => {

      switch(Action.type){
        case "change_Management_selected_Farm" :
            return Action.payload;
        default :
            return selected_farm;
      }
   }


   export const Users = (users_list = [{id : "1" , name : "admin"} , {id : "2" , name : "manager"},{id : "3" , name : "superuser"}] , Action ) => {
            return users_list;
   }