


// import React, { useState} from 'react';

// function HistoryContent({ donationHistory, organization, onDonate   }) {

//   const [isDonated, setIsDonated] = useState(false);
//   const [orgData, setOrgData] = useState(organization);
  
  
 
  
   
//   const handleDonate = () => {
//     onDonate(orgData?.id);
//     setIsDonated(true);
//   };



//   return (
//     <div className="bg-white shadow-md rounded-md p-4">
//       <h2 className="text-2xl font-bold mb-4">Donation History</h2>
//       {donationHistory.map((donation, index) => (
//         <div key={index} className="bg-gray-100 rounded-md p-4 mb-4">
//           <h3 className="text-lg font-bold">{donation.name}</h3>
//           <p className="text-gray-600 text-sm">{donation.description}</p>
//           <p className="text-gray-600 text-sm">{donation.email}</p>
//           <p className="text-gray-600 text-sm">
//             <a
//               href={donation.website}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline"
//             >
//               {donation.website}
//             </a>
//           </p>
//           <p className="text-gray-600 text-sm">{donation.contactPerson}</p>
//           <button
//     className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${isDonated ? 'bg-green-600' : 'bg-blue-500'} mr-2`}
//     onClick={handleDonate}
//   >
//     {isDonated ? 'Donated!' : 'Donate'}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HistoryContent;




import React, { useState } from 'react';

function HistoryContent({ donationHistory, organization, onDonate }) {
  const [orgDataList, setOrgDataList] = useState(donationHistory.map(() => ({
    ...organization,
    isDonated: false,
  })));

  const handleDonate = (index) => {
    onDonate(donationHistory[index].id);
    setOrgDataList((prevOrgDataList) => {
      const newOrgDataList = [...prevOrgDataList];
      newOrgDataList[index] = {
        ...newOrgDataList[index],
        isDonated: true,
      };
      return newOrgDataList;
    });
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-2xl font-bold mb-4">Donation History</h2>
      {donationHistory.map((donation, index) => {
        const orgData = orgDataList[index];
        return (
          <div key={index} className="bg-gray-100 rounded-md p-4 mb-4">
            <h3 className="text-lg font-bold">{donation.name}</h3>
            {/* <img className="w-32 h-32 rounded-full float-right ml-4 mt-4" src={donation.image} alt="Donation" /> */}
            <p className="text-gray-600 text-sm">{donation.description}</p>
            <p className="text-gray-600 text-sm">{donation.email}</p>
            <p className="text-gray-600 text-sm">
              <a
                href={donation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {donation.website}
              </a>
            </p>
            <p className="text-gray-600 text-sm mb-2">{donation.contactPerson}</p>
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${
                orgData.isDonated ? 'bg-green-600' : 'bg-blue-500'
              } mr-2`}
              onClick={() => handleDonate(index)}
              disabled={orgData.isDonated}
            >
              {orgData.isDonated ? 'Donated!' : 'Donate'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default HistoryContent;






  //  <div key={index} className="bg-gray-100 rounded-md p-4 mb-4">
  //           <h3 className="text-lg font-bold">{donation.name}</h3>
  //           <img className="w-32 h-32 rounded-full mx-auto mt-4" src={donation.image} alt="Donation" />
  //           <p className="text-gray-600 text-sm">{donation.description}</p>
  //           <p className="text-gray-600 text-sm">{donation.email}</p>
  //           <p className="text-gray-600 text-sm">
  //             <a
  //               href={donation.website}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="text-blue-500 hover:underline"
  //             >
  //               {donation.website}
  //             </a>
  //           </p>
  //           <p className="text-gray-600 text-sm">{donation.contactPerson}</p>
  //           <button
  //             className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${
  //               orgData.isDonated ? 'bg-green-600' : 'bg-blue-500'
  //             } mr-2`}
  //             onClick={() => handleDonate(index)}
  //             disabled={orgData.isDonated}
  //           >
  //             {orgData.isDonated ? 'Donated!' : 'Donate'}
  //           </button>
  //         </div>
  //       );
  //     })}
  //   </div>
