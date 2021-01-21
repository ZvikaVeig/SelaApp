
import React from 'react'; 
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import colors from "../config/colors";
 

 const RouteItem=({grade,name,onPress})=> {
   
    return(
        
         <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View>
              <Text>{grade}</Text>
              <Text>{name}</Text>    
          </View>
        </TouchableHighlight>
    );

 };
 
const styles={
    viewStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        eleveation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,

    },

};


export default RouteItem;
