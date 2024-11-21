import { NavigationContainer } from "@react-navigation/native";
import HomeTabs from "./Tabs";
import LoginStack from "./LoginStack";
import DrawerStack from "./Drawer";
import { View } from "react-native";
const Router = () => {
  return (
    
    <NavigationContainer>
        <DrawerStack/> 
    </NavigationContainer>
    
    
  );
}
export default Router;