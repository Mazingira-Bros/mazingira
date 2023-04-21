// import React, { useState, useEffect } from 'react';

// function MyAddedEvents() {

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // fetch events from your database
//     fetch('http://localhost:5000/events')
//       .then(response => response.json())
//       .then(data => setEvents(data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleDelete = (id) => {
//     // DELETE fetch to delete the event
//     fetch(`/api/events/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           const updatedEvents = events.filter(event => event.id !== id);
//           setEvents(updatedEvents);
//         }
//       })
//       .catch(error => console.log(error));
//   }


//   return (
//     <div>
//     <div className="p-6">
//       <h2 className="text-lg font-medium leading-6 text-gray-900">Events</h2>
//       <ul className="mt-4">
//         {events.map(event => (
//           <li key={event.id} className="border-t border-gray-200">
//             <div className="flex items-center justify-between py-4">
//               <div className="flex items-center">
//                 <img className="h-16 w-16 rounded-full" src={event.poster} alt="Event poster" />
  
//                 <div className="ml-2">
//                   <h3 className="text-lg font-medium leading-6 text-gray-900">{event.title}</h3>
//                   <p className="text-sm font-medium leading-5 text-gray-500">{event.date} at {event.time}</p>
//                   <p className="mt-2 text-sm leading-5 text-gray-500">{event.description}</p>
// </div>
// </div>
// <button
// className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
// onClick={() => handleDelete(event.id)}
// >
// Delete
// </button>
// </div>
// </li>
// ))}
// </ul>

//   </div>
//     </div>
//   )
// }

// export default MyAddedEvents




// import React, { useState, useEffect } from 'react';

// const MyAddedEventsCard = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // fetch events from your database
//     fetch('http://localhost:5000/events')
//       .then(response => response.json())
//       .then(data => setEvents(data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleDelete = (id) => {
//     // DELETE fetch to delete the event
//     fetch(`/api/events/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           const updatedEvents = events.filter(event => event.id !== id);
//           setEvents(updatedEvents);
//         }
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Events</div>
//         <ul className="mt-4">
//           {events.map(event => (
//             <li key={event.id} className="border-t border-gray-200 py-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <img className="h-16 w-16 rounded-full" src={event.poster} alt="Event poster" />
//                   <div className="ml-2">
//                     <h3 className="text-lg font-medium leading-6 text-gray-900">{event.title}</h3>
//                     <p className="text-sm font-medium leading-5 text-gray-500">{event.date} at {event.time}</p>
//                     <p className="mt-2 text-sm leading-5 text-gray-500">{event.description}</p>
//                   </div>
//                 </div>
//                 <button
//                   className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
//                   onClick={() => handleDelete(event.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MyAddedEventsCard;


// import React, { useState, useEffect } from 'react';


// function MyAddedEvents() {
//   const [events, setEvents] = useState([]);


 

//   useEffect(() => {
//     // fetch events from your database
//     fetch('http://localhost:5000/events')
//       .then(response => response.json())
//       .then(data => setEvents(data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleDelete = (id) => {
//     // DELETE fetch to delete the event
//     fetch(`/api/events/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           const updatedEvents = events.filter(event => event.id !== id);
//           setEvents(updatedEvents);
//         }
//       })
//       .catch(error => console.log(error));
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
//       <h2 className="text-lg font-medium leading-6 text-gray-900 px-4 pt-4">My Added Events</h2>
//       <ul className="divide-y divide-gray-300">
//         {events.map(event => (
//           <li key={event.id} className="px-4 py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img className="h-24 w-24 rounded-lg object-cover" src={event.poster} alt="Event poster" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium leading-6 text-gray-900">{event.title}</h3>
//                   <p className="text-sm font-medium leading-5 text-gray-500">{event.date} at {event.time}</p>
//                   <p className="mt-2 text-sm leading-5 text-gray-500">{event.description}</p>
//                 </div>
//               </div>
//               <button
//                 className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
//                 onClick={() => handleDelete(event.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default MyAddedEvents






import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function MyAddedEvents() {
  const [events, setEvents] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    poster: null
  });

  useEffect(() => {
    // fetch events from your database
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    // DELETE fetch to delete the event
    fetch(`/api/events/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          const updatedEvents = events.filter(event => event.id !== id);
          setEvents(updatedEvents);
        }
      })
      .catch(error => console.log(error));
  }

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      description: event.description,
      poster: event.poster
    });
    setEditModalOpen(true);
  }

  const handleFormChange = (event) => {
    if (event.target.name === 'poster') {
      setFormData({
        ...formData,
        poster: URL.createObjectURL(event.target.files[0])
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  }

  const handleSave = () => {
    // PATCH fetch to update the event
    fetch(`/api/events/${selectedEvent.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        const updatedEvents = events.map(event => {
          if (event.id === selectedEvent.id) {
            return data;
          } else {
            return event;
          }
        });
        setEvents(updatedEvents);
        setEditModalOpen(false);
      })
      .catch(error => console.log(error));
  }
  return (
<div className="mt-6 bg-[#f2efc5]  ">
{/* <h1 className="text-3xl font-bold text-center py-4">My Added Events</h1> */}

<div className="grid gap-2 md:gap-4">
  {events.map((event) => (
    <div key={event.id} className="card p-4 border-b border-gray-200 flex items-start">
      {event.poster && (
        <div className="mr-4 flex-none">
          <img
            src={event.poster}
            alt={event.title}
            className="w-32 rounded-md shadow-md"
          />
        </div>
      )}
      <div className="flex-1 gap-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium mb-2">{event.title}</h2>
          <div className="flex gap-2">
  <div className=" rounded-md p-2">
    <p className="text-gray-800"><strong>Date:</strong> {event.date}</p>
  </div>
  <div className=" rounded-md p-2">
    <p className="text-gray-800"><strong>Time:</strong> {event.time}</p>
  </div>
</div>


        </div>
        {/* <div className="bg-gray-100 rounded-md p-2 mt-2 water-effect">
  <p className="text-gray-800">{event.description}</p>
</div> */}

<div className="bg-gray-100 rounded-md p-2 mt-2 shadow-md" style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}>
  <p className="text-gray-800">{event.description}</p>
</div>



        <div className="mt-4 flex justify-end">
          <button onClick={() => handleEdit(event)} className="mr-2 text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
          <button onClick={() => handleDelete(event.id)} className="text-red-500 hover:text-red-700"><FaTrash/>Delete</button>
        </div>
      </div>
    </div>
  ))}
</div>




  
  {editModalOpen && (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg font-medium mb-4">Edit Event</h2>
            <form>
              <label className="block mb-2">Title:</label>
              <input name="title" value={formData.title} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Date:</label>
              <input type="date" name="date" value={formData.date} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Time:</label>
              <input type="time" name="time" value={formData.time} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Description:</label>
              <textarea name="description" value={formData.description} onChange={handleFormChange}


    className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" rows="4"></textarea>
<label className="block mb-2">Poster:</label>
<input type="file" name="poster" onChange={handleFormChange} className="mb-4" />
{formData.poster && (
<div className="mt-4">

</div>
)}
<div className="mt-4 flex justify-end">
<button
               type="button"
               onClick={handleSave}
               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
             >
Save
</button>
<button
type="button"
onClick={() => setEditModalOpen(false)}
className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
>
Cancel
</button>
</div>
</form>
</div>
</div>
</div>
</div>
)}
</div>


  );
      }

      export default MyAddedEvents;






      // <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6'>
      // <h1>My Added Events</h1>
      // {events.map(event => (
      //   <div key={event.id}>
      //     <h2>{event.title}</h2>
      //     <p>Date: {event.date}</p>
      //     <p>Time: {event.time}</p>
      //     <p>Description: {event.description}</p>
      //     {event.poster && <img src={event.poster} alt={event.title} />}
      //     <button onClick={() => handleEdit(event)}><FaEdit /></button>
      //     <button onClick={() => handleDelete(event.id)}>Delete</button>
      //   </div>
      // ))}