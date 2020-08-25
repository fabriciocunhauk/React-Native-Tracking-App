import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>TrackListScreen screen</Text>
        <Button
            title="Go track detail"
            onPress={() => navigation.navigate('TrackDetail')}
        />
    </>
}

const styles = StyleSheet.create({

});

export default TrackListScreen;