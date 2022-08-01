import React,{useState} from 'react'
import {View,Button,TextInput} from 'react-native'










export default function enterid({navigation}){

const[id,setId]=useState('0');


 var data;
  let obj2={
    
  }

  let obj = {
   
    myFunction3:function(){
        navigation.navigate('afterorderplace', {id:id});
    }
  }


return(

    <View   style={{margin:20,marginTop:60}} >
    

<TextInput 
    placeholder='enter order id:' 
    onChangeText={(val)=>{setId(val)}}
     style={{ borderWidth:2,borderColor:'skyblue',margin:20 ,padding:10}}
     />

<Button title="submit"  onPress={obj.myFunction3}  style={{ }} />

{/* <Button title="call api"  onPress={()=>{this.getapi1()}} style={{ margin:50 }}/> */}

</View>

)
myFunction()
{




    console.warn(name);
}

    
}












