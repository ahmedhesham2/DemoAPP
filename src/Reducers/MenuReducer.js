export const MenuReducer = (default_Menu_Page = "Main_Menu" , Action ) => {
    switch(Action.type){
        case "toggle_Menu" :
            return Action.payload ;
        default :
            return default_Menu_Page ;
    }
}