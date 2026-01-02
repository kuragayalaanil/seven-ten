# 🛍️ SEVEN-TEN  MERN E-Commerce (User + Admin)


## 🎯 Project Goal
This project demonstrates:
- Nested routing using **React Router v6**
- Dynamic product and collection pages
- Cart & order workflows
- Admin CRUD management screens
- Real API integration
- Controlled component safety
- Tailwind-based responsive UI

---

## 👤 User Storefront Features
Users can:

- Browse the homepage with product previews
- Register and login securely
- View collections dynamically (`/collections/:collection`)
- Open product details (`/product/:id`)
- Add/remove items from cart (Optimistic UI updates)
- Checkout items
- View order confirmation and order details
- Access profile and order history (`/my-orders`)

---

## 🛠️ Admin Dashboard Features
Admins can:

- Open admin panel (`/admin`)
- Manage users (`/admin/users`)
- Manage products (`/admin/products`)
- Edit specific product details (`/admin/products/:id/edit`)
- Manage orders (`/admin/orders`)

---

## 🧭 Routing Overview

### 🌐 Public / User Routes
| Path | Component | Purpose |
|------|----------|---------|
| `/` | `UserLayout → Home` | Main storefront |
| `/login` | `LoginPage` | User login |
| `/register` | `RegisterPage` | New user signup |
| `/profile` | `Profile` | User profile |
| `/collections/:collection` | `CollectionPage` | View category products |
| `/product/:id` | `ProductDetails` | View product info |
| `/checkout` | `CheckOut` | Cart checkout |
| `/order-confirmation` | `OrderConfirmationPage` | Order success screen |
| `/order/:id` | `OrderDetailsPage` | Order details |
| `/my-orders` | `MyOrderPage` | Order history |

### 🔐 Admin Routes (Nested)
| Path | Component | Purpose |
|------|----------|---------|
| `/admin` | `AdminLayout → AdminHomePage` | Admin home |
| `/admin/users` | `UserManagement` | Manage users |
| `/admin/products` | `ProductManagement` | Manage products |
| `/admin/products/:id/edit` | `EditProductPage` | Edit a product |
| `/admin/orders` | `OrderManagement` | Manage orders |

---

## 🧱 Layout Architecture

### `UserLayout.jsx`
- Contains common UI for user pages (Navbar/Footer)
- Uses `<Outlet />` to render child pages dynamically

### `AdminLayout.jsx`
- Contains admin sidebar and header
- Uses nested `<Outlet />` for admin screens

---

## 📁 Folder Structure
src/
├── components/
│ ├── Layout/
│ │ └── UserLayout.jsx
│ ├── Admin/
│ │ ├── AdminLayout.jsx
│ │ ├── UserManagement.jsx
│ │ ├── ProductManagement.jsx
│ │ ├── EditProductPage.jsx
│ │ └── OrderManagement.jsx
│ ├── Products/
│ │ └── ProductDetails.jsx
│ └── Cart/
│ └── CheckOut.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── LoginPage.jsx
│ ├── RegisterPage.jsx
│ ├── Profile.jsx
│ ├── CollectionPage.jsx
│ ├── OrderConfirmationPage.jsx
│ ├── OrderDetailsPage.jsx
│ └── MyOrderPage.jsx
│ └── AdminHomePage.jsx
│
├── context/
│ └── ShopContext.jsx
├── App.jsx
└── main.jsx

## ⚙️ Tech Stack
| Layer | Technology |
|-------|------------|
| **Frontend** | React + React Router v6 + Context API |
| **Styling** | Tailwind CSS |
| **Notifications** | Sonner Toaster |
| **State Handling** | Controlled components + optimistic cart updates |
| **Backend** | Node.js + Express.js APIs |
| **Database** | MongoDB (cart, products, users, orders) |

2️⃣ Start Frontend (Vite)
cd frontend
npm install
npm run dev

Frontend will run on:
http://localhost:5173

🤝 Contribute

Feel free to fork, improve, and send a pull request!
Give a ⭐ if this project helped you.
