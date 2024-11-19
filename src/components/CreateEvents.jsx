export default function CreateEvent() {
  return (
    <div className="flex items-center justify-center min-h-[560px] bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-1/2">
        <h1 className="text-2xl font-bold font-mono text-white mb-4">
          Create Event
        </h1>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input type="text" className="border border-gray-300 p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Date</label>
          <input type="date" className="border border-gray-300 p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            rows="4"></textarea>
        </div>
        <div className="flex justify-end gap-8">
          <button
            type="button"
            className="px-3 py-2 bg-gray-200 hover:bg-gray-500 rounded-md">
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-2 bg-blue-600 hover:bg-blue-800 rounded-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
