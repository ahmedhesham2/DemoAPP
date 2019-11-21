
//Two main colors:
// dark blue: #293d52
// light green: #26b99a
// Light Gray: #e6e9ed

import {  Dimensions ,Platform } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { withTheme } from 'react-native-elements';

var NAVBAR_HEIGHT = (Platform.OS === 'ios') ? 64 : 54;
var {width: windowWidth, height: windowHeight} = Dimensions.get('window');
var HEIGHT = windowHeight - NAVBAR_HEIGHT;

export default{
  ///////Daily Data CSS///
  
	scrollStyle: {
		marginVertical: 100,
	},
  dailyDataHeader:{
    color: 'white',
    letterSpacing: 1,
    fontSize: 20,
  },
  //////////End Daily Data CSS //
  
  //////////////////////////////////////////////
    //// OverViewHeader.js component Style ///////
    //////////////////////////////////////////////
    
    containerHeader:{ 
      // top: -4,
      // height: windowHeight/5,
      backgroundColor: '#0d4d9a',
        // backgroundColor: '#293d52', ///*'#e6e9ed',*/ '#2c3e50',
        // borderBottomColor: '#e6e9ed', // /*'#e6e9ed', */ "#2c3e50",
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header_center_text: {
        fontSize: 17,
        color : "white", //'#293d52', //"white",
        opacity: 1,
      },

    ////////////End OverViewHeader Style /////////

    //////////////////////////////////////////////
    //// OverView_Slider.js component Style ///////
    //////////////////////////////////////////////
    viewSlide:{
        height:  ((Dimensions.get("window").height)-150) ,// from react-native
    },
    wrapper: {
      // flex: 1,
      height :  (Dimensions.get("window").height)-150 ,// from react-native
      borderRadius: 10,
      // marginBottom: -10,
      backgroundColor: '#e6e9ed', //'#0d4d9a', //'#e6e9ed',
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    // text: {
    //   color: '#fff',
    //   fontSize: 30,
    //   fontWeight: 'bold'
    // },
    ////////////End OverViewSlider Style /////////


    dateStyle: {
        fontSize: 20,
        left: 5,
        top: 5,
        color: 'white',
      },
      layoutContainer: {
        flex: 1,
        // height: 100,
        // backgroundColor: '#293d52',
        backgroundColor: '#e6e9ed', // '#293d52', //'#e6e9ed',
        // opacity: .9,
    
      },
      text: {
        fontSize: 20,
      },
      actionButtonIcon: {
        fontSize: 25,
        height: 26,
        color: '#26b99a',
        opacity: .8,
      },
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-start',
        borderRadius: 5,
        padding: 10,
        height: 100,
    },
    itemName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    cardNum:{
        // width: 80,
        fontSize: 30,
        color: '#3bb73e', //'#34e8c2', //'#2cd6b2',
        // fontWeight: 'bold',
        // fontFamily: "sans-serif",
        opacity: 0.8,
        
      },
      cardText:{
        color: 'white',
        opacity: 0.9,
        top: -10,
        left: 2,
        
        letterSpacing: 1,
        // fontWeight: 'bold',
      },
      rightCardNum:{
        fontSize: 22, 
        opacity: 0.9,
        color: '#0d4d9a',
        fontWeight: 'bold',
        letterSpacing: 1,
      },
      rightCardText:{
        // top: -10,
        opacity: 0.9,
        letterSpacing: 1.5,
        color: '#0d4d9a',
        fontSize: 15,
    
      },

      /////Cards Numbers component
      cardDivider:{
         backgroundColor: '#0d4d9a',
         height: 0.7,
         width:  ((Dimensions.get("window").width)-100) ,// from react-native //300,
         opacity: 0.6
      },
      mainCardsGrid:{
       top: 10,
        // left: 5,
        height: 100,
        
        backgroundColor: '#e6e9ed',//'#293d52', //'#e6e9ed',
        // backgroundColor: 'white',
      },
      leftRow:{
        left: 20,
      },
      dayText: {
        // width: 300,
        left: 20,
        color: 'white',
        fontSize: 30, 
        fontWeight: 'bold',
        letterSpacing : 3
      },
      dateText: { 
        // width: 240,
        left: 25,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.6,
      },
    //////////////////////////////// OverView Charts Component ///////////////////////////
    chartTitle:{
        left: 20,
        color: '#0d4d9a',
        fontSize: 14, 
        fontWeight: 'bold',
        letterSpacing : 3
    },
    ////////////////////////////// End OverView Charts component /////////////////////////


  //////////////////////Top Cards component ///////////////////
 
 
  rightTextNum:{
    fontSize: 18,
    textAlign: 'right',
    // marginRight: 50,
    color: '#3bb73e', //'#34e8c2', //'#2cd6b2',
    fontWeight: 'bold',
    // opacity: 0.6, 
  },
  rightTextLabel:{
    fontSize: 15,
    fontWeight: 'bold',
    // letterSpacing: 1,
    opacity: 0.7,
    color:  '#3bb73e', //'#34e8c2', //'#34e8c2', //'#2cd6b2',
    
    // color: 'white',
  },
  mainGrid:{
    height: (windowHeight/8)-10,
    borderRadius: 50,
     backgroundColor: '#e6e9ed', //'#293d52', //'#e6e9ed',
  },
  rightDayText: { 
    
    left: 20,
    color: '#0d4d9a', // 'white', //'white',
    fontSize: 23, 
    fontWeight: 'bold',
    letterSpacing : 2
  },
  rightDateText: { 
    
    left: 25,
    color: '#0d4d9a', //'white', //'white',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.8,
    letterSpacing : 1
  },

  //////////////////////End Top Cards Component ///////////////
}
  
// export default{
//     //////////////////////////////////////////////
//     //// OverViewHeader.js component Style ///////
//     //////////////////////////////////////////////
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       header_center_text: {
//         fontSize: 17,
//         color : "white",
//         opacity: .6,
//       },

//     ////////////End OverViewHeader Style /////////

//     //////////////////////////////////////////////
//     //// OverView_Slider.js component Style ///////
//     //////////////////////////////////////////////
//     viewSlide:{
//         height:  ((Dimensions.get("window").height)-150) ,// from react-native
//     },
//     wrapper: {
//       // flex: 1,
//       height :  (Dimensions.get("window").height)-150 ,// from react-native
//       borderRadius: 10,
//       marginBottom: -10,
//       backgroundColor: '#27394c',
//     },
//     slide1: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     slide2: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#97CAE5'
//     },
//     slide3: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#92BBD9'
//     },
//     // text: {
//     //   color: '#fff',
//     //   fontSize: 30,
//     //   fontWeight: 'bold'
//     // },
//     ////////////End OverViewSlider Style /////////


//     dateStyle: {
//         fontSize: 20,
//         left: 5,
//         top: 5,
//         color: 'white',
//       },
//       layoutContainer: {
//         flex: 3,
//         backgroundColor: 'white',
//         // opacity: .9,
    
//       },
//       text: {
//         fontSize: 20,
//       },
//       actionButtonIcon: {
//         fontSize: 25,
//         height: 26,
//         color: '#26b99a',
//         opacity: .8,
//       },
//     gridView: {
//         paddingTop: 25,
//         flex: 1,
//     },
//     itemContainer: {
//         justifyContent: 'flex-start',
//         borderRadius: 5,
//         padding: 10,
//         height: 100,
//     },
//     itemName: {
//         fontSize: 20,
//         color: '#fff',
//         fontWeight: '600',
//     },
//     itemCode: {
//         fontWeight: '600',
//         fontSize: 12,
//         color: '#fff',
//     },
//     cardNum:{
//         // width: 80,
//         fontSize: 30,
//         color: '#34e8c2', //'#2cd6b2',
//         // fontWeight: 'bold',
//         // fontFamily: "sans-serif",
//         opacity: 0.8,
        
//       },
//       cardText:{
//         color: 'white',
//         opacity: 0.7,
//         top: -10,
//         left: 2,
        
//         letterSpacing: 1,
//         // fontWeight: 'bold',
//       },
//       rightCardNum:{
//         fontSize: 22, 
//         opacity: 0.6,
//         color: 'white',
//         fontWeight: 'bold',
//         letterSpacing: 1,
//       },
//       rightCardText:{
//         // top: -10,
//         opacity: 0.7,
//         letterSpacing: 1.5,
//         color: 'white',
//         fontSize: 15,
    
//       },
//       mainCardsGrid:{
        
       
//         left: 20,
//         height: 100,
//         // backgroundColor: 'white',
//       },
//       dayText: { 
//         // width: 300,
//         left: 20,
//         color: 'white',
//         fontSize: 30, 
//         fontWeight: 'bold',
//         letterSpacing : 3
//       },
//       dateText: { 
//         // width: 240,
//         left: 25,
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//         opacity: 0.6,
//       },
//     //////////////////////////////// OverView Charts Component ///////////////////////////
//     chartTitle:{
//         left: 20,
//         color: '#f0e7e4',
//         fontSize: 14, 
//         fontWeight: 'bold',
//         letterSpacing : 3
//     },
//     ////////////////////////////// End OverView Charts component /////////////////////////


//   //////////////////////Top Cards component ///////////////////
//   rightTextNum:{
//     fontSize: 25,
//     textAlign: 'right',
//     marginRight: 30,
//     color: '#34e8c2', //'#2cd6b2',
//     // fontWeight: 'bold',
//     // opacity: 0.6, 
//   },
//   rightTextLabel:{
//     fontSize: 16,
//     // fontWeight: 'bold',
    
//     opacity: 0.7,
//     color: '#34e8c2', //'#2cd6b2',
    
//     // color: 'white',
//   },
//   mainGrid:{
//     // top: 10,
//     // backgroundColor: 'white',
//   },
//   rightDayText: { 
    
//     left: 20,
//     color: 'white',
//     fontSize: 30, 
//     fontWeight: 'bold',
//     letterSpacing : 3
//   },
//   rightDateText: { 
    
//     left: 25,
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     opacity: 0.6,
//   },

//   //////////////////////End Top Cards Component ///////////////
// }
  