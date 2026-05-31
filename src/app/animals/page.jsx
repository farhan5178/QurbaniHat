"use client";

import { useState } from "react";
import Link from "next/link";
import animalsData from "../../data/animals.json";

export default function AnimalsPage() {
  const [sortOrder, setSortOrder] = useState("");

  const sortedAnimals = [...animalsData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-8 w-full mt-6 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-base-200/50 p-6 rounded-2xl border border-base-200">
        <div className="w-full sm:w-auto">
          <h1 className="text-3xl font-bold text-base-content">All Animals</h1>
          <p className="text-base-content/70 mt-2">Browse and find the perfect animal for Qurbani.</p>
        </div>
        
        <div className="w-full sm:w-auto flex justify-start sm:justify-end items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-base-content whitespace-nowrap">Sort by:</label>
          <select 
            id="sort"
            className="select select-bordered select-sm sm:w-[200px] w-full"
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="">Featured</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedAnimals.map((animal) => (
          <div key={animal.id} className="card bg-base-100 shadow-sm hover:shadow-md transition-all border border-base-200 h-full flex flex-col">
            <figure className="w-full shrink-0">
              <img
                alt={animal.name}
                className="w-full object-cover h-[220px]"
                src={animal.image}
              />
            </figure>
            <div className="card-body p-5 gap-4 flex-grow flex flex-col">
              <div className="flex justify-between w-full items-start">
                <div>
                  <h3 className="card-title text-xl mb-1">{animal.name}</h3>
                  <p className="text-sm text-base-content/70 m-0">{animal.breed}</p>
                </div>
                <p className="text-success font-bold text-xl font-mono text-right m-0">৳{animal.price.toLocaleString()}</p>
              </div>
              
              <div className="flex gap-2 flex-wrap w-full border-t border-base-200 mt-2 pt-4">
                <span className="badge badge-ghost font-medium px-3 py-3">{animal.weight}kg</span>
                <span className="badge badge-ghost font-medium px-3 py-3">{animal.age} Years</span>
                <span className="badge badge-ghost font-medium px-3 py-3">{animal.location}</span>
              </div>

              <div className="card-actions mt-auto w-full pt-2">
                <Link 
                  href={`/animals/${animal.id}`} 
                  className="btn btn-success w-full font-bold text-white rounded-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
