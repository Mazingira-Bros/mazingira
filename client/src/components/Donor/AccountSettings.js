

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



  function AccountSettings() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userId, setUserId] = useState(null);

    // const [deleteReason, setDeleteReason] = useState('');
  
    const handleDeleteAccount = async (userId) => {
      try {
        // Send DELETE request to server's API to delete user by ID
        const response = await fetch(`/api/users/${userId}`, {
          method: 'DELETE'
        });
    
        if (response.ok) {
          // User was successfully deleted from database
          console.log('User deleted successfully!');
    
          // Log the user out and redirect to registration page
          await fetch('/api/auth/logout', {
            method: 'POST'
          });
          window.location.href = '/registration';
        } else {
          // User was not deleted from database
          console.error('Error deleting user:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    
      // Close the delete account modal
      setShowDeleteModal(false);
    };
    
    
    
    
  return (

    <div className="max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
  <div className="flex flex-wrap -mx-4 mb-8 ">
    <div className="w-full sm:w-1/2 px-4 mb-4 reminder-card">
      <div className="bg-white rounded-lg shadow p-6 h-full">
        <h2 className="text-lg font-bold mb-4">Profile Settings</h2>
        <Link to="/account/profile" className="text-blue-500 hover:underline block mb-4">Edit Profile Information</Link>
        {/* add more profile settings links here */}
      </div>
    </div>
    <div className="w-full sm:w-1/2 px-4 mb-4 reminder-card">
      <div className="bg-white rounded-lg shadow p-6 h-full">
        <h2 className="text-lg font-bold mb-4">Account Settings</h2>
        <Link to="/account/account-settings" className="text-blue-500 hover:underline block mb-4">Change Password and Notification Settings</Link>
        {/* add more account settings links here */}
      </div>
    </div>
    <div className="w-full sm:w-1/2 px-4 mb-4 reminder-card">
      <div className="bg-white rounded-lg shadow p-6 h-full">
        <h2 className="text-lg font-bold mb-4">Privacy Settings</h2>
        <Link to="/account/privacy-settings" className="text-blue-500 hover:underline block mb-4">Manage Privacy Settings</Link>
        {/* add more privacy settings links here */}
      </div>
    </div>
    <div className="w-full sm:w-1/2 px-4 mb-4 reminder-card">
      <div className="bg-white rounded-lg shadow p-6 h-full">
        <h2 className="text-lg font-bold mb-4">Security Settings</h2>
        <Link to="/account/security-settings" className="text-blue-500 hover:underline block mb-4">Enable Two-Factor Authentication or Review Login Activity</Link>
        {/* add more security settings links here */}
      </div>
    </div>
    <div className="w-full sm:w-1/2 px-4 mb-4 reminder-card">
      <div className="bg-white rounded-lg shadow p-6 h-full">
        <h2 className="text-lg font-bold mb-4">Billing and Payments</h2>
        <Link to="/account/billing-and-payments" className="text-blue-500 hover:underline block mb-4">Manage Billing and Payment Information</Link>
        {/* add more billing and payments links here */}
      </div>
    </div>
    <div className="w-full sm:w-1/2 px-4 mb-4 reminder-card">
    <h2 className="text-lg font-bold mb-2">Delete Account</h2>
    {/* show modal when button is clicked */}
    <button onClick={() => setShowDeleteModal(true)} className="py-2 px-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 focus:ring-red-600 focus:ring-offset-red-800 text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
">
      Delete Account
    </button>
  </div>
 
  </div>
  {/* delete account modal */}
  {showDeleteModal && (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className

    ="fixed inset-0 transition-opacity">
    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
    ​
    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div className="sm:flex sm:items-start">
    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
    <svg className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd" />
    </svg>
    </div>
    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
    <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Account</h3>
    <div className="mt-2">
    <p className="text-sm leading-5 text-gray-500">
    Are you sure you want to delete your account? This action cannot be undone.
    </p>
    </div>
    </div>
    </div>
    </div>
    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
    <button onClick={() => setShowDeleteModal(false)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
    Cancel
    </button>
    </span>
    <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
    <button onClick={() => handleDeleteAccount(userId)} className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
    Delete
    </button>
    </span>
    </div>
    </div>
    </div>
    </div>
    )}
    
    </div>
    
  );
}

export default AccountSettings;







