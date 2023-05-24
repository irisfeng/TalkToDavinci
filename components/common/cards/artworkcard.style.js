import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden', // to apply borderRadius to image
        width: 150, // or whatever size you want
        height: 200, // or whatever size you want
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default styles;