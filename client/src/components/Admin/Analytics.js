
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Analytics() {
  const [userEngagementData, setUserEngagementData] = useState([]);
  const [donationActivityData, setDonationActivityData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    fetch(`http://localhost:5000/user-engagement?date=${formattedDate}`)
      .then(response => response.json())
      .then(data => setUserEngagementData(data))
      .catch(error => console.log(error));
    fetch(`http://localhost:5000/donation-activity?date=${formattedDate}`)
      .then(response => response.json())
      .then(data => setDonationActivityData(data))
      .catch(error => console.log(error));
  }, [selectedDate]);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Engagement</h3>
            <div className="mt-5">
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500 truncate">Total Users</div>
                <div className="text-sm font-medium text-gray-500 truncate">{userEngagementData.totalUsers}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500 truncate">Active Users</div>
                <div className="text-sm font-medium text-gray-500 truncate">{userEngagementData.activeUsers}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500 truncate">Inactive Users</div>
                <div className="text-sm font-medium text-gray-500 truncate">{userEngagementData.inactiveUsers}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500 truncate">Month</div>
                <div className="text-sm font-medium text-gray-500 truncate">{userEngagementData.month}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500 truncate">Visits</div>
                <div className="text-sm font-medium text-gray-500 truncate">{userEngagementData.visits}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500 truncate">Signups</div>
                <div className="text-sm font-medium text-gray-500 truncate">{userEngagementData.signups}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500 truncate">Active Users</div>
                <div className="text-sm font-medium text-gray-500 truncate">{userEngagementData.activeUsers}</div>
</div>
</div>
</div>
</div>
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="px-4 py-5 sm:p-6">
<h3 className="text-lg leading-6 font-medium text-gray-900">Donation Activity</h3>
<div className="mt-5">
<div className="flex justify-between">
<div className="text-sm font-medium text-gray-500 truncate">Total Donations</div>
<div className="text-sm font-medium text-gray-500 truncate">{donationActivityData.totalDonations}</div>
</div>
<div className="flex justify-between">
<div className="text-sm font-medium text-gray-500 truncate">Donation Amount</div>
<div className="text-sm font-medium text-gray-500 truncate">{donationActivityData.donationAmount}</div>
</div>
<div className="flex justify-between">
<div className="text-sm font-medium text-gray-500 truncate">Average Donation</div>
<div className="text-sm font-medium text-gray-500 truncate">{donationActivityData.averageDonation}</div>
</div>
<div className="flex justify-between">
<div className="text-sm font-medium text-gray-500 truncate">Month</div>
<div className="text-sm font-medium text-gray-500 truncate">{donationActivityData.month}</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8">
<label className="text-gray-700 font-bold">Select Date:</label>
<div className="mt-1">
<DatePicker
selected={selectedDate}
onChange={date => setSelectedDate(date)}
dateFormat="yyyy-MM-dd"
/>
</div>
</div>
</div>
);
}

export default Analytics;
