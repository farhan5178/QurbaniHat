"use client";

import { Button, Card, CardBody, CardFooter, Image as HeroImage } from "@heroui/react";
import NextLink from "next/link";
import animals from "../data/animals.json";

export default function Home() {
  const featuredAnimals = animals.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-12 w-full">
      <section className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mt-6">
        <HeroImage
          removeWrapper
          alt="Hero Banner"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1600"
        />
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find the Perfect Animal for Qurbani
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Browse through our wide selection of premium cows and goats from trusted sellers across the country.
          </p>
          <Button as={NextLink} href="/animals" color="success" size="lg" radius="full" className="font-semibold px-8 text-lg">
            Browse Animals
          </Button>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Animals</h2>
          <Button as={NextLink} href="/animals" variant="light" color="success" className="font-semibold">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAnimals.map((animal) => (
            <Card shadow="sm" key={animal.id} isPressable>
              <CardBody className="overflow-visible p-0">
                <HeroImage
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={animal.name}
                  className="w-full object-cover h-[200px]"
                  src={animal.image}
                />
              </CardBody>
              <CardFooter className="text-small justify-between flex-col items-start p-4 gap-2">
                <div className="flex justify-between w-full">
                  <b className="text-lg">{animal.name}</b>
                  <p className="text-success font-semibold text-lg font-mono">৳{animal.price.toLocaleString()}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{animal.breed}</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{animal.weight}kg</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{animal.location}</span>
                </div>
              </CardFooter>
            </Card>
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
    </div>
  );
}
