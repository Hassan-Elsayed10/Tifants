import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
const MonthItem = ({ month, isSelected, onSelect }) => {
    return (
        <TouchableOpacity
            style={[styles.monthItem, isSelected && styles.selectedMonth]}
            onPress={() => onSelect(month)}
        >
            <Text style={isSelected ? styles.selectedText : styles.text}>{month.name}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    monthItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#475AD7',
        margin: 10,
        borderRadius: 15,

    },
    selectedMonth: {
        backgroundColor: '#ffffff',

    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 16,
    },
    selectedText: {
        color: '#3C4EC6',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MonthItem;