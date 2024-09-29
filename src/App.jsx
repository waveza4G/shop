import { useState } from 'react';
import { products } from './data';
import { getImageUrl } from './utils';
import 'tailwindcss/tailwind.css'; // Use Tailwind CSS

export default function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const categories = [
    { id: 1, name: 'พวงกุญแจแมว' },
    { id: 2, name: 'พวงกุญแจปลา' },
    { id: 3, name: 'พวงกุญแจหมา' },
    { id: 4, name: 'พวงกุญแจลิง' },
    { id: 5, name: 'พวงกุญแจกบ' },
    { id: 6, name: 'พวกกุญแจการ์ตูน' },
    { id: 7, name: 'พวงกุญแจคู่รัก' }
  ];

  // Add product to cart
  function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Remove product from cart
  function removeFromCart(productId) {
    setCart(cart.filter(item => item.id !== productId));
  }

  // Increase quantity
  function increaseQuantity(productId) {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }

  // Decrease quantity
  function decreaseQuantity(productId) {
    setCart(cart.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    ));
  }

  // Apply discount code
  function applyDiscount(code) {
    if (code === 'DISCOUNT10') {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  }

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discount + 100; // Add shipping

    return (
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-8">
        <p></p>
          <h1 className="text-5xl font-bold text-pink-600">ร้านขายพวงกุญแจสารพัดนึก</h1>
        </header>

        <div className="flex">
          {/* Categories Sidebar */}
      
          

          {/* Product Grid */}
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 flex-grow ml-6 mt-12">
            
    {products.map(product => (
      <div
        key={product.id}
        className="product-card border border-pink-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <img
          src={getImageUrl(product)}
          alt={product.name}
          className="product-image w-full h-56 object-cover"
        />
        <div className="p-4">
          <h2 className="product-name text-lg font-semibold text-pink-400">
            {product.name}
          </h2>
          <p className="product-price text-sm text-white-500">
            Price: {product.price} THB
          </p>
          <button
            className="button bg-pink-500 text-white py-2 px-4 mt-2 rounded hover:bg-pink-600 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
        
      </div>
      
    ))}
  </main>

    
          

        </div>  
        {/* Shopping Cart */}
          {/* Shopping Cart */}
          <aside className="shopping-cart w-80 bg-white shadow-md rounded-lg p-4 ml-6 sticky top-20">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Shopping Cart</h2>
              {cart.length > 0 ? (
                <div className="space-y-4">
                  <ul className="space-y-4">
                  {cart.map(item => (
                  <li
                    key={item.id}
                    className="cart-item flex justify-between items-center p-4 border rounded-lg shadow-sm"
                  >
                    <img
                      src={item.image} // เพิ่มแสดงรูปภาพสินค้า
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-pink-400">
                        {item.name}
                      </h3>
                      <p>{item.quantity} pcs</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>{item.price * item.quantity} THB</span>
                      <div className="flex space-x-2">
                        <button
                          className="bg-black-800 px-2 py-1 rounded"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                        <button
                          className="bg-black-800 px-2 py-1 rounded"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                      </div>
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}

                  </ul>
                  <div className="cart-summary p-4 bg-gray-50 border rounded-lg shadow-md mt-4">
                    <input
                      type="text"
                      placeholder="Discount code"
                      className="border p-2 rounded w-full mb-4"
                      onBlur={(e) => applyDiscount(e.target.value)}
                    />
                    <p>Subtotal: {subtotal} THB</p>
                    <p>Discount: {discount} THB</p>
                    <p>Shipping: 100 THB</p>
                    <p className="total text-xl font-bold text-pink-400">
                      Total: {total} THB
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-center text-lg">Your cart is empty</p>
              )}
            </aside>
      </div>
    );
    
  }
