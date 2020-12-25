import { Dimensions } from "react-native";

export function windowHeight() {
    return Dimensions.get('window').height;
}

export function windowWidth() {
    return Dimensions.get('window').width;
}

export function renderIf(condition, content) {
    return condition ? content : null;
}