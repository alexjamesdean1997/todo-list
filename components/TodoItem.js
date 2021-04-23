import React, { useState } from "react";
import {CheckBox, View, Text, StyleSheet} from "react-native";

const TodoItem = (props) => {

    const todo = props.todo.text;
    const isDone = props.todo.done;

    const [isSelected, setSelection] = useState(isDone);

    return(
        <View style={styles.container}>
            <View style={styles.picContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
            </View>
            <View style={styles.inner}>
                <View>
                    <Text style={styles.name}>{todo}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        display: "flex",
        flexDirection: "row",
    },
    picContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    pic: {
        height: 37,
        width: 37,
        backgroundColor: "#39D0B2",
        borderRadius: 37,
    },
    inner: {
        paddingLeft: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBEB",
        width: "-webkit-fill-available",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 17,
        fontWeight: 600,
    },
    date: {
        fontSize: 15,
    }
});


export default TodoItem;