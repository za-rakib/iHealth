const hospitals = [
    { 
        id: '4', 
        name: 'Regional Medical Center', 
        services: ['Cardiac Stress Test', 'Pulmonary Function Test', 'Sleep Study'],
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop',
        rating: 4.3,
        distance: 2.7
    },
    { 
        id: '5', 
        name: 'Sunrise Community Hospital', 
        services: ['Physical Therapy', 'Occupational Therapy', 'Speech Therapy'],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
        rating: 4.1,
        distance: 3.5
    },
    { 
        id: '6', 
        name: 'Oakwood Medical Center', 
        services: ['Colonoscopy', 'Endoscopy', 'Liver Biopsy'],
        image: 'https://images.unsplash.com/photo-1516549655103-982afbfce8f5?w=800&auto=format&fit=crop',
        rating: 4.7,
        distance: 1.8
    },
    { 
        id: '7', 
        name: 'Riverside Children\'s Hospital', 
        services: ['Pediatric Vaccination', 'Child Wellness Check', 'Neonatal Care'],
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop',
        rating: 4.9,
        distance: 4.2
    },
    { 
        id: '8', 
        name: 'Parkview Surgical Center', 
        services: ['Knee Replacement', 'Cataract Surgery', 'Laparoscopic Surgery'],
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop',
        rating: 4.6,
        distance: 5.3
    },
    { 
        id: '9', 
        name: 'Central Women\'s Clinic', 
        services: ['Mammography', 'Prenatal Ultrasound', 'Gynecological Exam'],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',
        rating: 4.8,
        distance: 2.1
    },
    { 
        id: '10', 
        name: 'Horizon Cancer Institute', 
        services: ['Chemotherapy', 'Radiation Therapy', 'PET Scan'],
        image: 'https://images.unsplash.com/photo-1587351021355-a9562f0fb5fb?w=800&auto=format&fit=crop',
        rating: 4.5,
        distance: 3.9
    },
    { 
        id: '11', 
        name: 'Summit Orthopedic Center', 
        services: ['Bone Density Scan', 'Arthroscopy', 'Spinal Injection'],
        image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&auto=format&fit=crop',
        rating: 4.2,
        distance: 2.3
    },
    { 
        id: '12', 
        name: 'Green Valley Rehabilitation', 
        services: ['Aquatic Therapy', 'Pain Management', 'Sports Injury Recovery'],
        image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&auto=format&fit=crop',
        rating: 4.4,
        distance: 3.1
    },
    { 
        id: '13', 
        name: 'Coastal Cardiology Center', 
        services: ['Echocardiogram', 'Angioplasty', 'Holter Monitoring'],
        image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&auto=format&fit=crop',
        rating: 4.7,
        distance: 6.2
    },
    { 
        id: '14', 
        name: 'Pinecrest Mental Health Clinic', 
        services: ['Psychiatric Evaluation', 'Cognitive Behavioral Therapy', 'Group Therapy'],
        image: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?w=800&auto=format&fit=crop',
        rating: 4.6,
        distance: 1.5
    },
    { 
        id: '15', 
        name: 'Maplewood Fertility Center', 
        services: ['IVF Treatment', 'Semen Analysis', 'Ovulation Tracking'],
        image: 'https://images.unsplash.com/photo-1559000357-f6b52ddfcbba?w=800&auto=format&fit=crop',
        rating: 4.8,
        distance: 5.7
    },
    { 
        id: '16', 
        name: 'Westside Urgent Care', 
        services: ['Flu Testing', 'Minor Injury Treatment', 'Stitch Removal'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
        rating: 4.0,
        distance: 0.8
    },
    { 
        id: '17', 
        name: 'Heritage Senior Care', 
        services: ['Memory Screening', 'Arthritis Management', 'Fall Risk Assessment'],
        image: 'https://images.unsplash.com/photo-1551601651-09492b9786c4?w=800&auto=format&fit=crop',
        rating: 4.5,
        distance: 4.6
    },
    { 
        id: '18', 
        name: 'North Star Neurology', 
        services: ['EEG', 'EMG', 'Nerve Conduction Study'],
        image: 'https://images.unsplash.com/photo-1613843834119-1d1a2817c0d1?w=800&auto=format&fit=crop',
        rating: 4.4,
        distance: 3.8
    },
    { 
        id: '19', 
        name: 'Lakeside Dermatology', 
        services: ['Skin Biopsy', 'Acne Treatment', 'Laser Therapy'],
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop',
        rating: 4.3,
        distance: 2.5
    },
    { 
        id: '20', 
        name: 'Valley View ENT Clinic', 
        services: ['Audiometry Test', 'Nasal Endoscopy', 'Tonsillectomy'],
        image: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9a3be8?w=800&auto=format&fit=crop',
        rating: 4.2,
        distance: 1.9
    },
    { 
        id: '21', 
        name: 'Cedar Infectious Disease Center', 
        services: ['HIV Testing', 'Tuberculosis Screening', 'Travel Vaccination'],
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&auto=format&fit=crop',
        rating: 4.7,
        distance: 7.3
    },
    { 
        id: '22', 
        name: 'Redwood Allergy Clinic', 
        services: ['Patch Testing', 'Immunotherapy', 'Asthma Management'],
        image: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=800&auto=format&fit=crop',
        rating: 4.1,
        distance: 3.6
    },
    { 
        id: '23', 
        name: 'Brookside Diabetes Center', 
        services: ['HbA1c Testing', 'Insulin Pump Training', 'Foot Screening'],
        image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&auto=format&fit=crop',
        rating: 4.5,
        distance: 2.9
    },
    { 
        id: '24', 
        name: 'Harborview Gastroenterology', 
        services: ['Capsule Endoscopy', 'Liver Function Test', 'ERCP'],
        image: 'https://images.unsplash.com/photo-1516549655103-982afbfce8f5?w=800&auto=format&fit=crop',
        rating: 4.3,
        distance: 5.1
    },
    { 
        id: '25', 
        name: 'Mountain Peak Pediatrics', 
        services: ['Newborn Screening', 'ADHD Evaluation', 'Childhood Immunization'],
        image: 'https://images.unsplash.com/photo-1531171673193-f23394ed25bc?w=800&auto=format&fit=crop',
        rating: 4.9,
        distance: 4.4
    },
    { 
        id: '26', 
        name: 'Plaza Vision Center', 
        services: ['Glaucoma Testing', 'LASIK Consultation', 'Contact Lens Fitting'],
        image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop',
        rating: 4.6,
        distance: 1.2
    },
    { 
        id: '27', 
        name: 'Sunnybrook Dialysis Center', 
        services: ['Hemodialysis', 'Peritoneal Dialysis', 'Vascular Access Care'],
        image: 'https://images.unsplash.com/photo-1631217873402-38e4c32e17f4?w=800&auto=format&fit=crop',
        rating: 4.4,
        distance: 8.5
    },
    { 
        id: '28', 
        name: 'Fairview Plastic Surgery', 
        services: ['Botox Injection', 'Laser Resurfacing', 'Rhinoplasty'],
        image: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&auto=format&fit=crop',
        rating: 4.8,
        distance: 3.3
    },
    { 
        id: '29', 
        name: 'Highland Respiratory Institute', 
        services: ['Spirometry', 'Bronchoscopy', 'Oxygen Therapy'],
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop',
        rating: 4.3,
        distance: 4.8
    },
    { 
        id: '30', 
        name: 'Eastside Sports Medicine', 
        services: ['Concussion Testing', 'ACL Rehabilitation', 'Custom Orthotics'],
        image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&auto=format&fit=crop',
        rating: 4.7,
        distance: 2.4
    },
    { 
        id: '31', 
        name: 'Oceanview Rheumatology', 
        services: ['Lupus Screening', 'Joint Aspiration', 'Biologic Therapy'],
        image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop',
        rating: 4.2,
        distance: 6.7
    },
    { 
        id: '32', 
        name: 'Midtown Urology', 
        services: ['PSA Testing', 'Cystoscopy', 'Kidney Stone Removal'],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
        rating: 4.5,
        distance: 3.0
    },
    { 
        id: '33', 
        name: 'Rosewood Endocrinology', 
        services: ['Thyroid Ultrasound', 'Bone Metabolism Test', 'Hormone Replacement'],
        image: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=800&auto=format&fit=crop',
        rating: 4.4,
        distance: 5.5
    },
    { 
        id: '34', 
        name: 'Cloverdale Hematology', 
        services: ['Blood Smear Analysis', 'Coagulation Studies', 'Bone Marrow Biopsy'],
        image: 'https://images.unsplash.com/photo-1579165466991-467ed5e8e20a?w=800&auto=format&fit=crop',
        rating: 4.6,
        distance: 7.1
    },
    { 
        id: '35', 
        name: 'Millennium Fertility Hospital', 
        services: ['Egg Freezing', 'Genetic Screening', 'Donor Insemination'],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',
        rating: 4.9,
        distance: 6.3
    },
    { 
        id: '36', 
        name: 'Pioneer Transplant Center', 
        services: ['Organ Matching', 'Immunosuppressant Therapy', 'Post-Transplant Care'],
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop',
        rating: 4.8,
        distance: 9.2
    },
    { 
        id: '37', 
        name: 'Golden State Bariatrics', 
        services: ['Weight Loss Surgery', 'Nutrition Counseling', 'Body Composition Analysis'],
        image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&auto=format&fit=crop',
        rating: 4.3,
        distance: 4.7
    },
    { 
        id: '38', 
        name: 'Sapphire Eye Institute', 
        services: ['Retinal Imaging', 'Cataract Evaluation', 'Diabetic Eye Exam'],
        image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop',
        rating: 4.7,
        distance: 2.6
    },
    { 
        id: '39', 
        name: 'Royal Palm Cardiology', 
        services: ['Cardiac CT Scan', 'Pacemaker Check', 'Stress Echocardiogram'],
        image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&auto=format&fit=crop',
        rating: 4.6,
        distance: 3.4
    },
    { 
        id: '40', 
        name: 'Emerald Coast Oncology', 
        services: ['Bone Scan', 'Targeted Therapy', 'Brachytherapy'],
        image: 'https://images.unsplash.com/photo-1587351021355-a9562f0fb5fb?w=800&auto=format&fit=crop',
        rating: 4.8,
        distance: 5.9
    },
    { 
        id: '41', 
        name: 'Silver Lake Psychiatry', 
        services: ['Depression Screening', 'Medication Management', 'TMS Therapy'],
        image: 'https://images.unsplash.com/photo-1551601651-09492b9786c4?w=800&auto=format&fit=crop',
        rating: 4.5,
        distance: 2.8
    },
    { 
        id: '42', 
        name: 'Crystal River Dental', 
        services: ['Root Canal', 'Teeth Whitening', 'Dental Implants'],
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop',
        rating: 4.2,
        distance: 1.7
    },
    { 
        id: '43', 
        name: 'Majestic Holistic Health', 
        services: ['Acupuncture', 'Chiropractic Adjustment', 'Nutritional IV Therapy'],
        image: 'https://images.unsplash.com/photo-1573495804664-b1c0849525af?w=800&auto=format&fit=crop',
        rating: 4.1,
        distance: 3.2
    }
];

export default hospitals;