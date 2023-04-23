

// import React, { useState, useEffect } from 'react';
// import {FaTrash} from 'react-icons/fa';

// function Notifications() {
//   const [notifications, setNotifications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     message: '',
//     sender: 'Admin',
//     image: 'https://via.placeholder.com/50',
//   });

//   useEffect(() => {
//     fetch('http://localhost:5000/notifications')
//       .then(res => res.json())
//       .then(data => {
//         const notificationsWithDate = data.map(notification => {
//           return {
//             ...notification,
//             createdAt: new Date()
//           };
//         });
//         setNotifications(notificationsWithDate);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const handleDeleteNotification = (id) => {
//     fetch(`http://localhost:5000/notifications/${id}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => {
//         const updatedNotifications = notifications.filter(notification => notification.id !== id);
//         setNotifications(updatedNotifications);
//       })
//       .catch(err => console.log(err));
//   };

//   const handleClearNotifications = () => {
//     fetch('http://localhost:5000/notifications', {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => {
//         setNotifications([]);
//         setShowModal(false);
//       })
//       .catch(err => console.log(err));
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:5000/notifications', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(res => res.json())
//       .then(data => {
//         setNotifications([...notifications, data]);
//         setFormData({
//           title: '',
//           message: '',
//           sender: 'Admin',
//           image: 'https://via.placeholder.com/50',
//         });
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="bg-white shadow rounded-lg p-4">
//       <h2 className="text-xl font-medium text-gray-800">Notifications</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mt-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             id="title"
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//             value={formData.title}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//             rows="3"
//             value={formData.message}
//             onChange={handleInputChange}
// ></textarea>
// </div>
// <div className="mt-4">
// <label htmlFor="sender" className="block text-sm font-medium text-gray-700">
// Sender
// </label>
// <input
//          type="text"
//          name="sender"
//          id="sender"
//          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//          value={formData.sender}
//          onChange={handleInputChange}
//        />
// </div>
// <div className="mt-4">
// <label htmlFor="image" className="block text-sm font-medium text-gray-700">
// Image URL
// </label>
// <input
//          type="text"
//          name="image"
//          id="image"
//          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//          value={formData.image}
//          onChange={handleInputChange}
//        />
// </div>
// <div className="mt-4">
// <button
//          type="submit"
//          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//        >
// Add Notification
// </button>
// </div>
// </form>
// <div className="mt-8">
// <button
// onClick={() => setShowModal(true)}
// className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// >
// Clear Notifications
// </button>
// </div>
//   {showModal &&
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
//       <div className="bg-white shadow-md rounded-lg p-4">
//         <h3 className="text-lg font-medium text-gray-800 mb-4">Are you sure you want to clear all notifications?</h3>
//         <div className="flex justify-end">
//           <button className="text-sm text-gray-700 mr-2" onClick={() => setShowModal(false)}>Cancel</button>
//           <button className="text-sm text-red-600" onClick={handleClearNotifications}>Clear all</button>
//         </div>
//       </div>
//     </div>
//   }
// </div>

//   )
// }

// export default Notifications;









import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import tw from 'tailwind-styled-components';

const ModalOverlay = tw.div`
  fixed 
  inset-0 
  bg-gray-500 
  bg-opacity-75 
  flex 
  justify-center 
  items-center 
  z-10
`;

const Modal = tw.div`
  bg-white 
  w-1/2 
  p-6 
  rounded-lg 
  shadow-lg
`;

const FormLabel = tw.label`
  block 
  text-sm 
  font-medium 
  text-gray-700
`;

const FormInput = tw.input`
  mt-1 
  focus:ring-indigo-500 
  focus:border-indigo-500 
  block 
  w-full 
  sm:text-sm 
  border-gray-300 
  rounded-md
`;

const FormTextarea = tw.textarea`
  mt-1 
  focus:ring-indigo-500 
  focus:border-indigo-500 
  block 
  w-full 
  sm:text-sm 
  border-gray-300 
  rounded-md
`;

const FormButton = tw.button`
  inline-flex 
  items-center 
  px-4 
  py-2 
  border 
  border-transparent 
  text-sm 
  font-medium 
  rounded-md 
  shadow-sm 
  text-white 
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2 
  focus:ring-indigo-500
`;

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    sender: 'Admin',
    image: 'https://via.placeholder.com/50',
    user: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/notifications')
      .then(res => res.json())
      .then(data => {
        const notificationsWithDate = data.map(notification => {
          return {
            ...notification,
            createdAt: new Date()
          };
        });
        setNotifications(notificationsWithDate);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDeleteNotification = (id) => {
    fetch(`http://localhost:5000/notifications/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        const updatedNotifications = notifications.filter(notification => notification.id !== id);
        setNotifications(updatedNotifications);
      })
      .catch(err => console.log(err));
  };

  const handleClearNotifications = () => {
    fetch('http://localhost:5000/notifications', {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        setNotifications([]);
        setShowModal(false);
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setNotifications([...notifications, data]);
        setFormData({
          title: '',
          message: '',
         

sender: 'Admin',
image: 'https://via.placeholder.com/50',
user: ''
});
setShowModal(false);
})
.catch(err => console.log(err));
};

return (
<div>
<h1 className="text-3xl font-bold mb-4">Notifications</h1>
{notifications.map(notification => (
<div key={notification.id} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
<div className="flex items-center">
<img src={notification.image} alt="user avatar" className="w-10 h-10 rounded-full mr-4" />
<div>
<h2 className="text-md font-medium text-gray-800">{notification.title}</h2>
<p className="text-sm text-gray-600">{notification.message}</p>
<p className="text-xs text-gray-500 mt-1">Sent by: {notification.sender} at {notification.createdAt.toLocaleString()}</p>
</div>
</div>
<button onClick={() => handleDeleteNotification(notification.id)} className="text-gray-600 hover:text-red-600">
<FaTrash />
</button>
</div>
))}
<div className="flex justify-end">
<button onClick={() => setShowModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
Add Notification
</button>
{notifications.length > 0 && (
<button onClick={() => setShowModal(true)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
Clear Notifications
</button>
)}
</div>
{showModal && (
<ModalOverlay>
<Modal>
<h1 className="text-xl font-bold mb-4">Add Notification</h1>
<form onSubmit={handleSubmit}>
<div className="mb-4">
<FormLabel>Title</FormLabel>
<FormInput type="text" name="title" value={formData.title} onChange={handleInputChange} />
</div>
<div className="mb-4">
<FormLabel>Message</FormLabel>
<FormTextarea name="message" rows="3" value={formData.message} onChange={handleInputChange}></FormTextarea>
</div>
<FormButton type="submit">Add Notification</FormButton>
<FormButton onClick={() => setShowModal(false)} className="bg-red-600 hover:bg-red-700 ml-4">Cancel</FormButton>
</form>
</Modal>
</ModalOverlay>
)}
</div>
);
};

export default Notifications;


