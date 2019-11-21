export const OverView_Data = ( Data = { feed_per_Bird_chart : {} , total_loss_chart : {} , weight_per_day_chart : {} , fcr_chart : {} , LiveBirds : 0 , total_feed_consumption : 0 , feed_Per_Bird : 0 , FCR : 0 , FCROnSales : 0 , Loss : 0 , CummLoss : 0 } , Action ) => {
    switch(Action.type){
        case "get_overview_data" :
            return {...Data , feed_per_Bird_chart : Action.payload.feedPerBirdPerDayChart , total_loss_chart : Action.payload.totalLossPerAgeChart , weight_per_day_chart : Action.payload.weightPerDayChart , fcr_chart : Action.payload.FCRPerDayChart , LiveBirds : Action.payload.liveBird , total_feed_consumption : Action.payload.farmsInfo[0].feed , feed_Per_Bird : Number(Action.payload.farmsInfo[0].feedPerBird).toFixed(2) , FCR : Action.payload.FCR , FCROnSales : Action.payload.FCRonSales , Loss : Action.payload.farmsInfo[0].cumMortality , CummLoss : Number(Action.payload.mortalityAvg).toFixed(2)  }
        default :
            return Data ;
    }
}