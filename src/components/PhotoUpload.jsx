import {Link} from "react-router-dom";


export default function PhotoUpload() {
  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      // window.localStorage.href = "/upload";
    }
  };
  const handleView =()=>{
    window.localStorage.href = "/view";
  }

  return (
    <div>
      <div className="flex items-center justify-center p-6 bg-gradient-to-r from-teal-150 to-purple-150">
        <div className="max-w-md w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Upload Photo</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="mb-4"
          />

        {/*
        onclink bata chai upload ma haina backend ma janu paryo, jasma chai previuosly rakheko api ma hit hunu paryo */
        }
          <button onClick={() => window.location.href = '/upload'} className="btn btn-primary bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300">Upload</button>
          <button onClick={handleView} className="btn btn-primary bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            {" "}<Link to = "/view"> View Photos</Link>
           </button>
        </div>
      </div>
    </div>
  );
}
