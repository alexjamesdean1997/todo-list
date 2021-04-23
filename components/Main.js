import React from "react";
import todosDatas from "../data/todosData";
import {View, Text, StyleSheet} from "react-native";
import TodoItem from './TodoItem';

const Main = () => {

    const todos = todosDatas.map(todo => <TodoItem key={todo.id} todo={todo}/>);

    return (
        <View style={styles.container}>
            {todos}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 90,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 100,
    },
    title: {
        fontSize: 22,
        fontWeight: 700,
        paddingBottom: 13
    }
});

export default Main;