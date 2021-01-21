
import React from 'react'; 
import {Text, View} from 'react-native';

 

 const RouteItem=(props)=> {
   
    return(
        
        <View>
          <Text>{props.grade}</Text>
          <Text>{props.name}</Text>    
       </View>
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
