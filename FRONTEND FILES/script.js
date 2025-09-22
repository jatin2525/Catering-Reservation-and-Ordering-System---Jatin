// Sample food data - Adding 20 menu items
const products = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "A rich, flavorful chicken dish cooked in a creamy tomato sauce.",
    price: 12.99,
    image: "images/Butter Chicken.jpg",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Grilled paneer marinated with spices, a vegetarian delight.",
    price: 8.99,
    image: "images/paneer-tikka.jpg",
  },
  {
    id: 3,
    name: "Biryani",
    description: "A fragrant rice dish with spices and marinated chicken or mutton.",
    price: 10.99,
    image: "images/biryani.jpg",
  },
  {
    id: 4,
    name: "Samosa",
    description: "Crispy pastry filled with spicy potatoes and peas.",
    price: 4.99,
    image: "images/samosa.jpg",
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    description: "Juicy chicken cooked in a traditional clay oven with aromatic spices.",
    price: 15.99,
    image: "images/Tandoori Chicken.jpg",
  },
  {
    id: 6,
    name: "Aloo Paratha",
    description: "A stuffed flatbread served with yogurt and pickle.",
    price: 5.99,
    image: "images/Aloo Paratha.jpg",
  },
  {
    id: 7,
    name: "Chole Bhature",
    description: "Spicy chickpeas served with deep-fried bread.",
    price: 7.99,
    image: "images/Chole Bhature.jpg",
  },
  {
    id: 8,
    name: "Dosa",
    description: "Crispy rice pancakes served with chutney and sambar.",
    price: 6.99,
    image: "images/dosa.jpg",
  },
  {
    id: 9,
    name: "Vada Pav",
    description: "A spicy potato fritter sandwich, a Mumbai street food classic.",
    price: 3.99,
    image: "images/vada-pav.jpg",
  },
  {
    id: 10,
    name: "Pav Bhaji",
    description: "A spiced vegetable mash served with buttered pav buns.",
    price: 6.49,
    image: "images/pav-bhaji.jpg",
  },
  {
    id: 11,
    name: "Lassi",
    description: "A refreshing yogurt-based drink, sweet or salty.",
    price: 2.99,
    image: "images/lassi.jpg",
  },
  {
    id: 12,
    name: "Momos",
    description: "Steamed dumplings filled with spicy vegetables or meat.",
    price: 4.49,
    image: "images/momos.jpg",
  },
  {
    id: 13,
    name: "Pani Puri",
    description: "Crispy puris filled with spicy tamarind water, a popular snack.",
    price: 3.49,
    image: "images/pani-puri.jpg",
  },
  {
    id: 14,
    name: "Gulab Jamun",
    description: "Deep-fried dough balls soaked in sugary syrup, a sweet treat.",
    price: 2.49,
    image: "images/gulab-jamun.jpg",
  },
  {
    id: 15,
    name: "Rogan Josh",
    description: "Tender lamb cooked in a rich, aromatic gravy.",
    price: 14.99,
    image: "images/rogan-josh.jpg",
  },
  {
    id: 16,
    name: "Baingan Bharta",
    description: "Smoky eggplant mashed and cooked with spices.",
    price: 8.99,
    image: "images/baingan-bharta.jpg",
  },
  {
    id: 17,
    name: "Mutter Paneer",
    description: "Cottage cheese cooked with peas in a spicy gravy.",
    price: 9.99,
    image: "images/mutter-paneer.jpg",
  },
  {
    id: 18,
    name: "Tandoori Roti",
    description: "Traditional flatbread cooked in a tandoor.",
    price: 1.99,
    image: "images/tandoori-roti.jpg",
  },
  {
    id: 19,
    name: "Kebabs",
    description: "Grilled skewers of marinated meat or vegetables.",
    price: 11.99,
    image: "images/kebabs.jpg",
  },
  {
    id: 20,
    name: "Naan",
    description: "Soft, leavened flatbread, a perfect side dish for curries.",
    price: 2.49,
    image: "images/naan.jpg",
  },
];

// Function to load menu items dynamically
function loadMenu() {
  const menuItemsContainer = document.getElementById("menu-items");

  if (!menuItemsContainer) {
    console.log('menu-items container not found');
    return;
  }

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("menu-item");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    menuItemsContainer.appendChild(productElement);
  });
}

let cart = []; // Global cart array

// Add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  alert(`${product.name} added to cart!`);
  showCart();
}

// Show cart items
function showCart() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="cart-item-details">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
              <h4>${item.name}</h4>
              <p>$${item.price}</p>
          </div>
      </div>
      <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });
}

// Remove from cart
function removeFromCart(productId) {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    showCart();
  }
}

// Handle order placement
document.addEventListener("DOMContentLoaded", function () {
  const placeOrderButton = document.getElementById("place-order");

  if (placeOrderButton) {
    placeOrderButton.addEventListener("click", function () {
      const orderAnimation = document.getElementById("order-animation");

      if (cart.length === 0) {
        alert("Your cart is empty! Please add items before placing an order.");
        return;
      }

      if (orderAnimation) {
        orderAnimation.classList.remove("hidden");

        // ✅ Save order to Firebase with Order ID
        const ordersRef = firebase.database().ref("orders");
        const newOrderRef = ordersRef.push();

        const orderId = newOrderRef.key; // Unique Firebase key

        const orderData = {
          orderId: orderId, // ✅ store orderId inside data
          items: cart,
          total: cart.reduce((sum, item) => sum + item.price, 0),
          status: "received", // default status
          timestamp: new Date().toISOString()
        };

        newOrderRef.set(orderData)
          .then(() => {
            console.log("Order saved:", orderData);
          })
          .catch((error) => {
            console.error("Error saving order:", error);
          });

        setTimeout(function () {
          orderAnimation.classList.add("hidden");

          // ✅ Show popup with Order ID
          Swal.fire({
            title: '🎉 Order Placed!',
            html: `
              <p>Thank you for your order. We are preparing your delicious food!</p>
              <p><b>Your Order ID:</b> <span style="color:#ff5722">${orderId}</span></p>
              <p style="font-size:12px;color:#555;">Use this ID to track your order.</p>
            `,
            icon: 'success',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#ff5722',
            background: '#fff',
            color: '#333',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

          cart = [];
          showCart();
        }, 3000);
      }
    });
  }
});

// Load menu
window.onload = loadMenu;

// Firebase Config
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAr7p_8Ab7b4C9Cw3zog5XXN-y2lNzxnYE",
  authDomain: "catering-reservation-and-order.firebaseapp.com",
  databaseURL: "https://catering-reservation-and-order-default-rtdb.firebaseio.com",
  projectId: "catering-reservation-and-order",
  storageBucket: "catering-reservation-and-order.appspot.com", // <-- fixed here
  messagingSenderId: "525003731481",
  appId: "1:525003731481:web:46e22e16cd3d3d05a5f088",
  measurementId: "G-P8Z7GGMPHG"
};

firebase.initializeApp(firebaseConfig);



// -------------------- Order Tracking --------------------
const trackBtn = document.getElementById("track-order-btn");
const orderInput = document.getElementById("order-id-input");
const orderStatusDiv = document.getElementById("order-status");
const orderSummaryDiv = document.getElementById("order-summary");

if (trackBtn) {
  trackBtn.addEventListener("click", () => {
    const orderId = orderInput.value.trim();
    if (!orderId) {
      Swal.fire('Enter Order ID', '', 'warning');
      return;
    }

    // ✅ Directly check by orderId (Firebase push key)
    firebase.database().ref("orders/" + orderId).get()
      .then(snapshot => {
        if (snapshot.exists()) {
          const order = snapshot.val();
          updateProgress(order.status || "received");
          showSummary(order);
          orderStatusDiv.classList.remove("hidden");
        } else {
          Swal.fire('Order not found', '', 'error');
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire('Error fetching order', '', 'error');
      });
  });
}


function updateProgress(status) {
  const steps = ["received", "preparing", "on-the-way", "delivered"];
  steps.forEach(step => {
    const el = document.getElementById(`step-${step}`);
    if (!el) return;
    if (steps.indexOf(step) <= steps.indexOf(status)) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function showSummary(order) {
  let html = `<h4>Order Summary:</h4><ul>`;
  order.items.forEach(item => {
    html += `<li>${item.name} x${item.quantity || 1} - $${item.price}</li>`;
  });
  html += `</ul><p>Total: $${order.total.toFixed(2)}</p>`;
  orderSummaryDiv.innerHTML = html;
}
