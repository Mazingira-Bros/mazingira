// import React, { useState } from 'react';

// function MyEvents() {
//   const [events, setEvents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [eventAdded, setEventAdded] = useState(false);
//   const [event, setEvent] = useState({
//     time: '',
//     date: '',
//     poster: '',
//     description: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEvent(prevState => ({ ...prevState, [name]: value }));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // POST fetch to your database
//     fetch('/api/events', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(event),
//     })
//       .then(response => response.json())
//       .then(data => {
//         setEvents(prevState => [...prevState, data]);
//         setEvent({
//           time: '',
//           date: '',
//           poster: '',
//           description: '',
//         });
//         setShowForm(false);
//         setEventAdded(true);
//       })
//       .catch(error => console.log(error));
//   }

//   const handleEdit = (id) => {
//     // find the event to edit
//     const eventToEdit = events.find(event => event.id === id);
//     setEvent(eventToEdit);
//   }

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     // PUT fetch to update the event
//     fetch(`/api/events/${event.id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(event),
//     })
//       .then(response => response.json())
//       .then(data => {
//         const updatedEvents = events.map(event => {
//           if (event.id === data.id) {
//             return data;
//           }
//           return event;
//         });
//         setEvents(updatedEvents);
//         setEvent({
//           time: '',
//           date: '',
//           poster: '',
//           description: '',
//         });
//       })
//       .catch(error => console.log(error));
//   }



//   return (
    
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
//     <div className="p-6">
//     {showForm ? (
//         <>
//       {/* <h2 className="text-lg font-medium leading-6 text-gray-900">Add Event</h2> */}
//       <form onSubmit={handleSubmit}>

//            {/* INPUT FIELD */}


//         <div className="flex flex-col">
//           <label htmlFor="time" className="text-lg font-medium leading-6 text-gray-900">Time</label>
//           <input
//             type="text"
//             name="time"
//             value={event.time}
//             onChange={handleChange}
//             className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
//             placeholder="Enter the time"
//           />
//         </div>
//         <div className="flex flex-col mt-4">
//           <label htmlFor="date" className="text-lg font-medium leading-6 text-gray-900">Date</label>
//           <input
//             type="text"
//             name="date"
//             value={event.date}
//             onChange={handleChange}
//             className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
//             placeholder="Enter the date"
//           />
//         </div>
//         <div className="flex flex-col mt-4">
//           <label htmlFor="poster" className="text-lg font-medium leading-6 text-gray-900">Poster URL</label>
//           <input
//             type="text"
//             name="poster"
//             value={event.poster}
//             onChange={handleChange}
//             className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
//             placeholder="Enter the poster URL"
//           />
//         </div>
//         <div className="flex flex-col mt-4">
//           <label htmlFor="description" className="text-lg font-medium leading-6 text-gray-900">Description</label>
//           <textarea
//             name="description"
//             value={event.description}
//             onChange={handleChange}
//             className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
//             placeholder="Enter the description"
//           ></textarea>
//         </div>
//         <div className="mt-4">
//           <button type="submit" className="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
//             Add Event
//           </button>
//           <button type="button" onClick={() => setShowForm(false)} className="ml-4 py-2 px-4 bg-gray-500 hover:bg-gray-600 focus:ring-gray-500 focus:ring-offset-gray-200 text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
//                 Cancel
//           </button>
//         </div>
//       </form>
//       </>
//         ) : (
//         <button type="button" onClick={() => setShowForm(true)} className="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
//           Add Event
//         </button>
//       )}
   
//     </div>
// </div>
    
// );
// }
// export default MyEvents;




import React, { useState } from 'react';

function MyEvents() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [eventAdded, setEventAdded] = useState(false);
  const [event, setEvent] = useState({
    title:'',
    time: '',
    date: '',
    poster: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // POST fetch to your database
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    })
      .then(response => response.json())
      .then(data => {
        setEvents(prevState => [...prevState, data]);
        setEvent({
          title:'',
          time: '',
          date: '',
          poster: '',
          description: '',
        });
        handleEventAdded();
      })
      .catch(error => console.log(error));
  }

  const handleEventAdded = () => {
    setEventAdded(true);
    setShowForm(false);
  }
  

  const handleEdit = (id) => {
    // find the event to edit
    const eventToEdit = events.find(event => event.id === id);
    setEvent(eventToEdit);
  }

 



  const handleUpdate = (e) => {
    e.preventDefault();

    // PUT fetch to update the event
    fetch(`/api/events/${event.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    })
      .then(response => response.json())
      .then(data => {
        const updatedEvents = events.map(event => {
          if (event.id === data.id) {
            return data;
          }
          return event;
        });
        setEvents(updatedEvents);
        setEvent({
          title:'',
          time: '',
          date: '',
          poster: '',
          description: '',
        });
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
    <div className="p-6">
      {showForm ? (
        <>
          <form onSubmit={handleSubmit}>
            {/* INPUT FIELDS */}

    <div className="flex flex-col">
       <label htmlFor="time" className="text-lg font-medium leading-6 text-gray-900">Title</label>
     <input
      type="text"
      name="title"
      value={event.title}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the title"
    />
  </div>


  <div className="flex flex-col">
       <label htmlFor="time" className="text-lg font-medium leading-6 text-gray-900">Time</label>
     <input
      type="text"
      name="time"
      value={event.time}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the time"
    />
  </div>
  <div className="flex flex-col mt-4">
    <label htmlFor="date" className="text-lg font-medium leading-6 text-gray-900">Date</label>
    <input
      type="text"
      name="date"
      value={event.date}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the date"
    />
  </div>

  <div className="flex flex-col mt-4">
    <label htmlFor="description" className="text-lg font-medium leading-6 text-gray-900">Description</label>
    <textarea
      name="description"
      value={event.description}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the description"
    ></textarea>
  </div>

  <div className="flex flex-col ">
    {/* <label htmlFor="poster" className="text-lg font-medium leading-6 text-gray-900">Poster URL</label>
    <input
      type="text"
      name="poster"
      value={event.poster}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the poster URL"
    /> */}

<label className="block mt-4 text-lg font-medium leading-6 text-gray-900">Poster:</label>
<input type="file" name="poster" onChange={handleChange} className="mb-4" />
{event.poster && (
<div className="mt-4">

</div>
)}
  </div>

  


  {/* CLOSE FORM AND SHOW EVENT ADDED BUTTON */}
  <button type="submit" onClick={() => setShowForm(false)} className="py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
  {eventAdded ? 'Event Added' : 'Add Event'}
</button>

          </form>
         
        </>
      ) : (
        <button type="button" onClick={() => setShowForm(true)} className="py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
          Add Event
        </button>
      )}
    </div>
  </div>
);
}

export default MyEvents;




    






