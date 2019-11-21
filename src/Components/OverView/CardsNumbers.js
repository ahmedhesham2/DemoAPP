import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import IconComponent from "../Icons/Icon";
import { Col, Row, Grid } from "react-native-easy-grid";
import { withTheme, Divider } from 'react-native-elements';
import styles from '../Dark.style';

class CardsNumbers extends React.PureComponent {
    render(){
        return(
          <Grid style={styles.mainCardsGrid}>
            <Row style={{ left:20, top:0}}>
              <Col style={{width: 100}}>
                    <Row><Text style={styles.cardNum}>%{(Math.random() * 0.5).toFixed(2)}</Text></Row>
                    {/* <Row><Text style={styles.cardText}>{(Math.random() * 0.5).toFixed(2)}</Text></Row> */}
              </Col>
              <Col>
                    <Row><Text style={styles.rightCardNum}>{this.props.CardTitles[0]}</Text></Row>
                    <Row><Text style={styles.rightCardText}>{this.props.CardData[0]}</Text></Row>
                    <Row><Divider style={styles.cardDivider} /></Row>
              </Col>
            </Row>
            <Row style={{ left:20, top:-25}}>
              <Col style={{width: 100}}>
                    <Row><Text style={styles.cardNum}>%{(Math.random() * 0.5).toFixed(2)}</Text></Row>
                    {/* <Row><Text style={styles.cardText}>{(Math.random() * 0.5).toFixed(2)}</Text></Row> */}
              </Col>
              <Col>
                    <Row><Text style={styles.rightCardNum}>{this.props.CardTitles[1]}</Text></Row>
                    <Row><Text style={styles.rightCardText}>{this.props.CardData[1]}</Text></Row>
                    <Row><Divider style={styles.cardDivider} /></Row>
              </Col>
            </Row>
            

          </Grid>
        );
    }
}


export default CardsNumbers;