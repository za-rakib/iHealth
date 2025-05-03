import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import hospitals from '../assets/data';
import ScrollableChips from '../components/ScrollableChips';

interface Hospital {
    id: string;
    name: string;
    services: string[];
    // Adding these properties for enhanced UI
    rating?: number;
    distance?: string;
    image?: string;
}

const Home = () => {
    // Adding placeholder images for hospitals that don't have one
    const getHospitalImage = (item: Hospital) => {
        return item.image || `https://source.unsplash.com/300x200/?hospital,medical,${item.id}`;
    };

    // Helper function to render star ratings
    const renderRating = (rating: number = 4.5) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Ionicons key={`star-${i}`} name="star" size={14} color="#FFD700" />
            );
        }
        
        if (hasHalfStar) {
            stars.push(
                <Ionicons key="half-star" name="star-half" size={14} color="#FFD700" />
            );
        }
        
        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <Ionicons key={`empty-star-${i}`} name="star-outline" size={14} color="#FFD700" />
            );
        }
        
        return (
            <View style={styles.ratingContainer}>
                {stars}
                <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
        );
    };
    
    const renderServiceTags = (services: string[]) => {
        // Limit to 2 services and show "+X more" if there are more
        const displayServices = services.slice(0, 2);
        
        return (
            <View style={styles.tagsContainer}>
                {displayServices.map((service, index) => (
                    <View key={index} style={styles.tagPill}>
                        <Text style={styles.tagText}>{service}</Text>
                    </View>
                ))}
                {services.length > 2 && (
                    <View style={styles.tagPill}>
                        <Text style={styles.tagText}>+{services.length - 2} more</Text>
                    </View>
                )}
            </View>
        );
    };

    const renderItem = ({ item }: { item: Hospital }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: getHospitalImage(item) }}
                    style={styles.hospitalImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.hospitalName} numberOfLines={1}>{item.name}</Text>
                
                <View style={styles.infoRow}>
                    {renderRating(item.rating)}
                    <View style={styles.distanceContainer}>
                        <Ionicons name="location" size={14} color="#3498db" />
                        <Text style={styles.distanceText}>{item.distance || '2.5 km'}</Text>
                    </View>
                </View>
                
                {renderServiceTags(item.services)}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hello there 👋</Text>
                    <Text style={styles.title}>Find Your Hospital</Text>
                </View>
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons name="search" size={24} color="#3498db" />
                </TouchableOpacity>
            </View>
            
            <View style={styles.filterContainer}>
                <ScrollableChips />
            </View>
            
            <FlatList
                data={hospitals}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

// Horizontal scrollable filter chips

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: 40, // For iOS status bar
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    greeting: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    searchButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterContainer: {
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    listContent: {
        padding: 15,
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    imageContainer: {
        height: 150,
        width: '100%',
    },
    hospitalImage: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        padding: 15,
    },
    hospitalName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distanceText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tagPill: {
        backgroundColor: '#f0f8ff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        marginRight: 8,
        marginBottom: 5,
    },
    tagText: {
        fontSize: 12,
        color: '#3498db',
    },
});

export default Home;