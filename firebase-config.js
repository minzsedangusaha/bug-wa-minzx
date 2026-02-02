// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyCOndXM5jrVrmG8_9VYLNOfWRW_NRwe2aQ",
    authDomain: "order-c1983.firebaseapp.com",
    databaseURL: "https://order-c1983-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "order-c1983",
    storageBucket: "order-c1983.firebasestorage.app",
    messagingSenderId: "1011114815070",
    appId: "1:1011114815070:web:4442de5177128fe9ee0ecf"
};

// Generate unique seller ID
function generateSellerId(email, customName = '') {
    if (customName && /^[a-z0-9-]+$/.test(customName)) {
        return customName.toLowerCase();
    }
    
    const base = email.split('@')[0]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .substring(0, 15);
    
    const random = Math.random().toString(36).substring(2, 6);
    return base + random;
}

// Generate order URL
function generateOrderUrl(sellerId) {
    const baseUrl = window.location.origin;
    return `${baseUrl}/order/${sellerId}`;
}

// Get current seller ID from URL
function getSellerIdFromUrl() {
    const path = window.location.pathname;
    const segments = path.split('/');
    
    // Pattern: /order/:sellerId
    if (segments.length >= 3 && segments[1] === 'order') {
        return segments[2];
    }
    
    // Pattern: /:sellerId
    if (segments.length === 2 && segments[1] && !segments[1].includes('.')) {
        return segments[1];
    }
    
    return null;
}

// Validate seller ID format
function isValidSellerId(sellerId) {
    return /^[a-z0-9-]+$/.test(sellerId) && sellerId.length >= 3 && sellerId.length <= 30;
}0
