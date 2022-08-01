import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import afterorderplace from  '../screens/afterorderplace';
import home from "../screens/home";
import showingavailableslots from "../screens/showingavailableslots";
import enterid from "../screens/enterid";
import asking from "../screens/asking";
const screens={
    asking:{
        screen:asking
    },
    home:{
        screen:home
    },
    afterorderplace:{

        screen:afterorderplace
    },
    showingavailableslots:{
        screen:showingavailableslots
    }, 
    enterid:{
        screen:enterid
    }
    
    
    


}


const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);

