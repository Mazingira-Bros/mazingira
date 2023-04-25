

import React, { useState, useEffect } from 'react';

import {FaTrash} from 'react-icons/fa';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);


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

  return (
    <div className="bg-white shadow rounded-lg p-4">
  <h2 className="text-xl font-medium text-gray-800">Notifications</h2>
  <div className="mt-4 ">
    {notifications.map(notification => (
     <div key={notification.id} className="p-3 mb-3 bg-gray-50 rounded-lg flex items-center reminder-card">
     <img className="w-8 h-8 rounded-full mr-3" src={notification.image} alt={`${notification.sender}'s profile picture`} />
     <div>
       <span className="text-sm text-gray-900 font-bold">{notification.sender}</span>
       <p className="text-xs text-black-500 mt-1">{notification.createdAt.toLocaleString()}</p>
     </div>
     <div className="ml-4 flex-grow">
       <h3 className="text-base font-medium text-gray-800">{notification.title} </h3>
       <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
     </div>
     <div>
       <button className="text-sm text-gray-700 mr-2" onClick={() => handleDeleteNotification(notification.id)}><FaTrash/>Delete</button>
     </div>
   </div>
   
    ))}
    {notifications.length > 0 &&
      <div className="mt-4">
        <button className="py-2 px-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 focus:ring-red-600 focus:ring-offset-red-800 text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
" onClick={() => setShowModal(true)}>Clear all notifications</button>
      </div>
    }
  </div>
  {showModal &&
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Are you sure you want to clear all notifications?</h3>
        <div className="flex justify-end">
          <button className="text-sm text-gray-700 mr-2" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="text-sm text-red-600" onClick={handleClearNotifications}>Clear all</button>
        </div>
      </div>
    </div>
  }
</div>

  )
}

export default Notifications;

