"use client";

import Link from "next/link";
import animals from "../data/animals.json";

export default function Home() {
  const featuredAnimals = animals.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-12 w-full">
      <section className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mt-6 animate__animated animate__fadeInDown">
        <img
          alt="Hero Banner"
          className="z-0 w-full h-full object-cover absolute inset-0"
          src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1600"
        />
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find the Perfect Animal for Qurbani
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Browse through our wide selection of premium cows and goats from trusted sellers across the country.
          </p>
          <Link href="/animals" className="btn btn-success rounded-full font-semibold px-8 text-lg text-white">
            Browse Animals
          </Link>
        </div>
      </section>

      <section className="animate__animated animate__fadeInUp animate__delay-1s">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Animals</h2>
          <Link href="/animals" className="btn btn-ghost text-success font-semibold">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAnimals.map((animal) => (
            <Link href={`/animals/${animal.id}`} key={animal.id} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow border border-base-200 h-full flex flex-col">
              <figure className="w-full shrink-0">
                <img
                  alt={animal.name}
                  className="w-full object-cover h-[200px]"
                  src={animal.image}
                />
              </figure>
              <div className="card-body p-4 gap-2 flex-grow flex flex-col">
                <div className="flex justify-between w-full items-start">
                  <h2 className="card-title text-lg mb-0">{animal.name}</h2>
                  <p className="text-success font-semibold text-lg font-mono text-right m-0">৳{animal.price.toLocaleString()}</p>
                </div>
                <div className="flex gap-2 flex-wrap mt-auto pt-2">
                  <span className="badge badge-ghost text-xs">{animal.breed}</span>
                  <span className="badge badge-ghost text-xs">{animal.weight}kg</span>
                  <span className="badge badge-ghost text-xs">{animal.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-green-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Qurbani Tips</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-success font-bold">✓</span>
              Check the teeth of the animal to verify its age properly.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-success font-bold">✓</span>
              Ensure the animal has no physical defects or sickness.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-success font-bold">✓</span>
              Look for an active animal rather than a lazy or lethargic one.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-success font-bold">✓</span>
              Always verify seller information before making a booking.
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Breeds</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
              <h3 className="font-bold text-gray-800">Local Deshi</h3>
              <p className="text-sm text-gray-500 mt-1">Highly demanded</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
              <h3 className="font-bold text-gray-800">Sahiwal</h3>
              <p className="text-sm text-gray-500 mt-1">Premium quality</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
              <h3 className="font-bold text-gray-800">Black Bengal</h3>
              <p className="text-sm text-gray-500 mt-1">Best for small families</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
              <h3 className="font-bold text-gray-800">Brahma</h3>
              <p className="text-sm text-gray-500 mt-1">Maximum meat yield</p>
            </div>
          </div>
        </section>
      </div>

      {/* Extra Section: Why Choose Us */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-3xl mt-8 border border-base-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">We provide the most secure, reliable, and convenient platform for purchasing your Qurbani animals online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 text-success text-2xl">🛡️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Verified Sellers</h3>
            <p className="text-gray-600 text-sm">Every seller on our platform undergoes a strict verification process to ensure transparency and trust.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">🚚</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Home Delivery</h3>
            <p className="text-gray-600 text-sm">Skip the hassle of transportation. Get your chosen animal delivered safely to your doorstep.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary text-2xl">💯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Health Guarantee</h3>
            <p className="text-gray-600 text-sm">We ensure all animals are healthy, well-fed, and meet the necessary standards for Qurbani.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
