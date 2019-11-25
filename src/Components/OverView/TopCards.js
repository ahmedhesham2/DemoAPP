import React from 'react';
import { Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Divider } from 'react-native-elements';
import styles from '../Dark.style';

const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();
Day_name = Days[today.getDay()];
month_name = monthNames[today.getMonth()];
const dd = String(today.getDate()).padStart(2, '0');
const yyyy = today.getFullYear();

class TopCards extends React.PureComponent {
    render(){
        return(<>
          <Grid style={styles.mainGrid}>
            <Row>
              <Col style={{width: 220}}>
                    <Row><Text style={styles.rightDayText}>{Day_name}</Text></Row>
                    <Row><Text style={styles.rightDateText}>{month_name} {dd}, {yyyy}</Text></Row>
              </Col>
              <Col>
                    <Row><Text style={styles.rightTextNum}>{this.props.LiveBirds}</Text></Row>
                    <Row><Text style={styles.rightTextLabel}>Live Birds</Text></Row>
              </Col>
            </Row>
            
          </Grid><Divider/></>
        );
    }
}


export default TopCards;