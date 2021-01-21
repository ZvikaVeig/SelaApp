
import React, {Component} from 'react';
import {FlatList,StyleSheet, View, Image, TouchableOpacity, Text, Alert, DeviceEventEmitter, TextInput, ImageBackground} from 'react-native';
import Header from './src/components/header';
import RouteItem from './src/components/routeItem';
import RouteList from "./src/data/routeList.js";
import ListItemSeparator from "./src/components/listItemSeparator.js";


 
export default class App extends Component {


 goToRouteScreen(code) {
    //const {componentId} = this.props;
    //navUtils.pushDetailsScreen({componentId, code});
      console.log("******route selected " );

    }


   render() {
      console.log("******RouteList: " , RouteList);
    return (
    <>
        <Header  headerText={'fffffff'} />
        <FlatList
          data={RouteList}
          keyExtractor={(route) => route.routeId.toString()}
        // ListHeaderComponent={ <RouteListHeader cragItem={site} />}
          renderItem={({ item }) => (
            
            <RouteItem
              grade={item.grade}
              name={item.name}
              onPress={() => this.goToRouteScreen()}       
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
        
      </>  
    );
   };



};



