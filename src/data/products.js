// src/data/products.js
// Shared mock product data used across Home, Inventory, etc.

export const categories = ["All", "Snacks", "Drinks", "Canned", "Others"];

export const products = [
  {
    id: 1,
    name: "Coke Mismo 120 ML",
    category: "Drinks",
    price: 25.0,
    stock: 24,
    restockThreshold: 5,
    image: "🥤",
  },
  {
    id: 2,
    name: "Powdered Juice",
    category: "Drinks",
    price: 20.0,
    stock: 18,
    restockThreshold: 5,
    image: "🧃",
  },
  {
    id: 3,
    name: "Pancit Canton",
    category: "Others",
    price: 10.0,
    stock: 30,
    restockThreshold: 5,
    image: "🍜",
  },
  {
    id: 4,
    name: "Mega Sardines",
    category: "Canned",
    price: 35.0,
    stock: 12,
    restockThreshold: 5,
    image: "🥫",
  },
  {
    id: 5,
    name: "Eggs",
    category: "Others",
    price: 8.0,
    stock: 2,
    restockThreshold: 5,
    image: "🥚",
  },
  {
    id: 6,
    name: "Coffee",
    category: "Drinks",
    price: 12.0,
    stock: 5,
    restockThreshold: 5,
    image: "☕",
  },
];

// Helper: items at or below their restock threshold
export const getLowStockProducts = () =>
  products.filter((p) => p.stock <= p.restockThreshold);

export const LOW_STOCK_THRESHOLD = 5;