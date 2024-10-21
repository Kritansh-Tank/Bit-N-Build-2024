import React, { useState } from "react";
import { Home, Star, Award, Leaf } from "lucide-react";

const accommodations = [
  {
    id: 1,
    name: "Ananda in the Himalayas",
    location: "Rishikesh, Uttarakhand",
    rating: 4.8,
    reviews:
      "A luxury spa resort set in a tranquil environment, Ananda focuses on wellness and sustainability, using natural and locally sourced materials.",
    certifications: ["Green Key", "LEED"],
    carbonOffset: 50,
    website: "https://www.anandaspa.com/",
  },
  {
    id: 2,
    name: "Coconut Lagoon",
    location: "Kerala (Backwaters)",
    rating: 4.9,
    reviews:
      "An eco-resort located on the banks of Vembanad Lake, Coconut Lagoon utilizes traditional architecture and practices sustainable tourism, offering guests a chance to experience local culture.",
    certifications: ["Green Globe", "EarthCheck"],
    carbonOffset: 75,
    website: "https://www.cghearth.com/coconut-lagoon",
  },
  {
    id: 3,
    name: "The Grand Dragon Ladakh",
    location: "Leh-Ladakh",
    rating: 4.7,
    reviews:
      "This hotel incorporates local culture and sustainable practices, including energy-efficient systems and supporting local artisans.",
    certifications: ["EU Ecolabel", "ISO 14001"],
    carbonOffset: 60,
    website: "https://www.thegranddragonladakh.com/",
  },
  {
    id: 4,
    name: "Dharamshala Eco Village",
    location: "Auroville, Tamil Nadu",
    rating: 4.6,
    reviews:
      "An eco-friendly retreat that promotes sustainable living practices and offers various accommodations in a natural setting.",
    certifications: ["Green Key", "BREEAM"],
    carbonOffset: 40,
    website: "https://auroville.org/",
  },
  {
    id: 5,
    name: "The Golden Tusk",
    location: "Jim Corbett National Park, Uttarakhand",
    rating: 4.8,
    reviews:
      "An eco-friendly resort designed to blend with the natural surroundings, focusing on conservation and sustainable tourism practices while offering luxury amenities.",
    certifications: ["Rainforest Alliance", "CST"],
    carbonOffset: 80,
    website: "https://www.thegoldentusk.com/",
  },
];

const EcoAccommodations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAccommodations = accommodations.filter(
    (acc) =>
      acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="accommodations" className="container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
        Eco-Conscious Accommodation Finder
      </h2>
      <div className="mb-6 px-4">
        <input
          type="text"
          placeholder="Search accommodations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {filteredAccommodations.map((accommodation) => (
          <div
            key={accommodation.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <Home className="text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">{accommodation.name}</h3>
            </div>
            <p className="text-gray-600 mb-2">{accommodation.location}</p>
            <div className="flex flex-col items-start mb-2">
              <div className="flex items-center mb-1">
                <Star className="text-yellow-400 mr-1" />
                <span>{accommodation.rating}</span>
              </div>
              <span>{accommodation.reviews}</span>
            </div>
            <div className="mb-2">
              <strong>Certifications:</strong>
              <div className="flex flex-wrap">
                {accommodation.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                  >
                    <Award className="inline-block w-3 h-3 mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center text-green-700">
              <Leaf className="mr-1" />
              <span>Carbon Offset: {accommodation.carbonOffset} kg CO2</span>
            </div>
            <div className="flex items-center text-gray-800 mt-4">
              <span>Official Website: </span>&nbsp;
              <a
                href={accommodation.website}
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {accommodation.website}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoAccommodations;
