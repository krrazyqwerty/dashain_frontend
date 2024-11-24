/* eslint-disable react/prop-types */

export default function EventCard({event}) {
  return (
    <div key={event.name} className="flex flex-col bg-slate-800 p-4 rounded-md shadow-md mb-4 mx-auto" 
    style={{maxWidth: '90%', margin: '0 1rem', flex: '0 0 30%',}}>
      <h3 className="text-3xl font-mono text-amber-200 text-center mb-2">
        {event.name}
      </h3>
      <p className="text-white mb-2">
        <b>Date:</b> {event.date}
      </p>
      <p className="text-white mb-2">
        <b>Description:</b> {event.description}
      </p>
      <p className="text-white mb-2">
        <b>Created at:</b> {new Date(event.createdAt).toLocaleDateString()}
      </p>
      <p className="text-white mb-2">
        <b>Participants:</b> {event.participants.length} people
      </p>
      <button
        onClick={() => (window.location.href = `/events/${event.name}`)}
        className="px-3 py-2 bg-blue-600 hover:bg-blue-800 rounded-md">
        View Details
      </button>
    </div>
  );
}
