import React, { useState } from "react";

interface DirectionsProps {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}

const Directions: React.FC<DirectionsProps> = ({ setOutput }) => {
  const [startAddr, setStartAddr] = useState("");
  const [endAddr, setEndAddr] = useState("");

  const extractTravelInfo = (data: any) => {
    return data
      .map((item: any) => {
        if (item.travel_mode === "Transit") {
          return {
            travel_mode: item.travel_mode,
            formatted_distance: item.formatted_distance,
          };
        } else if (item.travel_mode === "Driving") {
          return {
            travel_mode: item.travel_mode,
            formatted_distance: item.formatted_distance,
          };
        } else if (item.travel_mode === "Flight") {
          return {
            travel_mode: item.travel_mode,
            formatted_nonstop_duration: item.flight?.formatted_nonstop_duration,
            formatted_connecting_duration:
              item.flight?.formatted_connecting_duration,
          };
        }
        return null;
      })
      .filter(Boolean);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/getDirections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ startAddr, endAddr }),
      });

      if (response.ok) {
        const data = await response.json();
        const travelInfo = extractTravelInfo(data);
        setOutput(JSON.stringify(travelInfo, null, 2));
      } else {
        setOutput("Error fetching directions.");
      }
    } catch (error) {
      setOutput("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mb-6 w-full">
        <input
          type="text"
          placeholder="From"
          value={startAddr}
          onChange={(e) => setStartAddr(e.target.value)}
          required
          className="p-2 border rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="To"
          value={endAddr}
          onChange={(e) => setEndAddr(e.target.value)}
          required
          className="p-2 border rounded w-full md:w-1/3 mt-4 md:mt-0"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Get Details
        </button>
      </div>
    </form>
  );
};

export default Directions;
