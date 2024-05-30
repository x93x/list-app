import { View ,Text,StyleSheet} from "react-native";

function Button({children}){

    return(
<View style={Styles.buttonContainer}>
    <Text style={Styles.text}>{children}</Text>
</View>
    );
}
export default Button;

const Styles=StyleSheet.create({

    buttonContainer:{
        width:'90%',
        height:40,
        margin:15,
        borderWidth:2,
        borderColor:"#B460979E",
        backgroundColor:'#5C0C4097',
alignItems:"center",
     justifyContent:'center',
     borderRadius:8,
     elevation:4,
     

        
    },
    text:{
        color:'white',
        fontSize:20,
    }

});