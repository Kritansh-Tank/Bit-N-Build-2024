import React, { useState, useEffect } from "react";
import { Train, Car, Bus } from "lucide-react";
import Directions from "./Directions"; // Import the Directions component

const ImpactCalculator = () => {
  const [distance, setDistance] = useState("");
  const [transport, setTransport] = useState("car");
  const [impact, setImpact] = useState(0);
  const [alternatives, setAlternatives] = useState<
    { mode: string; impact: number; icon: React.ComponentType<any> }[]
  >([]);
  const [output, setOutput] = useState("");

  useEffect(() => {
    // Calculate and set the mean distance when 'output' changes
    if (output) {
      const distances = JSON.parse(output)
        .filter((item: any) => item.formatted_distance) // Filter out items with distance
        .map((item: any) =>
          parseFloat(item.formatted_distance.replace(/,/g, "").split(" ")[0])
        ); // Extract numeric part

      const meanDistance =
        distances.length > 0
          ? (
              distances.reduce((a: number, b: number) => a + b, 0) /
              distances.length
            ).toFixed(2)
          : "0";

      setDistance(meanDistance); // Safely set the distance here
    }
  }, [output]); // Re-run this logic whenever 'output' changes

  const calculateImpact = () => {
    const distanceNum = parseFloat(distance);
    if (isNaN(distanceNum)) return;

    let factor;
    switch (transport) {
      case "car":
        factor = 0.2;
        break;
      case "bus":
        factor = 0.1;
        break;
      case "train":
        factor = 0.05;
        break;
      case "plane":
        factor = 0.3;
        break;
      default:
        factor = 0;
    }

    const calculatedImpact = distanceNum * factor;
    setImpact(calculatedImpact);

    // Generate greener alternatives
    const alternativeOptions = [
      { mode: "Train", impact: distanceNum * 0.05, icon: Train },
      { mode: "EV", impact: distanceNum * 0.1, icon: Car },
      { mode: "Bus", impact: distanceNum * 0.1, icon: Bus },
    ].filter((alt) => alt.mode.toLowerCase() !== transport);

    setAlternatives(alternativeOptions);
  };

  return (
    <div
      id="impact-calculator"
      className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
        Carbon Footprint Calculator
      </h2>

      {/* Directions component for getting directions */}
      <Directions setOutput={setOutput} />

      {output && (
        <div className="mt-4 space-y-4">
          {JSON.parse(output).map((item: any, index: number) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded w-full shadow-md"
            >
              <p className="text-lg font-semibold">
                Travel Mode - {item.travel_mode}
              </p>
              {item.formatted_distance && (
                <p className="text-md">Distance - {item.formatted_distance}</p>
              )}
              {item.formatted_nonstop_duration && (
                <p className="text-md">
                  Non-stop Duration - {item.formatted_nonstop_duration}
                </p>
              )}
              {item.formatted_connecting_duration && (
                <p className="text-md">
                  Connecting Duration - {item.formatted_connecting_duration}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-6 mt-10">
        <input
          type="number"
          value={distance}
          readOnly // Prevent user changes
          placeholder="Distance (km)"
          className="p-2 border rounded bg-gray-200 cursor-not-allowed"
        />
        <select
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="plane">Plane</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <button
          type="submit"
          onClick={calculateImpact}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Calculate
        </button>
      </div>
      {impact !== 0 && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Your estimated CO2 impact:{" "}
            <span className="font-bold">{impact.toFixed(2)} kg</span>
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Greener Alternatives:
          </h3>
          <div className="flex justify-center space-x-4">
            {alternatives.map((alt, index) => (
              <div
                key={index}
                className="flex items-center bg-green-100 p-3 rounded-lg"
              >
                <alt.icon className="text-green-600 mr-2" size={24} />
                <span>
                  {alt.mode}: {alt.impact.toFixed(2)} kg CO2
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactCalculator;
