



import React, { useState, useEffect } from 'react';
import { FaPaypal, FaMobileAlt, FaCreditCard, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaCopy  } from 'react-icons/fa';


function NewDonationContent({ organization, onDonate, onAddToDonationList }) {
  const [isDonated, setIsDonated] = useState(false);
  const [orgData, setOrgData] = useState(organization);
  const [addedToDonationList, setAddedToDonationList] = useState(false);

  
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      alert(`${text} copied to clipboard!`);
    };

  const handleDonate = async () => {
    try {
      const response = await fetch('/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ organizationId: orgData?.id }),
      });
      if (response.ok) {
        setIsDonated(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error donating:', error);
      // Handle network error or error response here
    }
  };
  
  const handleAddToDonationList = async () => {
    try {
      const response = await fetch('/addtodonationlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ organizationId: orgData?.id }),
      });
      if (response.ok) {
        setAddedToDonationList(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error adding to donation list:', error);
      // Handle network error or error response here
    }
  };
  

  return (
    <>
  <div className="bg-gray-100 shadow-md rounded-md p-4">
  <div className="flex-1 mr-6 mt-6">
    <div className="">
      <div className="flex">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 flex-grow ml-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="object-cover object-center h-24 w-24 rounded-full" src={orgData.image} alt="Organization Image" />
            </div>
            <div className="flex-grow p-6">
              <h3 className="text-gray-900 font-semibold text-lg mb-2">{orgData.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{orgData.description}</p>
              <div>
      <p className="text-black text-sm mb-2">
        <FaPaypal className="inline-block mr-1" />
        Paypal:
        <span onClick={() => copyToClipboard(orgData.email)} className="cursor-pointer ml-1">
          {orgData.email}
          <FaCopy className="inline-block ml-1" />
        </span>
      </p>
      <p className="text-black text-sm mb-2">
        <FaMobileAlt className="inline-block mr-1" />
        M-Pesa Express:
        <span onClick={() => copyToClipboard(orgData.orgShortCode)} className="cursor-pointer ml-1">
          {orgData.orgShortCode}
          <FaCopy className="inline-block ml-1" />
        </span>
      </p>
    </div>
              <p className="text-black text-sm mb-2"><FaMapMarkerAlt  className="inline-block mr-1" />{orgData.location}</p>
              <a href={orgData.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mb-4 hover:underline">
                <FaGlobe className="inline-block mr-1" />
                {orgData.website}
              </a>
              <p className="text-gray-600 text-sm py-2 mb-2">Contact Person: {orgData.contactPerson}</p>
              <div className="flex items-center mt-4">
                <a href="/transactions">
                  <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 ${isDonated ? 'bg-green-600' : ''}`}>
                    {isDonated ? 'Donated!' : 'Donate'}
                  </button>
                </a>
                <button className={`bg-gray-400 hover:bg-gray-600 text-gray-800 text-white font-semibold py-2 px-4 rounded ${addedToDonationList ? 'bg-green-600' : ''}`} onClick={handleAddToDonationList}>
                  {addedToDonationList ? 'Added to Donation List' : 'Donate Later'}
                </button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
}

export default NewDonationContent;






