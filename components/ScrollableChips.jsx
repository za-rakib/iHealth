import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScrollableChips = () => {
    const filters = ['All', 'Nearby', 'Highly Rated', 'Emergency', 'Pediatric', 'Cardiology'];
    const [selected, setSelected] = React.useState('All');
    
    return (
        <View style={styles.chipsContainer}>
            {filters.map((filter) => (
                <TouchableOpacity
                    key={filter}
                    style={[
                        styles.chip,
                        selected === filter && styles.chipSelected,
                    ]}
                    onPress={() => setSelected(filter)}
                >
                    <Text
                        style={[
                            styles.chipText,
                            selected === filter && styles.chipTextSelected,
                        ]}
                    >
                        {filter}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

    chipsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    chip: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginRight: 10,
    },
    chipSelected: {
        backgroundColor: '#3498db',
    },
    chipText: {
        fontSize: 14,
        color: '#666',
    },
    chipTextSelected: {
        color: 'white',
    }
});

export default ScrollableChips