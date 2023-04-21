

import React, { useEffect, useState } from 'react';

function MyDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    async function fetchDonations() {
      const response = await fetch('  http://localhost:5000/donations', { method: 'GET' });
      const data = await response.json();
      setDonations(data);
    }

    fetchDonations();
  }, []);

  const totalDonations = donations.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="bg-gray-200 p-4">
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <div className="font-bold text-lg mb-2">Total Donations Received:</div>
        <div className="font-bold text-2xl">${totalDonations}</div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {donations.map(donation => (
          <div key={donation.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-yellow-400 shadow rounded-lg">
              <div className="p-4">
                <div className="font-bold text-lg">{donation.amount}</div>
                <div className="text-gray-500">{donation.time}</div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center">
                  <img className="w-8 h-8 rounded-full mr-2" src={donation.donorImage} alt={donation.donorName} />
                  <div>
                    <div className="font-bold">{donation.anonymous ? 'Anonymous' : donation.donorName}</div>
                    <div className="text-sm text-gray-500">{donation.donorEmail}</div>
                  </div>
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert(`Thank you, ${donation.donorName}!`)}>
                  Say Thanks
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyDonations;




// import React, { useEffect, useState } from 'react';

// function MyDonations() {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     async function fetchDonations() {
//       const response = await fetch('http://localhost:5000/donations', { method: 'GET' });
//       const data = await response.json();
//       setDonations(data);
//     }

//     fetchDonations();
//   }, []);

//   const totalDonationAmount = donations.reduce((acc, curr) => acc + curr.amount, 0);

//   return (
//     <div className="bg-gray-200 p-4">
//       <div className="flex justify-between mb-4">
//         <h2 className="text-xl font-bold">Total Donations Received:</h2>
//         <div className="text-2xl font-bold">${totalDonationAmount}</div>
//       </div>
//       <div className="flex flex-wrap -mx-4">
//         {donations.map(donation => (
//           <div key={donation.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
//             <div className="bg-yellow-400 shadow rounded-lg">
//               <div className="p-4">
//                 <div className="font-bold text-lg">${donation.amount}</div>
//                 <div className="text-gray-500">{donation.time}</div>
//               </div>
//               <div className="px-4 pb-4">
//                 <div className="flex items-center">
//                   <img className="w-8 h-8 rounded-full mr-2" src={donation.donorImage} alt={donation.donorName} />
//                   <div>
//                     <div className="font-bold">{donation.anonymous ? 'Anonymous' : donation.donorName}</div>
//                     <div className="text-sm text-gray-500">{donation.donorEmail}</div>
//                   </div>
//                 </div>
//                 <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert(`Thank you, ${donation.donorName}!`)}>
//                   Say Thanks
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyDonations;

