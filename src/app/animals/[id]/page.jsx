"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button, Card } from "@heroui/react";
import NextLink from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import animalsData from "../../../data/animals.json";

export default function AnimalDetailsPage() {
  const params = useParams();
  const animalId = parseInt(params.id);
  const animal = animalsData.find((a) => a.id === animalId);

  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  if (!animal) {
    return <div className="text-center py-20 text-xl font-bold">Animal not found!</div>;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: "", email: "", phone: "", address: "" });
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
    <div className="flex flex-col w-full mt-6 pb-12 relative animate__animated animate__fadeIn">
      
      {showToast && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-appearance-in">
          <span className="font-bold">✓</span> Booking Successful!
        </div>
      )}

      <NextLink href="/animals" className="text-green-700 font-medium hover:underline mb-6 inline-block">
        ← Back to All Animals
      </NextLink>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <div className="flex flex-col gap-6">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold text-gray-900">{animal.name}</h1>
              <span className="text-3xl font-mono font-bold text-success">৳{animal.price.toLocaleString()}</span>
            </div>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">{animal.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500">Breed</p>
                <p className="font-semibold text-gray-900">{animal.breed}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-semibold text-gray-900">{animal.weight} kg</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500">Age</p>
                <p className="font-semibold text-gray-900">{animal.age} Years</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-900">{animal.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className="p-6 border border-gray-100 shadow-sm" radius="lg">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book this Animal</h2>
              
                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                    <textarea 
                      required 
                      rows="3"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3 outline-none resize-none"
                    ></textarea>
                  </div>
                  <Button type="submit" color="success" size="lg" className="w-full font-bold mt-2 text-white">
                    Confirm Booking
                  </Button>
                </form>
            </div>
          </Card>
        </div>
        
      </div>
    </div>
    </ProtectedRoute>
  );
}
