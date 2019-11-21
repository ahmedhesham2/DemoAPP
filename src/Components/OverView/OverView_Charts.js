import React from 'react';
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    FlatList ,
    SafeAreaView
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import styles from '../Dark.style';

class OverViewCharts extends React.PureComponent {

    render() {
        var labels = [];
        var chart_data_list = [0,0,0,0,0,0,0];
        var stand_data_list = [0,0,0,0,0,0,0];
        var second_stand_data_list = [0,0,0,0,0,0,0];

        if(this.props.Chart_Data.length != undefined){
            arr = JSON.parse(this.props.Chart_Data[0])
            data_arr = JSON.parse(arr["yAxis"][0]["data"]).slice(0, -1);
            labels_list = arr["xAxis"].slice(Math.max(arr["xAxis"].length - 7, 1))
            chart_data_list = data_arr.slice(Math.max(data_arr.length - 7, 1))
            if(arr["yAxis"].length >= 2){
            stand_data_list = JSON.parse(arr["yAxis"][1]["data"]).slice(Math.max(JSON.parse(arr["yAxis"][1]["data"]).length - 7, 1))
            }
            if(arr["yAxis"].length >= 3){
            second_stand_data_list = JSON.parse(arr["yAxis"][2]["data"]).slice(Math.max(JSON.parse(arr["yAxis"][2]["data"]).length - 7, 1))
            }

            for (label in labels_list){
                labels = [...labels , "Day"+labels_list[label]]
            }

        }

        return (
            <View style={{top: -42, borderRadius: 40}}>
               <Text style={styles.chartTitle}> { this.props.title } </Text>
              <LineChart
                showGrid={ false }
                data = {{
                    labels: labels,
                    datasets: [{
                    data: chart_data_list ,
                    color: (opacity = 1) => '#2c64c9',
                    strokeWidth: 2 , // optional
                    stroke: "#2c64c9",
                    },
                    {
                    data : stand_data_list,
                    color: (opacity = 1) => '#3bb73e',
                    strokeWidth: 2 , // optional
                    stroke: "#3bb73e",
                    },

                    {
                    data: second_stand_data_list ,
                    color: (opacity = 1) => '#69737b',
                    strokeWidth: 2 , // optional
                    stroke: "#69737b",
                    }]
                    }}

                    width={Dimensions.get("window").width -10} // from react-native
                    height={250}
                    // yAxisLabel={""}
                    yAxisLabel={""}
                    yAxisSuffix={"k"}
                    chartConfig={{
                      // backgroundColor: "#ede9e6",
                      backgroundGradientFrom: "#e6e9ed",// "#0d4d9a", //"#e6e9ed",//"#293d52",
                      backgroundGradientTo: "#e6e9ed",// //"#e6e9ed", // "#293d52",
                     
                      decimalPlaces: 2, // optional, defaults to 2dp
//                      horizontalLabelRotation : 90,
//                      verticalLabelRotation : 90 ,
                      color: (opacity = 1) => "#0d4d9a",
                      labelColor: (opacity = 1) => "#0d4d9a",
                      style: {
                        borderRadius: 16
                      },
                      propsForDots: {
                        r: "6",
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                    //   borderRadius: 16
                    }}
              />
            </View>
        );
    }
}

export default OverViewCharts;

