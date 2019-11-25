import React from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';

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

                </View>
            </TouchableOpacity>
        );
    }
}

export default DrawerHeader;
