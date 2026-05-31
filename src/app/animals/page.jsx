"use client";

import { useState } from "react";
import { Button, Card, CardBody, CardFooter, Image as HeroImage, Select, SelectItem } from "@heroui/react";
import NextLink from "next/link";
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50 p-6 rounded-2xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Animals</h1>
          <p className="text-gray-600 mt-2">Browse and find the perfect animal for Qurbani.</p>
        </div>
        
        <Select 
          label="Sort by Price" 
          className="max-w-xs w-full sm:w-[200px]" 
          variant="faded"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <SelectItem key="asc" value="asc">
            Price: Low to High
          </SelectItem>
          <SelectItem key="desc" value="desc">
            Price: High to Low
          </SelectItem>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedAnimals.map((animal) => (
          <Card shadow="sm" key={animal.id} className="w-full">
            <CardBody className="overflow-visible p-0">
              <HeroImage
                shadow="sm"
                radius="none"
                width="100%"
                alt={animal.name}
                className="w-full object-cover h-[220px]"
                src={animal.image}
              />
            </CardBody>
            <CardFooter className="flex-col items-start p-5 gap-4">
              <div className="flex justify-between w-full items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{animal.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{animal.breed}</p>
                </div>
                <p className="text-success font-bold text-xl font-mono">৳{animal.price.toLocaleString()}</p>
              </div>
              
              <div className="flex gap-2 flex-wrap w-full border-t border-gray-100 pt-3">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{animal.weight}kg</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{animal.age} Years</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{animal.location}</span>
              </div>

              <Button 
                as={NextLink} 
                href={`/animals/${animal.id}`} 
                color="success" 
                className="w-full font-semibold mt-2"
                radius="md"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
