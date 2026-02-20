// 1. Sample Product Data (Agar aapki API se data aa raha hai toh use rehne dena)
const products = [
    { id: 1, name: "Premium Watch", price: 4999, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Wireless Headphones", price: 2999, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Smart Phone", price: 15999, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Leather Wallet", price: 999, image: "https://via.placeholder.com/200" }
];

// 2. Page Load hone par Products Load karna
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateProfileUI(); // Check profile status on load
});

// 3. Products ko HTML mein dikhane ka function
function displayProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card" style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px; display: inline-block; width: 200px; text-align: center;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%;">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="handleBuyNow(${product.id})" style="background: #e91e63; color: white; border: none; padding: 10px; cursor: pointer; border-radius: 4px;">Buy Now</button>
            <button onclick="addToCart(${product.id})" style="background: #333; color: white; border: none; padding: 10px; margin-top: 5px; cursor: pointer; border-radius: 4px;">Add to Cart</button>
        </div>
    `).join('');
}

// 4. MAIN LOGIC: Buy Now click karne par Login Check
function handleBuyNow(productId) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        // Agar login hai toh seedha checkout par bhej do
        alert("Proceeding to checkout for item " + productId);
        window.location.href = "checkout.html";
    } else {
        // Agar login nahi hai, toh alert dikhao aur login page par bhej do
        alert("Zaroori: Khareedne ke liye pehle Login karein.");
        
        // Login ke baad wapas checkout par aane ke liye save karein
        localStorage.setItem('redirectAfterLogin', 'checkout.html');
        window.location.href = "login.html";
    }
}

// 5. Add to Cart Function (Isme login ki zaroorat nahi hai, sirf cart me add hoga)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Product Cart mein add ho gaya hai!");
}

// 6. Navbar UI update (Login vs Profile)
function updateProfileUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const profileLink = document.getElementById('profile-link');
    
    if (profileLink) {
        if (isLoggedIn === 'true') {
            profileLink.innerHTML = '<i class="fas fa-user-check"></i> My Profile';
            profileLink.href = "profile-details.html";
        } else {
            profileLink.innerHTML = '<i class="fas fa-user"></i> My Profile';
            profileLink.href = "login.html";
        }
    }
}

// 7. Logout function (Agar profile page par use karna ho)
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = "index.html";
}
