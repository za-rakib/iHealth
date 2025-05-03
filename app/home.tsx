import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import hospitals from '../assets/data';
import ScrollableChips from '../components/ScrollableChips';

interface Hospital {
    id: string;
    name: string;
    services: string[];
    image?: string;
    rating?: number;
    distance?: number;
}

interface Appointment {
    hospitalId: string;
    hospitalName: string;
    service: string;
    date: string;
    time: string;
}

const Home = () => {
    const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [appointmentModal, setAppointmentModal] = useState(false);
    const [serviceModal, setServiceModal] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    // Sample available dates (next 7 days)
    const availableDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    });

    // Sample available time slots
    const availableTimes = [
        '9:00 AM', '10:00 AM', '11:00 AM', 
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
    ];

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

    const handleHospitalSelect = (hospital: Hospital) => {
        setSelectedHospital(hospital);
        setServiceModal(true);
    };

    const handleServiceSelect = (service: string) => {
        setSelectedService(service);
        setServiceModal(false);
        setAppointmentModal(true);
    };

    const handleBookAppointment = () => {
        if (selectedHospital && selectedService && selectedDate && selectedTime) {
            const newAppointment: Appointment = {
                hospitalId: selectedHospital.id,
                hospitalName: selectedHospital.name,
                service: selectedService,
                date: selectedDate,
                time: selectedTime
            };
            
            setAppointments([...appointments, newAppointment]);
            setAppointmentModal(false);
            setConfirmationModal(true);
            
            // Reset selections
            setTimeout(() => {
                setConfirmationModal(false);
                setSelectedHospital(null);
                setSelectedService(null);
                setSelectedDate(null);
                setSelectedTime(null);
            }, 3000);
        }
    };

    const renderItem = ({ item }: { item: Hospital }) => (
        <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => handleHospitalSelect(item)}
        >
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
                        <Text style={styles.distanceText}>{item.distance ? `${item.distance.toFixed(1)} mi` : '2.5 mi'}</Text>
                    </View>
                </View>
                
                {renderServiceTags(item.services)}
                
                <TouchableOpacity 
                    style={styles.bookButton}
                    onPress={() => handleHospitalSelect(item)}
                >
                    <Text style={styles.bookButtonText}>Book Appointment</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    // Modal for selecting a service
    const ServiceSelectionModal = () => (
        <Modal
            visible={serviceModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setServiceModal(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Select a Service</Text>
                        <TouchableOpacity onPress={() => setServiceModal(false)}>
                            <Ionicons name="close" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>
                    
                    <ScrollView style={styles.servicesList}>
                        {selectedHospital?.services.map((service, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.serviceItem}
                                onPress={() => handleServiceSelect(service)}
                            >
                                <Text style={styles.serviceItemText}>{service}</Text>
                                <Ionicons name="chevron-forward" size={20} color="#3498db" />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );

    // Modal for booking an appointment
    const AppointmentBookingModal = () => (
        <Modal
            visible={appointmentModal}
            transparent={true}
            // animationType="slide"
            onRequestClose={() => setAppointmentModal(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Book Appointment</Text>
                        <TouchableOpacity onPress={() => setAppointmentModal(false)}>
                            <Ionicons name="close" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.appointmentDetails}>
                        <Text style={styles.appointmentHospital}>{selectedHospital?.name}</Text>
                        <View style={styles.appointmentService}>
                            <Ionicons name="medical" size={18} color="#3498db" />
                            <Text style={styles.appointmentServiceText}>{selectedService}</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.sectionTitle}>Select Date</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.datesContainer}>
                        {availableDates.map((date, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={[
                                    styles.dateItem, 
                                    selectedDate === date && styles.selectedDateItem
                                ]}
                                onPress={() => setSelectedDate(date)}
                            >
                                <Text style={[
                                    styles.dateText, 
                                    selectedDate === date && styles.selectedDateText
                                ]}>
                                    {date}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    
                    <Text style={styles.sectionTitle}>Available Time Slots</Text>
                    <View style={styles.timeSlotsContainer}>
                        {availableTimes.map((time, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={[
                                    styles.timeSlot, 
                                    selectedTime === time && styles.selectedTimeSlot
                                ]}
                                onPress={() => setSelectedTime(time)}
                            >
                                <Text style={[
                                    styles.timeSlotText, 
                                    selectedTime === time && styles.selectedTimeSlotText
                                ]}>
                                    {time}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    
                    <TouchableOpacity 
                        style={[
                            styles.confirmButton, 
                            (!selectedDate || !selectedTime) && styles.disabledButton
                        ]}
                        onPress={handleBookAppointment}
                        disabled={!selectedDate || !selectedTime}
                    >
                        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    // Modal for confirmation
    const ConfirmationModal = () => (
        <Modal
            visible={confirmationModal}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setConfirmationModal(false)}
        >
            <View style={styles.confirmationOverlay}>
                <View style={styles.confirmationContent}>
                    <View style={styles.confirmationIcon}>
                        <Ionicons name="checkmark-circle" size={60} color="#2ecc71" />
                    </View>
                    <Text style={styles.confirmationTitle}>Appointment Booked!</Text>
                    <Text style={styles.confirmationText}>
                        Your appointment has been successfully scheduled.
                    </Text>
                    <View style={styles.confirmationDetails}>
                        <Text style={styles.confirmDetailText}>
                            <Text style={styles.confirmDetailLabel}>Hospital: </Text>
                            {selectedHospital?.name}
                        </Text>
                        <Text style={styles.confirmDetailText}>
                            <Text style={styles.confirmDetailLabel}>Service: </Text>
                            {selectedService}
                        </Text>
                        <Text style={styles.confirmDetailText}>
                            <Text style={styles.confirmDetailLabel}>Date & Time: </Text>
                            {selectedDate} at {selectedTime}
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
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
            
            <ServiceSelectionModal />
            <AppointmentBookingModal />
            <ConfirmationModal />
        </View>
    );
};

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
        marginBottom: 12,
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
    bookButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 5,
    },
    bookButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },
    
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2c3e50',
    },
    servicesList: {
        maxHeight: 400,
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    serviceItemText: {
        fontSize: 16,
        color: '#2c3e50',
    },
    
    // Appointment Modal
    appointmentDetails: {
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    appointmentHospital: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: 8,
    },
    appointmentService: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    appointmentServiceText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 8,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 10,
    },
    datesContainer: {
        marginBottom: 20,
    },
    dateItem: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        marginRight: 10,
        minWidth: 120,
        alignItems: 'center',
    },
    selectedDateItem: {
        backgroundColor: '#3498db',
    },
    dateText: {
        fontSize: 14,
        color: '#2c3e50',
    },
    selectedDateText: {
        color: 'white',
        fontWeight: '600',
    },
    timeSlotsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    timeSlot: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        margin: 5,
        minWidth: 80,
        alignItems: 'center',
    },
    selectedTimeSlot: {
        backgroundColor: '#3498db',
    },
    timeSlotText: {
        fontSize: 13,
        color: '#2c3e50',
    },
    selectedTimeSlotText: {
        color: 'white',
        fontWeight: '600',
    },
    confirmButton: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#bdc3c7',
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    
    // Confirmation Modal
    confirmationOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmationContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        width: '80%',
        alignItems: 'center',
    },
    confirmationIcon: {
        marginBottom: 15,
    },
    confirmationTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: 10,
    },
    confirmationText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 15,
    },
    confirmationDetails: {
        width: '100%',
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    confirmDetailText: {
        fontSize: 14,
        color: '#2c3e50',
        marginBottom: 5,
    },
    confirmDetailLabel: {
        fontWeight: '600',
    },
});

export default Home;