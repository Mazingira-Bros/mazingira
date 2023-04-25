



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

//   const totalDonations = donations.reduce((acc, curr) => acc + curr.amount, 0);

//   return (
//     <div className="bg-gray-400 p-4">
//       <div className="bg-white shadow rounded-lg p-4 mb-4">
//         <div className="font-bold text-lg mb-2">Total Donations Received:</div>
//         <div className="font-bold text-2xl">${totalDonations}</div>
//       </div>
//       <div className="flex flex-wrap -mx-4">
//         {donations.map(donation => (
//           <div key={donation.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
//             <div className="bg-white shadow rounded-lg reminder-card">
//               <div className="p-4">
//                 <div className="font-bold text-lg">{donation.amount}</div>
//                 <div className="text-gray-500">{donation.time}</div>
//               </div>
//               <div className="px-4 pb-4">
//                 <div className="flex items-center mb-2">
//                   <img className="w-8 h-8 rounded-full mr-2" src={donation.donorImage} alt={donation.donorName} />
//                   <div>
//                     <div className="font-bold">{donation.anonymous ? 'Anonymous' : donation.donorName}</div>
//                     <div className="text-sm text-gray-500">{donation.donorEmail}</div>
//                   </div>
//                 </div>
//                 <button
//                   className="py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
//                   onClick={() => alert(`Thank you, ${donation.donorName}!`)}
//                 >
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




import React, { useEffect, useState } from 'react';

function MyDonations() {
  const [donations, setDonations] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    async function fetchDonations() {
      const donationsResponse = await fetch('http://localhost:5000/donations', { method: 'GET' });
      const donationsData = await donationsResponse.json();
      setDonations(donationsData);

      const totalResponse = await fetch('http://localhost:5000/total', { method: 'GET' });
      const totalData = await totalResponse.json();
      setTotalDonations(totalData.totalAmount);
    }

    fetchDonations();
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  return (
    <div className="bg-[#E5E4E2] p-4">
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <div className="font-bold text-lg mb-2">Total Donations Received:</div>
        <div className="font-bold text-2xl">${totalDonations}</div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {donations.map(donation => (
          <div key={donation.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
           <div className="bg-[#ACACAC] shadow rounded-lg reminder-card">

              <div className="p-4 ">
                <div className="font-bold text-lg text-black mb-2">{donation.amount}</div>
                <div className="text-black text-sm">{formatDate(donation.time)}</div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center mb-2">
                  <img className="w-8 h-8 rounded-full mr-2" src={donation.donorImage} alt={donation.donorName} />
                  <div className=''>
                    <div className="font-bold">{donation.anonymous ? 'Anonymous' : donation.donorName}</div>
                    <div className="text-sm text-black">{donation.donorEmail}</div>
                  </div>
                </div>
                <button
                  className=" py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                  onClick={() => alert(`Thank you, ${donation.donorName}!`)}
                >
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

export default MyDonations


