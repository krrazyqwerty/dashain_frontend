import React, { useState } from "react";
import { Search, Plus } from "lucide-react";

export default function Family() {
  const [searchQuery, setSearchQuery] = useState("");

  // Pseudo list for the page //
  const [familyMembers, setFamilyMembers] = useState([
    "Monkey D. Luffy",
    "Monkey D Charlie",
    "Roronoa Zoro",
    "Portgas D. Ace",
    "Squidward Tentacles",
    "Animatronic Server",
    "Dr. Charlie Ruth",
    "Sheldon J. Plankton",
    "Eugene H. Krabs",
    "Tony Tony Chopper",
    "Gol D Rogers",
  ]);

  const filteredMembers = familyMembers.filter((member) =>
    member.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen m-1 bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold">
      {/* yo search bar ko lagi matra, yesma chai search icon vitra halna lai dherai time liyo */}
      <div className="flex flex-grid p-3">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2" style={{
            marginLeft: "2px",
            marginRight: "2px",
            marginTop: "2px",
            marginBottom: "2px"
          }}/>

        {/* <input
          type="text"
          placeholder="Search for your family members..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            border: "1px solid black",
            width: "100%",
            paddingLeft: "15px",
            borderRadius: "10px",
          }}
        /> */}
         <input
            className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            placeholder="Search for your Family Members here!"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}           
          />
        </div>
      </div>
      {/* yeta search bar sakiyo */}

      {/* yeta bata profile card suru vayo*/}
      <div>
        <div className="flex flex-grid flex-wrap gap-2">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="max-w-sm items-center rounded-xl overflow-hidden bg-slate-800 m-4 flex flex-col">

              {/* image ko lagi gareko, after a million tries it looks good enough i suppose */}
              <div className="flex flex-col items-center">
                <div>
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      index + 1
                    }.jpg`}
                    alt={`Profile picture of ${member}`}
                    className="rounded-full m-1 border-4"
                  />
                </div>

                {/*yeta bata name suru vayo */}

                <div className="flex items-center align-middle font-bold text-white text-xl mb-2 ml-4">
                  {member}
                </div>
                {/*yeta name ko sakiyo*/}


                {/*yeta bata add ko suru vayo*/}
                <div className="flex justify-end">
                  <button className="flex rounded-md mx-1 p-1 gap-2 bg-blue-300 hover:bg-blue-800 ">
                    <Plus />
                    Add as Family
                  </button>
                </div>
                {/*yeta add ko sakiyo */}
              </div>
              {/*yeta chai pic and add ko sakiyo */}

              {/* yeta bata description ko suru vayo */}
              <div className="px-6 py-4">
                <p className="text-white text-base text-center ">
                  Profile information will be added in future updates.
                </p>
              </div>
              {/*yeta descrption ko add garna baki chha, pacchi gaenu chha */}


            </div>
          ))}
        </div>
      </div>
      {/* yeta profile card ko sakiyo*/}
    </div>
  );
}
