import React, { useState } from "react";
import { Search, Plus } from "lucide-react";

export default function FamilyCard() {
  const [searchQuery, setSearchQuery] = useState("");

  // Pseudo list for the page //
  const [familyMembers, setFamilyMembers] = useState([
    "Alice Crawford",
    "Bob",
    "Patrick",
    "Squidward",
    "Sushank",
    "Dr. Charlie",
  ]);

  const filteredMembers = familyMembers.filter((member) =>
    member.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <div className="min-h-screen m-1 bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold">
        <div className="flex flex-grid p-3">
          <Search />

          <input
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
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-sm justify-between rounded-xl overflow-hidden bg-slate-800 m-4 flex flex-col">
            {/* image ko lagi gareko */}
            <div className="flex items-center">
              <div>
                <img
                  src={`https://randomuser.me/api/portraits/men/${
                    index + 1
                  }.jpg`}
                  alt={`Profile picture of ${member}`}
                  className="rounded-full m-1 p-1"
                />
              </div>

              <div className="flex items-center align-middle font-bold text-white text-xl mb-2 ml-4">
                {member}
              </div>
              <div className="flex justify-end">
                <button className="flex rounded-md mx-1 px-2 py-1 bg-blue-300 hover:bg-blue-800 ">
                  <Plus />
                  Add as Family
                </button>
              </div>
            </div>

            <div className="px-6 py-4">
              <p className="text-white text-base">
                Profile information will be added in future updates.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
