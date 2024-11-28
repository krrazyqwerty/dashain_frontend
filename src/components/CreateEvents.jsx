export default function CreateEvent({ onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
      //prevent default to clear the form after submitting so that previous data clears out
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <button className="text-2xl font-bold font-mono text-gray-800 mb-4">
          Create Event
        </button>
        <form onSubmit={handleSubmit}>
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
              required
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
              required
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
              className="mb-4 p-2 rounded-md border border-gray-300 w-full"
              required
            ></textarea>
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
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-red-600 hover:bg-red-800 rounded-md ml-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
