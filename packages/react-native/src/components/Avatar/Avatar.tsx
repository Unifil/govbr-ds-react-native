import React from "react";
import {  View, Text } from "react-native";
 

 
export const Avatar = () => {
  return (
    <View style={{
      width: 37,
        height: 37,
        borderRadius: 50,
        backgroundColor: 'green',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }}> 
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
    >HS</Text>
    </View>
  );
};
 