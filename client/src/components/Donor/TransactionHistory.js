

import React, { useState, useEffect } from 'react';

function TransactionHistory() {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    // Fetch donation data from server
    fetch('http://localhost:5000/donation-data')
      .then(response => response.json())
      .then(data => setDonationData(data));
  }, []);

  const renderTransactionHistory = () => {
    if (donationData.length === 0) {
      return <p>No donations found.</p>;
    }

    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {donationData.map((donation, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{donation.date}</td>
              <td className="border px-4 py-2">${donation.amount}</td>
              <td className="border px-4 py-2">{donation.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderThankYouMessage = () => {
    if (donationData.length === 0) {
      return null;
    }

    const latestDonation = donationData[0];
    const message = `Thank you for your donation of $${latestDonation.amount} made on ${latestDonation.date}.`;

    return <p className="text-gray-500 mb-4">{message}</p>;
  };

  const donorName = donationData.length > 0 ? donationData[0].donorName : '';

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">My Transactions</h1>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Welcome, {donorName}!</h2>
        {renderThankYouMessage()}
        <p className="text-gray-500 mb-2">Here's your transaction history:</p>
        {renderTransactionHistory()}
      </div>
      {/* Display profile form and donation options here */}
    </div>
  );
}

export default TransactionHistory;





