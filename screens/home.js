import React,{useState} from 'react'
import {View,Button,TextInput} from 'react-native'









export default function home({navigation}){

const [name,setName]=useState('Ritesh')
const [number,setNumber]=useState('123456789')
const [medicinename,setMedicineName]=useState('benzamine')
const [medicineprice,setMedicinePrice]=useState('12345')


 var data;
  let obj2={
    one: function() {
        // console.warn("ooh my friend ganesha")
        // console.warn(data.id);
        // navigation.navigate('afterorderplace',{id:data.id});



        navigation.navigate('afterorderplace', { id:data.id });
    },
  }

  let obj = {
   
    myFunction: async function() {     // Normal function
    const response=await fetch("http://10.0.2.2:8080/User/orderPlace", {
        method: 'POST',
      
        body: JSON.stringify({
          name:name,
          number:number,
          medicine:medicinename,
          price:medicineprice
      
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
        });
         data=await response.json();
        // console.warn(data.id);

     obj2.one();
    }
  }


return(

  

    <View   style={{margin:20,marginTop:60}} >
    <TextInput 
    placeholder='enter Name:' 
    onChangeText={(val)=>{setName(val)}}
     style={{ borderWidth:2,borderColor:'skyblue',margin:20 ,padding:10}}
     />

<TextInput 
    placeholder='enter Number:' 
    onChangeText={(val)=>{setNumber(val)}}
     style={{ borderWidth:2,borderColor:'skyblue',margin:20 ,padding:10}}
     />

<TextInput 
    placeholder='medicine name:' 
    onChangeText={(val)=>{setMedicineName(val)}}
     style={{ borderWidth:2,borderColor:'skyblue',margin:20 ,padding:10}}
     />

<TextInput 
    placeholder='medicine price:' 
    onChangeText={(val)=>{setMedicinePrice(val)}}
     style={{ borderWidth:2,borderColor:'skyblue',margin:20 ,padding:10}}
     />

<Button title="place order"  onPress={obj.myFunction}  style={{ }} />

</View>

)

    
}












