
import React, { useState, useEffect } from 'react';


function HistoryModal({ setIsWelcomeShown }) {
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
        {/* ***********************Modal************************* */}
     {isModalOpen && (
      <div className= "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pointer-events-none">
        <div className="bg-white rounded-lg p-8 max-w-md pointer-events-auto">
          <h3 className="text-gray-900 font-semibold text-lg mb-2">Welcome to your history!</h3>
          <p className="text-gray-600 mb-4">Here, you get a recap of the organizations you have donated to and ones you want to donate to later!</p>
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
  )
}

export default HistoryModal;