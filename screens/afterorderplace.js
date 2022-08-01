import React,{useState,useEffect,Component} from 'react'
import {StyleSheet,View,Button,TextInput,Text} from 'react-native'
import { Checkbox } from 'react-native-paper';

import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';









export default function afterorderplace({navigation}){







//     const [name,setName]=useState('Ritesh')
//     const [number,setNumber]=useState('123456789')
// const [medicinename,setMedicineName]=useState('benzamine')
// const [medicineprice,setMedicinePrice]=useState('12345')


const [status,setStatus]=useState('You will get call within');
    const [write,setWrite]=useState('123456789');
    const [showschedule,setShowschedule]=useState(true);
    const [confirm,setConfirm]=useState(false);
    const [showcallback,setCallback]=useState(true);
    const [seconds,setSeconds]=useState(0);

    // const isFocused = useIsFocused();
    var clear;

  
    const id=navigation.getParam('id',12);

    

    
    


     


    let obj3={
        /*one: function() {
            console.warn("ooh my friend ganesha");
            console.warn(id);
        },*/

        
        

        csu:async function(){
            let response = await fetch('http://10.0.2.2:8080/User/changestatus'+'?'+ new URLSearchParams({
id:id
}));
let data1=await response.json();
//  document.getElementById("status").innerHTML=data1.str+ "\n";

response = await fetch('http://10.0.2.2:8080/User/callmissed'+'?'+ new URLSearchParams({
id:id
}));
var data2=await response.json();

let tab1="you missed ";
let tab2=data2.str;
let tab3=" call\n2 call missed will result in order cancellation \n";
let tab4='If you want to edit ,you can edit your slot as well  \n';
//    let tab5='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';
let tab=data1.str+tab1+tab2+tab3+tab4;
// document.getElementById("status").innerHTML+=tab;
setStatus(tab);

//  document.getElementById("write").innerHTML="";
setWrite("if you want to edit slot,you can do that.. \n");
setShowschedule(true);
setCallback(false);


        },

        csaucb:async function(){


            let response = await fetch('http://10.0.2.2:8080/User/changestatus'+'?'+ new URLSearchParams({
id:id
}));
let data1=await response.json();
//  document.getElementById("status").innerHTML=data1.str+"\n";
// setStatus(data1.str);
console.log(id);
response = await fetch('http://10.0.2.2:8080/User/callattempt'+'?'+ new URLSearchParams({
id:id
}));
let data2=await response.json();
let tab1="we made \n";
let tab2=data2.str;
let tab3=" callattempt to you \n 3 callattempt missed will result in order cancellation \n";
let tab4='If you want to edit ,you can edit your slot as well  \n';
//    let tab5='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';
let tab=data1.str+'\n'+tab1+tab2+tab3+tab4;
// document.getElementById("status").innerHTML+=tab;
setStatus(tab);
//   document.getElementById("write").innerHTML="";
setWrite("");
setShowschedule(true);
setCallback(false);

        },

        csaucd:async function(){
            let response = await fetch('http://10.0.2.2:8080/User/changestatus'+'?'+ new URLSearchParams({
id:id
}));
let data1=await response.json();
//  document.getElementById("status").innerHTML=data1.str+"\n";

console.log(id);
response = await fetch('http://10.0.2.2:8080/User/callattempt'+'?'+ new URLSearchParams({
id:id
}));
let data2=await response.json();
let tab1="we made";
let tab2=data2.str;
let tab3=" callattempt to you \n 3 callattempt missed will result in order cancellation \n";
let tab4='If you want to edit ,you can edit your slot as well  \n';
//    let tab5='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';
let tab=data1.str+tab1+tab2+tab3+tab4;
// document.getElementById("status").innerHTML+=tab;

//   document.getElementById("write").innerHTML="";
setStatus(tab);
setWrite("");
setShowschedule(true);
setCallback(false);
        },


        
       
      

        stopCounter:function(id)
        {
           console.log("stopcounter is running");
            clearInterval(id);
        },

      




        getapi7:function(url) {
            console.warn("inside getapi7 that is csnc");
            



            fetch(url+'?'+ new URLSearchParams({
            id:id
        })).then((response) => response.json())
.then((data) => {
             setStatus(data.str+'\n');


             setWrite("If you want to edit ,you can edit your slot as well\n");
             setShowschedule(true);

             setCallback(false);
                    /*let tab1='If you want to edit ,you can edit your slot as well  \n';
                    let tab2='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';
                    let tab=tab1+tab2;
                     document.getElementById("write").innerHTML = tab;*/

        

            
            
            





        })},
    
        schedulecall:function(){
            




            navigation.navigate("showingavailableslots",{id:id});
                
                
                





        },
        callback:function(){
//             let url="http://10.0.2.2:8080/User/callback";
//             console.log(id);
// console.log(id);
// console.log("callback api is working");
// const response = await fetch(url+'?'+ new URLSearchParams({
//     id:id
// }));
// var data = await response.json();

// setStatus("you will get call back within 5 minutes");
// setWrite("");
// setShowschedule(false);
// setCallback(false);
// document.getElementById("write").innerHTML="";


fetch("http://10.0.2.2:8080/User/callback"+'?'+ new URLSearchParams({
    id:id
})).then((response) => response.json())
.then((data) => {
    setStatus("you will get call back within 5 minutes");
    setWrite("");
    setShowschedule(false);
    setCallback(false);

})





        },
        getapi5: function (url)
{
    console.warn("inside getapi5");
    console.log(id);
//     const response = await fetch(url+'?'+ new URLSearchParams({
//     id:id
// }));
// var data1=await response.json();
// let tab1="we made";
// let tab2=data1.str;
// let tab3=" callattempt to you \n 3 callattempt missed will result in order cancellation \n";
// let tab=tab1+tab2+tab3;
// // document.getElementById("status").innerHTML=tab;
// setStatus(tab);

fetch(url+'?'+ new URLSearchParams({
    id:id
})).then((response) => response.json())
.then((data) => {
    let tab1="we made";
let tab2=data.str;
let tab3=" callattempt to you \n 3 callattempt missed will result in order cancellation \n";
let tab=tab1+tab2+tab3;
setStatus(tab);

})




},
getapi6:function (url)
{

    
    console.warn("inside getapi6");
//     const response = await fetch(url+'?'+ new URLSearchParams({
//     id:id
// }));
// var data1=await response.json();

// let tab1="you missed ";
// let tab2=data1.str;
// let tab3=" call \n 2 call missed will result in order cancellation";
// let tab=tab1+tab2+tab3;
// // document.getElementById("status").innerHTML=tab;
// setStatus(tab);


fetch(url+'?'+ new URLSearchParams({
    id:id
})).then((response) => response.json())
.then((data) => {
    let tab1="you missed ";
let tab2=data.str;
let tab3=" call \n 2 call missed will result in order cancellation";
let tab=tab1+tab2+tab3;
setStatus(tab);

})


},


        getapi4:function(){

            console.log("inside getapi4");
        //     const response = await fetch("http://10.0.2.2:8080/User/write"+'?'+ new URLSearchParams({
        //     id:id
        // }));
        // var data = await response.json();

        // console.warn(data.str);
       
        fetch("http://10.0.2.2:8080/User/write"+'?'+ new URLSearchParams({
            id:id
        })).then((response) => response.json())
.then((data) => {
if(data.str==="csnc")
{
    obj3.getapi7("http://10.0.2.2:8080/User/changestatus");
}
else if(data.str==="csu")
{
   
   obj3.csu();
    


}
else if(data.str==="csaucb")
{
    
    obj3.csaucb();
}
else if(data.str==="csaucd")
{
    obj3.csaucd();
}

else if(data.str==="iw")
{
    //   document.getElementById("status").innerHTML="Sorry!! we couldn't make your call in 5 minutes \n";
     let tab1='pls schedule call or click on call back button \n';
    // let tab2='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';

    console.log(id); console.log(id); console.log(id);
    // let tab3='<button class="btn btn-primary" type="button" onclick=callback("http://10.0.2.2:8080/User/callback")>callback</button>';

    let tab=tab1;
    // document.getElementById("write").innerHTML = tab;

    setStatus("Sorry!! we couldn't make your call in 5 minutes \n");
setWrite(tab);
setShowschedule(true);
setCallback(true);

}
 else if(data.str==="iwoh")
{
    //   document.getElementById("status").innerHTML="you placed order in off hour\n";
     let tab1='you can schedule your call by clicking on schedule call button \n';
    // let tab2='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';


    let tab=tab1;
    // document.getElementById("write").innerHTML = tab;

    setStatus("you placed order in off hour\n");
    setWrite(tab);
    setShowschedule(true);
    setCallback(false);

}
else if(data.str==="ccb")
{
    // document.getElementById("status").innerHTML="you will get call back within 5 minutes";
    // document.getElementById("write").innerHTML="";

    setStatus("you will get call back within 5 minutes \n");
    setWrite("");
    setShowschedule(false);
    setCallback(false);
    

}
else if(data.str==="nc")
{
    // document.getElementById("status").innerHTML='your will get call within 5 minutes';
    let tab1='BUSY!!!schedule your call by clicking on schedule call button \n';
    // let tab2='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';

    console.log(id); console.log(id); console.log(id);

    let tab=tab1;

    // document.getElementById("write").innerHTML = tab;


    setStatus("you will get call  within 5 minutes\n");
    setWrite(tab);
    setShowschedule(true);
    setCallback(false);
    
}
else if(data.str==="co")
{

    // document.getElementById("status").innerHTML='your order is cancelled ';
    // document.getElementById("write").innerHTML=' ';

    setStatus('your order is cancelled \n');
    setWrite("");
    setShowschedule(false);
    setCallback(false);
    clear();
    obj3.stopCounter(intervalid); 

}
else if(data.str==="s")
{
    // document.getElementById("status").innerHTML=' your order is placed successfully ';
    // document.getElementById("write").innerHTML=' ';
    // document.getElementById("flexCheckDefault").checked=true;

    setStatus('your order is placed successfully \n');
    setWrite("");
    setShowschedule(false);
    setCallback(false);
    setConfirm(true);
    clear();
    obj3.stopCounter(intervalid); 
    

}
else if(data.str==="aucb")
{
        obj3.getapi5("http://10.0.2.2:8080/User/callattempt");



        let tab1='BUSY!!! pls schedule call or click on call back button \n';
    // let tab2='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';

    // console.log(id); console.log(id); console.log(id);
    // let tab3='<button class="btn btn-primary" type="button" onclick=callback("http://10.0.2.2:8080/User/callback")>callback</button>';

    let tab=tab1;
    // document.getElementById("write").innerHTML = tab;


    // setStatus('your order is placed successfully');
    setWrite(tab);
    setShowschedule(true);
    setCallback(true);
    
}
 else if(data.str==="aucd")
{
        obj3.getapi5("http://10.0.2.2:8080/User/callattempt");



        let tab1='your network was poor\n,you can schedule your call or click on call back button for immediate call \n';
    // let tab2='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';

    console.log(id); console.log(id); console.log(id);
    // let tab3='<button class="btn btn-primary" type="button" onclick=callback("http://10.0.2.2:8080/User/callback")>callback</button>';

    let tab=tab1;
    // document.getElementById("write").innerHTML = tab;

    // setStatus('your order is placed successfully');
    setWrite(tab);
    setShowschedule(true);
    setCallback(true);
    
}
else{
     obj3.getapi6("http://10.0.2.2:8080/User/callmissed");


      let tab1='BUSY!!! pls schedule call or click on call back button \n';
    // let tab2='<button class="btn btn-primary" type="button" id="schedulecall" onclick=schedulecall() >schedule call</button>  &nbsp; &nbsp;  ';

    console.log(id); console.log(id); console.log(id);
    // let tab3='<button class="btn btn-primary" type="button" onclick=callback("http://10.0.2.2:8080/User/callback")>callback</button>';

    let tab=tab1;
    // document.getElementById("write").innerHTML = tab;
    setWrite(tab);
    setShowschedule(true);
    setCallback(true);
}


}
)
       
}};

var setIntervalSynchronous = function (func, delay) {
    var intervalFunction, timeoutId, clear;
    // Call to clear the interval.
    clear = function () {
      clearTimeout(timeoutId);
    };
    intervalFunction = function () {
      func();
      timeoutId = setTimeout(intervalFunction, delay);
    }
    // Delay start.
    timeoutId = setTimeout(intervalFunction, delay);
    // You should capture the returned function for clearing.
    return clear;
  };


const intervalid=()=>{
    clear=setIntervalSynchronous(obj3.getapi4, 2000);
}



useEffect(() => {
    
 intervalid();
   }, []);

      
   
  
   
     return (
    
        <View  style={{margin:20,marginTop:60}} >


<View style={styles.checkboxContainer}>
    <View>
    <Text>your order id is: {id}  </Text>
    <Text>{'\n'}</Text>
    </View>
   
<Checkbox
            status={'checked' }
            
            color={'green'}
            uncheckColor={'red'}
         />
        <Text style={styles.label}>order Placed</Text>
      </View>
            <Text >{status}</Text>
            
            <Text>{write}</Text>
            
             { showschedule && 
                    <View style={styles.fixToText}>
                    <Button
                      title="schedule call"
                      onPress={obj3.schedulecall}
                    />
                  </View>           
             }

{ showcallback && 
                    <View style={styles.fixToText}>
                    <Button
                      title="callback"
                      onPress={obj3.callback}
                    />
                  </View>           
             }

<View style={styles.checkboxContainer}>
<Checkbox
            status={confirm ? 'checked' : 'unchecked'}
            
            color={'green'}
            uncheckColor={'red'}
         />
        <Text style={styles.label}>order confirm</Text>
      </View>
        </View>
    //     <div>
    //   <h2>Box</h2>
    // </div>
        
      
        
      
      );



}



const styles = StyleSheet.create({
    
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
   
  });



