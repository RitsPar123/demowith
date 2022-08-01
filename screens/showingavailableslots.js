import React,{useState,useEffect} from 'react'
import {StyleSheet,ScrollView,View,Button,TextInput,Text} from 'react-native'
import {
    Dropdown,
  } from 'sharingan-rn-modal-dropdown';


export default function showingavailableslots({navigation}){
    const initialvalue = [
        
      ];
      const id=navigation.getParam('id',12);
      console.warn(id);
      const [myArray, setMyarray] = useState(initialvalue);

    const [valueSS, setValueSS] = useState('aabatra  sdsfgh dfgh');
    const [onetime,setOnetime]=useState(true);
    const[msg,setMsg]=useState("");

    const onChangeSS = (value) => {
        setValueSS(value);
      };

    let obj4={

        show:async function(){

            let response=await fetch("http://10.0.2.2:8080/User/showavailableslots");
            // console.warn(response);
            let data=await response.json();
            const arr=data.strArray;
            
            // console.warn(data.strArray);
            // let str="";
            //   updateMyArray(arr);
            // console.warn(arr);
            

            setMyarray(arr);

        },
        submit:async function(){
            var strUser=valueSS;
            console.warn(strUser);
            var list=strUser.split(' ');
                    let hr=0;
                    if(list[0]=== "next_day") {
                        hr = hr + 24;
                        if (list[2]=== "pm")
                            hr = hr + 12;
                        hr=hr+parseInt(list[1],10);

                    }
                    else
                    {
                        if (list[1]=== "pm")
                            hr = hr + 12;
                        hr=hr+parseInt(list[0],10);
                    }
                    console.warn(hr);

                    obj4.getapi1("http://10.0.2.2:8080/User/addslot",hr,id);
                    
        },
        getapi1:async function(url,hr,id) {

            console.warn("getapi1 is running");

            const response = await fetch(url, {
                method: 'POST',
              
                body: JSON.stringify({
                  id:id,
                  hr:hr
              
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
                });
              
                  // Storing data in form of JSON
                  var data = await response.json();
                  console.log(data.min);
                  if(data.min==-1)
                  {
              
                  setMsg("sorry,that slot is booked,please choose other slot");
                  }
                  else{
                   obj4.getapi2("http://10.0.2.2:8080/User/changestatus",hr,id,data.min);
                  }


        },
        getapi2:async function(url,hr,id,min){

            console.warn("getap2 is running");

            const response = await fetch(url, {
                method: 'POST',
              
                body: JSON.stringify({
                  id:id,
                  min:min,
                  hr:hr
              
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
                });
                console.log("ok");
              
              
              
                 navigation.goBack();



        }
                  


    }



    

   useEffect(() => {
        
       obj4.show();

       
    },[]);
   

   


return( 
    <View
      style={{
        flexDirection: 'column',
        height: '80%',
      }}
    >
      <ScrollView>
        
        <View style={styles.container}>


            
          <Dropdown
            label="Simple dropdown"
            data={myArray}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
          />
        </View>

        
      </ScrollView>
      
      <View>
                    <Button
                      title="submit"
                      onPress={obj4.submit}
                    />
                  </View> 
        <View>
            <Text>{valueSS}</Text>

            <Text>{msg}</Text>
        </View>


      

      
    </View>


    
)


}


const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      marginLeft: 20,
      marginRight: 20,
      flex: 1,
    },
    buttonView: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'center'
      },
  });