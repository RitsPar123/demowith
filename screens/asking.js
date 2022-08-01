

import {View,Button,Text} from 'react-native'
import React from 'react';


export default function asking({navigation}) {


  let obj={
    myFunction1:function(){
        console.log("clicked for exisiting user");
    navigation.navigate("enterid");
    
    
    },
    myFunction2:function(){
        console.log("clicke for new user");
      navigation.navigate("home");
    }
    
    
    }
  return (
    <View   style={{margin:20,marginTop:60}} >
        


        <Button title="exisiting user"  onPress={obj.myFunction1}  style={{ }} />
       
      

    <View  style={{ marginTop:20}}>
    <Button title="new user"  onPress={obj.myFunction2}  />
    </View>
      
      <Text>Hii</Text>
      </View>
  )
}


