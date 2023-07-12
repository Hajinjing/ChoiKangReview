import {StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Setting Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SettingScreen;
