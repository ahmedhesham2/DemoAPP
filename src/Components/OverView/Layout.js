import React , { useState , useEffect } from 'react';
import { StyleSheet, Text, View , TextInput , ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import OverviewHeader from "./OverView_Header";
import OverViewSlider from "./OverView_Slider";
import LoadingOverLay from "../common/Loading_Overlay";
import TopCards from './TopCards';
import CardsNumbers from './CardsNumbers';
import Calendar from "../common/Calendar";
import { get_overview_data , set_spinner } from "../../Actions";
import { connect } from "react-redux";
import styles from '../Dark.style';

const Layout = React.memo(props => {

  useEffect(
    () => {
      props.set_spinner(true);
      (async () => {
//        await props.set_spinner(true);
        await props.get_overview_data(props.Selected_Farm , props.selected_Date);
        await props.set_spinner(false);
      }) ()
    },
    [props.Selected_Farm,props.selected_Date]
  );

  return (
      <>
      <View style={styles.layoutContainer}>
        <OverviewHeader FarmName={props.Selected_Farm.FarmName}/>
        <ScrollView>
        <TopCards LiveBirds={props.OverView_Data.LiveBirds}/>

        <OverViewSlider
            Feed_Card={[ props.OverView_Data.total_feed_consumption , props.OverView_Data.feed_Per_Bird ]}
            Loss_Card={[ props.OverView_Data.Loss , props.OverView_Data.CummLoss ]}
            Weight_Card={[ props.OverView_Data.total_feed_consumption , props.OverView_Data.feed_Per_Bird ]}
            Fcr_Card={[ props.OverView_Data.FCR , props.OverView_Data.FCROnSales ]}
            Feed_Chart={props.OverView_Data.feed_per_Bird_chart} Weight_Chart={props.OverView_Data.weight_per_day_chart}
            FCR_Chart={props.OverView_Data.fcr_chart} Loss_Chart={props.OverView_Data.total_loss_chart}
            Weight_Chart={props.OverView_Data.weight_per_day_chart}
            Loss_Chart={props.OverView_Data.total_loss_chart}
        />

        <Calendar selected_date = {props.selected_Date}/>
        </ScrollView>
      </View>
      <LoadingOverLay></LoadingOverLay>
      </>
    );
});

const mapStateToProps = state => {
    return { Selected_Farm : state.Selected_Farm , selected_Date : state.Calendar.selected_date , OverView_Data : state.OverView_Data }  ;
}

export default connect(mapStateToProps,{get_overview_data , set_spinner})(Layout);
