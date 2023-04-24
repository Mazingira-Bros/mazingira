

import React, { useState, useEffect } from 'react';

  
function MyEventsModal({ setIsWelcomeShown }) {

    const [isModalOpen, setIsModalOpen] = useState(true);

      // Function to handle closing the modal
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
      useEffect(() => {
        setIsModalOpen(true);
      }, []);
  
  return (
    <div>
        <div>
        {/* ***********************Modal************************* */}
     {isModalOpen && (
      <div className= "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pointer-events-none">
        <div className="bg-white rounded-lg p-8 max-w-md pointer-events-auto">
          <h3 className="text-gray-900 font-semibold text-lg mb-2">Add and personalize events!</h3>
          <p className="text-gray-600 mb-4">Here, you can add your upcoming events, along with event details such as location, date, and time!</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => {
              handleCloseModal();
              setIsWelcomeShown(true);
            }}
          >
            Got it!
          </button>
        </div>
      </div>
    )}
          {/* ***********************End of Modal************************* */}
    </div>
    </div>
  )
}

export default MyEventsModal;