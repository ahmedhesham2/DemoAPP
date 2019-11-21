import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

class DrawerHeader extends React.PureComponent  {
    render(){
        return (
            <TouchableOpacity>
                <View
                    style={{
                        // flexDirection: 'row',
                        backgroundColor: 'white',//'#293d52', //'#e6e9ed',
                        // paddingVertical: 20,
                        padding: 17,
                        height: (Dimensions.get("window").height)/6,
                        // paddingTop:  18,
                        borderBottomColor: '#e6e9ed',
                        borderBottomWidth: 1,
                        // alignItems: 'center',
                    }}
                >
                    <Image style={{width: 160,height: 60, marginLeft: 30 }}
                        source={require('../../../assets/Chicken-App-Wide.png')}
                    />
                    {/* <Text style={{ color: '#293d52', fontWeight:'bold', paddingLeft: 9, fontSize: 16 }}>
                        Chicken
                    </Text>
                    <Text style={{ color: '#26b99a',  fontSize: 16, fontWeight:'bold', }}>
                        .app
                    </Text> */}
                    {/* <Text style={{ top: 17, color: '#293d52',  marginLeft: -9, fontSize: 16, fontWeight:'bold', }}>
                        Welcome admin user,
                    </Text> */}
                </View>
            </TouchableOpacity>
        );
    }
}

export default DrawerHeader;
