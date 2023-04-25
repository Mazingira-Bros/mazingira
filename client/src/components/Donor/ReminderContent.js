import React, { useState } from 'react';

function ReminderContent({ reminder, onReminder }) {
  const [addedToReminder, setAddedToReminder] = useState(false);

  const handleReminderClick = () => {
    onReminder(reminder);
    setAddedToReminder(true);
  };

  return (
    
    <div className="flex-1 ml-4 mt-6">
      <h2 className="text-gray-900 font-bold text-2xl mb-4"></h2>
      <div className="">
        <div key={reminder.id} className="bg-white rounded-lg shadow-md overflow-hidden reminder-card">
          <div className="">
            <img className="" src={reminder.image} alt={reminder.title} />
          </div>
          <div className="p-4">
            <h3 className="text-gray-900 font-semibold text-lg mb-2">{reminder.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{reminder.date}</p>
            <p className="text-gray-600 text-sm mb-2">{reminder.location}</p>
            <p className="text-gray-600 text-sm mb-4">{reminder.description}</p>
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
