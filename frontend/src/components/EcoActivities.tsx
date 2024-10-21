import React, { useState } from 'react';
import { TreePine, Bike, Mountain, Compass, Heart } from 'lucide-react';

const activities = [
  { id: 1, name: "Guided Nature Hike", icon: TreePine, description: "Explore local flora and fauna with expert guides", impact: "Low", provider: "EcoTrek Adventures" },
  { id: 2, name: "Eco-Friendly Bike Tour", icon: Bike, description: "Discover the city on environmentally friendly bicycles", impact: "Very Low", provider: "Green Wheel Tours" },
  { id: 3, name: "Sustainable Mountain Climbing", icon: Mountain, description: "Scale peaks with minimal environmental impact", impact: "Medium", provider: "Alpine Eco Climbers" },
  { id: 4, name: "Wildlife Conservation Volunteer", icon: Heart, description: "Participate in local wildlife conservation efforts", impact: "Positive", provider: "WildLife Guardians" },
  { id: 5, name: "Eco-Sailing Adventure", icon: Compass, description: "Explore coastal areas on wind-powered sailboats", impact: "Low", provider: "Clean Seas Sailing" },
];

const EcoActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleBooking = (activity) => {
    alert(`Booking confirmed for ${activity.name} with ${activity.provider}!`);
    setSelectedActivity(null);
  };

  return (
    <div id="activities" className="container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Eco-Friendly Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => setSelectedActivity(activity)}
          >
            <div className="flex items-center mb-4">
              <activity.icon className="text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">{activity.name}</h3>
            </div>
            <p className="text-gray-600 mb-2">{activity.description}</p>
            <p className="text-sm text-green-700">Environmental Impact: {activity.impact}</p>
          </div>
        ))}
      </div>
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-bold mb-4">{selectedActivity.name}</h3>
            <p className="mb-4">{selectedActivity.description}</p>
            <p className="mb-2"><strong>Environmental Impact:</strong> {selectedActivity.impact}</p>
            <p className="mb-4"><strong>Provider:</strong> {selectedActivity.provider}</p>
            <p className="mb-4 text-sm text-gray-600">This activity is part of our eco-tourism partnership program, ensuring sustainable practices and supporting local communities.</p>
            <div className="flex justify-between">
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                onClick={() => handleBooking(selectedActivity)}
              >
                Book Now
              </button>
              <button 
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                onClick={() => setSelectedActivity(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcoActivities;