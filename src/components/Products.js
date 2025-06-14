import React from 'react';
import img1 from '../assets/1.svg';
import img2 from '../assets/2.svg';
import img3 from '../assets/3.svg';
import img4 from '../assets/4.svg';
import img5 from '../assets/5.svg';
import img6 from '../assets/6.svg';
import img7 from '../assets/7.svg';
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1,999",
    image: img1
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: "₹2,499",
    image: img2
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "₹3,999",
    image:  img3
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: "₹999",
    image:  img4
  },
];

 const categories = [
    { title: 'Smart Watch', img:  img1 },
    { title: 'Smart Watch', img:  img2 },
    { title: 'Smart Watch', img:  img3 },
    { title: 'Smart Watch', img:  img4 },
    { title: 'Smart Watch', img:  img5 },
    { title: 'Smart Watch', img:  img6 },
  ];
 

const Products = () => {
  return (
    <>
    <div className="bg-white py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
            <p className="text-lg text-purple-600 mt-2">{product.price}</p>
            <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="px-4 md:px-20 py-10">
      {/* Banner */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg overflow-hidden shadow-md">
  {/* Smart Watch Card */}
  <div className="flex items-center justify-between bg-[#f5f7fa] p-8">
    <div className="flex-1">
      <p className="text-xs text-gray-400 mb-1">BIG SCREEN</p>
      <h2 className="text-2xl font-bold text-black leading-tight">SMART WATCH<br />SERIES 7</h2>
      <p className="text-indigo-600 mt-3 font-semibold text-lg cursor-pointer underline">$35.00</p>
    </div>
    <img src={img6} alt="Smart Watch" className="h-32 ml-6" />
  </div>

  {/* Studio Display Card */}
  <div className="flex items-center justify-between bg-[#f5f7fa] p-8">
    <div className="flex-1">
      <p className="text-xs text-gray-400 mb-1">STUDIO DISPLAY</p>
      <h2 className="text-2xl font-bold text-black leading-tight">600 NITS OF<br />BRIGHTNS</h2>
      <p className="text-indigo-600 mt-3 font-semibold text-lg cursor-pointer underline">$999.00</p>
    </div>
    <img src={img7} alt="Studio Display" className="h-32 ml-6" />
  </div>
</div>

     
      <h2 className="text-2xl font-bold my-10">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
        {categories.map((cat, idx) => (
          <div key={idx} className="shadow p-4 rounded hover:shadow-md">
            <img src={cat.img} alt={cat.title} className="mx-auto h-20" />
            <p className="mt-2 text-sm font-medium">{cat.title}</p>
          </div>
        ))}
      </div>

      {/* Promo Banner */}
      <div className="mt-10 bg-gradient-to-r from-indigo-800 to-purple-700 text-white p-6 rounded-lg flex items-center justify-between">
        <p className="text-lg font-semibold">Get every sunday 40% discount & free delivery on order above $200 with any products!</p>
        <img src={img4} alt="phones" className="h-20 hidden md:block" />
      </div>
    </div>
        </>
  );
};

export default Products;
