import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import {MaterialIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../constants/Colors";


export default class NowPlaying extends Component {
    constructor(props) {
        super(props)
        {
            super(props);
            this.state = {
                progress: 0.3
            };
        }
    }

    render() {
        return (
            <LinearGradient colors={[Colors.accentGradientStart, Colors.accentGradientEnd]}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.nowPlayingContainer}>

                {/*ProgressBar*/}
                <View style={[styles.progressBar, {width: responsiveWidth((this.state.progress * 100))}]}/>
                {/*end of progress bar*/}

                <View style={styles.controlContainer}>
                    <View style={styles.songContainer}>
                        <Image
                            source={{uri: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/15/f1/bf/15f1bf30-54b7-e4a1-1a84-02cdc3b1fc2b/source/512x512bb.jpg"}}
                            style={styles.albumArt}/>
                        <View style={styles.infoContainer}>
                            <Text style={styles.songTitle}>Song</Text>
                            <Text style={styles.albumText}>Album info</Text>
                        </View>
                    </View>
                    <MaterialIcons name={'play-arrow'} color={Colors.headingColor} size={responsiveFontSize(6)}/>
                </View>

            </LinearGradient>
        );


    }
}



const styles = StyleSheet.create({
    nowPlayingContainer:{
        height: responsiveHeight(10),
    },
    progressBar:{
        height: responsiveHeight(0.7),
        backgroundColor: Colors.headingColor,
        borderRadius: responsiveWidth(1)
    },
    controlContainer:{
        flex:1,
        alignSelf:'stretch',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:responsiveWidth(6),
        alignItems:'center'
    },
    songContainer:{
        // alignSelf:'stretch',
        // alignItems:'center'
        flexDirection: 'row'
    },
    albumArt:{
        width:responsiveWidth(7),
        height:responsiveHeight(7),
        borderRadius: responsiveHeight(1),
        marginRight:responsiveWidth(5)
    },
    infoContainer:{
        justifyContent: 'center'
    },
    songTitle:{
        fontFamily:'fira-regular',
        color:Colors.headingColor,
        fontSize: responsiveFontSize(2.3),
        marginBottom:responsiveHeight(0.3),
    },
    albumText:{
        fontFamily:'fira-regular',
        color: Colors.geryColor,
        fontSize: responsiveFontSize(1.7)
    }

});
