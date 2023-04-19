



import React, { useState, useEffect } from 'react';


function BeneficiaryStoriesContent({ organization, onDonate, onAddToDonationList }) {
    const [isDonated, setIsDonated] = useState(false);
    const [orgData, setOrgData] = useState(organization);
    const [addedToDonationList, setAddedToDonationList] = useState(false);
    
    // Define state for modal visibility
   

  
    const handleDonate = () => {
      onDonate(orgData?.id);
      setIsDonated(true);
    };
  
    const handleAddToDonationList = () => {
      onAddToDonationList(orgData?.id);
  
      // Update the state to reflect that the button has been clicked
      setAddedToDonationList(true);
    };


  return (
    
     <div className=' '>
    <div className="flex-1 mr-6  mt-6">
    {/* md:pl-80  */}
    <div className=""> {/* Update container width to occupy the rest of the page after the sidebar */}
      <div className="flex">
        {/* <img className="object-cover object-center h-24 w-24" src={orgData.image} alt="Organization Image" /> Add image on the left side outside the container card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 flex-grow ml-4"> {/* Add margin left to separate the image from the container card */}
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="object-cover object-center h-24 w-24" src={orgData.image} alt="Organization Image" />
            </div>
            <div className="flex-grow p-6">
  <h3 className="text-gray-900 font-semibold text-lg mb-2">{orgData.name}</h3>
  <p className="text-gray-600 text-sm mb-4">{orgData.description}</p>
  <p className="text-gray-600 text-sm mb-2">Email: {orgData.email}</p>
  {/* Make website clickable */}
  <a href={orgData.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mb-2 hover:underline">
    Website: {orgData.website}
  </a>
  <p className="text-gray-600 text-sm mb-2">Contact Person: {orgData.contactPerson}</p>
  <button
    className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${isDonated ? 'bg-green-600' : 'bg-blue-500'} mr-2`}
    onClick={handleDonate}
  >
    {isDonated ? 'Donated!' : 'Donate'}
  </button>
  <button
    className={`bg-gray-400 hover:bg-gray-600 text-gray-800 text-white font-semibold py-2 px-4 rounded mt-2 ${addedToDonationList ? 'bg-green-600' : ''}`}
    onClick={handleAddToDonationList}
  >
    {addedToDonationList ? 'Added to Donation List' : 'Donate Later'}
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
}

export default BeneficiaryStoriesContent;






