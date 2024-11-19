import { useState } from "react";
import { Scroll } from "lucide-react";
import { Plus } from "lucide-react";

export default function Event() {
  const [showCreateEventForm, setShowCreateEventForm] = useState(false);
  // const [showMyEvents, setShowMyEvents] = useState(false);

  // Pseudo events for demonstration
  const events = [
    {
      name: "New Year Party",
      date: "2024-12-31",
      description: "Celebrate the end year party bash!",
      participants: ["John Doe", "Jane Smith", "Bob Wilson"],
      createdAt: "2023-12-01T09:30:00Z",
      location: "Convention Center",
      capacity: 150,
      isVirtual: false,
    },
    {
      name: "New Year Party",
      date: "2025-01-01",
      description: "Celebrate the start of a new year with us!",
      participants: ["John Doe", "Jane Smith", "Bob Wilson"],
      createdAt: "2024-12-01T09:30:00Z",
      location: "Convention Center",
      capacity: 150,
      isVirtual: false,
    },
    {
      name: "Summer BBQ",
      date: "2023-07-15",
      description: "Join us for a fun-filled BBQ in the summer!",
      participants: ["Alice Johnson", "Mike Brown", "Sarah Davis", "Tom Clark"],
      createdAt: "2023-06-01T14:15:00Z",
      location: "Central Park",
      capacity: 20,
      isVirtual: false,
    },
    {
      name: "Halloween Bash",
      date: "2023-10-31",
      description: "Get spooky with us on Halloween night!",
      participants: ["Emily White", "David Lee", "Lisa Anderson"],
      createdAt: "2023-09-01T11:45:00Z",
      location: "Zoom",
      capacity: 100,
      isVirtual: true,
    },
    {
      name: "Family Reunion",
      date: "2023-08-01",
      description: "Join us for a fun-filled family reunion!",
      participants: [
        "John Doe",
        "Jane Smith",
        "Bob Wilson",
        "Alice Johnson",
        "Mike Brown",
      ],
      createdAt: "2023-07-01T10:00:00Z",
      location: "Family Home",
      capacity: 50,
      isVirtual: false,
    },
    {
      name: "Talent Night",
      date: "2023-09-01",
      description: "An event you're eligible to show your talents!",
      participants: ["Emily White", "David Lee", "Lisa Anderson", "John Doe"],
      createdAt: "2023-08-01T12:00:00Z",
      location: "Eligible Venue",
      capacity: 100,
      isVirtual: true,
    },
  ];

  return (
    <div className=" mx-2 min-h-[635px] bg-gradient-to-r from-yellow-200 to-pink-500">
      <div className=" mx-1 my-2">
        <div className="flex justify-between">
          <div className="flex flex-start text-xl bg-blue-600 rounded-md px-2 py-1 mb-4">
            <Scroll />
            <b className="font-bold font-mono mx-2">My Events</b>
          </div>
          <div className="flex flex-end text-xl bg-blue-600 rounded-md px-2 py-1 mb-4">
            <Plus />
            <button
              onClick={() => setShowCreateEventForm(!showCreateEventForm)}
              className="font-bold font-mono mx-2 hover:bg-blue-800">
              {showCreateEventForm ? "Create Events" : "Create Events"}
            </button>
          </div>
        </div>
        <div className="flex flex-grid gap-2 mx-1 ">
          {events.map((event) => (
            <div
              key={event.name}
              className="bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-xl font-bold font-mono text-gray-800 mb-2">
                {event.name}
              </h3>
              <p className="text-gray-700 mb-2">
                <b>Date:</b> {event.date}
              </p>
              <p className="text-gray-700 mb-2">
                <b>Description:</b> {event.description}
              </p>
              <p className="text-gray-700 mb-2">
                <b>Created at:</b> {new Date(event.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-2">
                <b>Participants:</b> {event.participants.length} people
              </p>
              <button
                onClick={() => (window.location.href = `/events/${event.name}`)}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-800 rounded-md">
                View Details
              </button>
            </div>
          ))}
        </div>
        {showCreateEventForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold font-mono text-gray-800 mb-4">
                Create Event
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="eventName"
                    className="block text-gray-700 mb-2 items-center">
                    <b>Event Name</b>
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    className="mb-4 p-2 rounded-md border border-gray-300 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="eventDate" className="block text-gray-700 mb-2">
                    <b>Event Date</b>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="mb-4 p-2 rounded-md border border-gray-300 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="eventDescription"
                    className="block text-gray-700 mb-2">
                    <b>Event Description</b>
                  </label>
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    rows="4"
                    className="mb-4 p-2 rounded-md border border-gray-300 w-full"></textarea>
                </div>
                <div className="flex flex-end justify-between text-xl rounded-md px-2 py-1 mb-4">
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-800 rounded-md">
                    Create Event
                  </button>
                  <button
                    type="reset"
                    className="px-3 py-2 bg-yellow-600 hover:bg-yellow-800 rounded-md ml-2">
                    Reset
                  </button>
                  <button
                    onClick={() => (window.location.href = "/events")}
                    className="px-3 py-2 bg-red-600 hover:bg-red-800 rounded-md ml-2">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/*
yo vanda tala ko chai feri try garnu parchha, alomost finished yet not completed
*/
