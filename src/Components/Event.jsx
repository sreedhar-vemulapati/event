import React, { useState } from "react";

const Event = () => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-20", category: "Charity", location: "New York", description: "Helping the needy." },
    { title: "Community Meet", date: "2025-04-15", category: "Social", location: "Los Angeles", description: "Bringing people together." }
  ]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "", description: "" });
  const [filter, setFilter] = useState("All");

  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", category: "", location: "", description: "" });
  };

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6 text-center">Event Listings</h2>
      
      <div className="w-full max-w-3xl mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <label className="text-lg font-semibold">Filter by Category: </label>
        <select 
          onChange={(e) => setFilter(e.target.value)} 
          className="border p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full sm:w-auto"
        >
          <option>All</option>
          <option>Religious</option>
          <option>Social</option>
          <option>Charity</option>
        </select>
      </div>
      
      <ul className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredEvents.map((event, index) => (
          <li key={index} className="p-4 sm:p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{event.title}</h3>
            <p className="text-gray-600 mt-1">{event.date} - {event.location}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </li>
        ))}
      </ul>

      <div className="w-full max-w-3xl mt-6 sm:mt-8 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Add New Event</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="border p-2 rounded-md shadow-sm" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
          <input className="border p-2 rounded-md shadow-sm" type="date" value={newEvent.date} onChange={(e) => setNewEvent({...newEvent, date: e.target.value})} />
          <select className="border p-2 rounded-md shadow-sm" value={newEvent.category} onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}>
            <option value="">Select Category</option>
            <option>Religious</option>
            <option>Social</option>
            <option>Charity</option>
          </select>
          <input className="border p-2 rounded-md shadow-sm" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({...newEvent, location: e.target.value})} />
        </div>
        <textarea className="border p-2 rounded-md shadow-sm w-full mt-4" placeholder="Description" value={newEvent.description} onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}></textarea>
        <button onClick={addEvent} className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md mt-4 hover:bg-blue-700 transition-all">Add Event</button>
      </div>
    </div>
  );
};

export default Event;
