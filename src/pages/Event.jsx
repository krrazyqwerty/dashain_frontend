import { useState } from "react";
import { Scroll, Plus, Calendar} from "lucide-react";
import CreateEvent from "../components/CreateEvents";
import EventCard from "../components/EventCard";

export default function Event() {
  const [showCreateEventForm, setShowCreateEventForm] = useState(false);
  // const [showMyEvents, setShowMyEvents] = useState(false);
  const closeModel=()=>{
setShowCreateEventForm(false); 
  } 
  // Pseudo events for demonstration
  const events = [
    {
      name: "End of Year Party!",
      date: "2024-12-31",
      description: "Celebrate the end year party bash!",
      participants: ["John Doe", "Jane Smith", "Bob Wilson"],
      createdAt: "2023-12-01T09:30:00Z",
      location: "Convention Center",
      capacity: 150,
      isVirtual: false,
    },
    {
      name: "New Year Party!",
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

  // Psuedo unjoined events for demonstration
  const unjoinedEvents = [
    {
      name: "End of Year Party!",
      date: "2024-12-31",
      description: "Celebrate the end year party bash!",
      participants: ["John Doe", "Jane Smith", "Bob Wilson"],
      createdAt: "2023-12-01T09:30:00Z",
      location: "Convention Center",
      capacity: 150,
      isVirtual: false,
    },
    {
      name: "New Year Party!",
      date: "2025-01-01",
      description: "Celebrate the start of a new year with us!",
      participants: ["John Doe", "Jane Smith", "Bob Wilson"],
      createdAt: "2024-12-01T09:30:00Z",
      location: "Convention Center",
      capacity: 150,
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
    
  ]

  return (
    <div className="flex flex-grid m-1 min-h-[635px] bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold">
      <div className=" mx-1 my-2">
        <div className="flex justify-between">
          <div className="flex flex-start text-xl px-2 py-1 mt-1 mb-4">
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
        <div className="flex flex-col-3 flex-wrap justify-between gap-2 mx-1">
          {events.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>


        <div className="flex flex-start text-xl px-2 py-1 mt-1 mb-4">
            <Calendar />
            <h1 className="font-bold font-mono mx-2">Upcoming Family Events from your 🤞 Friends & 👨‍👩‍👧‍👦 Families that you may like 💗</h1>
          </div>
          <div className="flex flex-col-3 flex-wrap justify-between gap-2 mx-1 ">
          {unjoinedEvents.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>



        {showCreateEventForm && <CreateEvent onClose={closeModel}/>}
      </div>
    </div>
  );
}

/*
yo vanda tala ko chai feri try garnu parchha, alomost finished yet not completed
*/
