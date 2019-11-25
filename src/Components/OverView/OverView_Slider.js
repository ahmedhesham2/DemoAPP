import React from 'react';
import { View } from 'react-native';
import OverViewCharts from "./OverView_Charts";
import Swiper from 'react-native-swiper';
import CardsNumbers from "./CardsNumbers";
import { Row, Grid } from "react-native-easy-grid";
import styles from '../Dark.style';


class OverViewSlider extends React.PureComponent {
    render(){
        return (
            <Grid>
            <Row>
            <Swiper style={styles.wrapper}  dotColor='white' activeDotColor='#0d4d9a' dotStyle={{top: -20}} activeDotStyle={{top: -20}} showsButtons={false} pagingEnabled={true} scrollEnabled={true} loop={false} animated index={0}>
              <View style={styles.viewSlide}>
                <CardsNumbers CardData = {this.props.Fcr_Card} CardTitles={["FCR","FCR On Sales"]} />
                <View style={{ borderRadius: 50, marginLeft: 15,}} ><OverViewCharts title="Fcr Chart" Chart_Data={this.props.FCR_Chart} /></View>
              </View>
              <View style={styles.viewSlide}>
                <CardsNumbers CardData = {this.props.Weight_Card} CardTitles={["Total Weight","Avg Weight"]} />
                <View style={{ borderRadius: 40, marginLeft: 15,}} ><OverViewCharts title="Weight Chart" Chart_Data={this.props.Weight_Chart} /></View>
              </View>
              <View style={styles.viewSlide}>
                <CardsNumbers CardData = {this.props.Loss_Card} CardTitles={["Total Loss","Cumm. Loss Avg"]} />
                <OverViewCharts title="Loss Chart" Chart_Data={this.props.Loss_Chart} />
              </View>
              <View style={styles.viewSlide}>
                <CardsNumbers CardData = {this.props.Feed_Card} CardTitles={["Total Feed","Feed Per Bird"]}/>
                <OverViewCharts title="Feed Chart" Chart_Data={this.props.Feed_Chart} />
              </View>
            </Swiper>
            </Row>
            </Grid>

        );
    }
}


export default OverViewSlider ;