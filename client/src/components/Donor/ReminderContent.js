// import React, { useEffect, useState } from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// function ReminderContent({ reminder, onReminder }) {
//   const [events, setEvents] = useState([]);
//   const [addedToReminder, setAddedToReminder] = useState(false);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const response = await fetch(' http://localhost:5000/events');
//       const data = await response.json();
//       setEvents(data);
//     };

//     fetchEvents();
//   }, []);

//   const handleReminderClick = async () => {
//     onReminder(reminder);
//     setAddedToReminder(true);

//     const response = await fetch(' http://localhost:5000/reminders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(reminder)
//     });

//     if (response.ok) {
//       console.log('Event added to reminders!');
//     }
//   };

//   return (
//     <div className="w-1/3 p-2 reminder-container">
//       <h2 className="text-gray-900 font-bold text-2xl mb-4"></h2>
//       <div className="">
//         {events.map((event) => (
//           <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden reminder-card">
//             <div className="">
//               <img className="" src={event.image} alt={event.title} />
//             </div>
//             <div className="p-4">
//               <h3 className="text-gray-900 font-semibold text-lg mb-2">{event.title}</h3>
//               <p className="text-black text-sm mb-2 font-bold text-lg">{event.organization}</p>
//               <p className="text-gray-600 text-sm mb-2">{event.date}</p>
//               <p className="text-black text-sm mb-2 inline-flex"><FaMapMarkerAlt className="mr-1" />{event.location}</p>
//               <p className="text-black text-sm mb-4">{event.description}</p>
//               <button
//                 className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${addedToReminder ? 'bg-green-600' : 'bg-blue-500'} mr-2`}
//                 onClick={handleReminderClick}
//                 disabled={addedToReminder}
//               >
//                 {addedToReminder ? 'Added to Reminders' : 'Participate'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ReminderContent;



import React, { useState, useEffect } from 'react';
import {  FaMapMarkerAlt } from 'react-icons/fa';

function ReminderContent({ reminder, onReminder }) {
  const [addedToReminder, setAddedToReminder] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(' http://localhost:5000/events');
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const handleReminderClick = async () => {
    onReminder(reminder);
    setAddedToReminder(true);

    const response = await fetch(' http://localhost:5000/reminders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reminder)
    });

    if (response.ok) {
      console.log('Event added to reminders!');
    }
  };

  return (
    <div className="w-1/3 p-2">
      <h2 className="text-gray-900 font-bold text-2xl mb-4"></h2>
      <div className="">
        <div key={reminder.id} className="bg-white rounded-lg shadow-md overflow-hidden reminder-card">
          <div className="">
            <img className="" src={reminder.image} alt={reminder.title} />
          </div>
          <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-lg mb-2">{reminder.title}</h3>
            <p className="text-black text-sm mb-2 font-bold text-lg">{reminder.organization}</p>
            <p className="text-gray-600 text-sm mb-2">{reminder.date}</p>
            <p className="text-black text-sm mb-2 inline-flex"><FaMapMarkerAlt className="mr-1" />{reminder.location}</p>
          
            <p className="text-black text-sm mb-4">{reminder.description}</p>
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${addedToReminder ? 'bg-green-600' : 'bg-blue-500'} mr-2`}
              onClick={handleReminderClick}
            >
              {addedToReminder ? 'Added to Reminders' : 'Participate'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReminderContent;