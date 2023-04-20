

// import React, { useState } from "react";
// import { FaCamera } from "react-icons/fa";

// function ProfilePicture({ profilePicture, setProfilePicture, initialProfilePicture }) {
//   const [showModal, setShowModal] = useState(false);
//   const [picture, setPicture] = useState(initialProfilePicture);
  

//   const handleUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfilePicture(reader.result);
//       setShowModal(false);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleIconClick = () => {
//     setShowModal(true);
//   };

//   return (
//     <div>
//       <div className="relative">
//         {profilePicture ? (
//           <img
//             src={profilePicture}
//             alt="Profile Picture"
//             className="w-30 h-20 rounded-full"
//           />
//         ) : (
//           <div className="w-30 h-20 rounded-full bg-gray-200"></div>
//         )}
//         <div className="absolute top-0 right-0 cursor-pointer" onClick={handleIconClick}>
//           <FaCamera className="text-white bg-blue-500 rounded-full p-1" />
//         </div>
//       </div>
//       {showModal && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg">
//             <div className="mb-4">
//               <label htmlFor="file-upload" className="cursor-pointer">
//                 <span className="px-4 py-2 bg-blue-500 text-white rounded-full">
//                   Upload Image
//                 </span>
//                 <input
//                   id="file-upload"
//                   type="file"
//                   className="hidden"
//                   onChange={handleUpload}
//                 />
//               </label>
//             </div>
//             <button
//               className="px-4 py-2 bg-gray-500 text-white rounded-full"
//               onClick={() => setShowModal(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePicture;


import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

function ProfilePicture({ profilePicture, setProfilePicture, initialProfilePicture }) {
  const [showModal, setShowModal] = useState(false);
  const [picture, setPicture] = useState("");

  useState(() => {
    setPicture(initialProfilePicture);
  }, [initialProfilePicture]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
      setPicture(reader.result);
      setShowModal(false);
    };
    reader.readAsDataURL(file);
  };

  const handleIconClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="relative">
        {picture ? (
          <img
            src={picture}
            alt="Profile Picture"
            className="w-30 h-20 rounded-full"
          />
        ) : (
          <div className="w-30 h-20 rounded-full bg-gray-200"></div>
        )}
        <div className="absolute top-0 right-0 cursor-pointer" onClick={handleIconClick}>
          <FaCamera className="text-white bg-blue-500 rounded-full p-1" />
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <div className="mb-4">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="px-4 py-2 bg-blue-500 text-white rounded-full">
                  Upload Image
                </span>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleUpload}
                />
              </label>
            </div>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-full"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePicture;
