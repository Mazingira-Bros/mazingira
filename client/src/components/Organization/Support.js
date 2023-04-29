
// ******************** OR THIS USE THIS HANDLESENDMESSAGE WHEN POSTING MESSAGES***********************

// const handleSendMessage = async (e) => {
//     e.preventDefault();
//     const message = {
//       text: newMessage,
//       sender: 'user',
//       createdAt: new Date(),
//     };
  
//     try {
//       const response = await fetch('YOUR_BACKEND_ENDPOINT_URL', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(message),
//       });
  
//       if (response.ok) {
//         const savedMessage = await response.json();
//         setMessages([...messages, savedMessage]);
//         setNewMessage('');
//       } else {
//         console.error('Failed to save message');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

// ******************** OR THIS USE THIS HANDLESENDMESSAGE WHEN POSTING MESSAGES***********************

// const handleSendMessage = (e) => {
//     e.preventDefault();
//     const message = {
//       text: newMessage,
//       sender: 'user',
//       createdAt: new Date(),
//     };
  
//     fetch('/api/messages', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(message),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setMessages([...messages, data]);
//         setNewMessage('');
//       })
//       .catch((error) => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };
  

// import React, { useState } from 'react';

// function Support() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const message = {
//       id: messages.length + 1,
//       text: newMessage,
//       sender: 'user',
//       createdAt: new Date(),
//     };
//     setMessages([...messages, message]);
//     setNewMessage('');
//     // You can also send this message to your backend or admin dashboard to store it for later reference.
//   };


//   const handleNewMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   return (
//     <div className="bg-white shadow rounded-lg p-4">
//       <h2 className="text-xl font-medium text-gray-800">Support</h2>
//       <div className="mt-4">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`p-3 mb-3 rounded-lg flex ${
//               message.sender === 'user'
//                 ? 'items-end justify-end'
//                 : 'items-start justify-start'
//             }`}
//           >
//             <div
//               className={`px-4 py-2 rounded-lg ${
//                 message.sender === 'user'
//                   ? 'bg-green-500 text-white'
//                   : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               <p className="text-sm">{message.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSendMessage} className="mt-4">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={handleNewMessageChange}
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           placeholder="Type your message here..."
//         />
//         <button
//           type="submit"
//           className="mt-2 text-sm text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Support;

// *******************************************************************************************************************************

import React, { useState, useEffect } from 'react';

function Support() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  const [attachment, setAttachment] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      attachment: attachment,
      createdAt: new Date(),
    };
    setMessages([...messages, message]);
    setNewMessage('');
    setAttachment(null);
  };

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  useEffect(() => {
    // Fetch messages from the backend here
    fetch(' http://localhost:5000/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-black shadow rounded-lg p-4 flex">
    <div className="w-3/4 pr-4">
      <h2 className="text-2xl font-medium text-green-600 mb-4">Support</h2>
      <div className="flex flex-col space-y-2 h-96 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user'
                ? 'items-end justify-end'
                : 'items-start justify-start'
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-green-500 text-white rounded-br-none'
                  : 'bg-gray-300 text-gray-700 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              {message.attachment && (
                <a href={URL.createObjectURL(message.attachment)}>
                  {message.attachment.name}
                </a>
              )}
              <div
                className={`w-0 h-0 border-t-8 border-r-8 border-${
                  message.sender === 'user' ? 'green-500' : 'gray-300'
                } transform ${message.sender === 'user' ? 'rotate-180' : ''}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-1/4">
      <form onSubmit={handleSendMessage} className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-lg font-medium text-white mb-2">
          Type your message here:
        </label>
        <textarea
          id="message"
          value={newMessage}
          onChange={handleNewMessageChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300 resize-none h-28"
          placeholder="How can we help..."
        />
        <label htmlFor="attachment" className="text-lg font-medium text-white mb-2">
          Attach a file:
        </label>
        <input
          type="file"
          id="attachment"
          onChange={handleAttachmentChange}
          className="mb-2"
        />
        <button
          type="submit"
          className="mt-2 text-lg font-medium text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  </div>
  );
}

export default Support;





// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckCircle, faExclamationCircle, faTrash, faPaperclip } from '@fortawesome/free-solid-svg-icons'
// import classNames from 'classnames'

// function Support() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [attachment, setAttachment] = useState(null);
//   const [selectedMessage, setSelectedMessage] = useState(null);
//   const [conversation, setConversation] = useState([]);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
  
//     const formData = new FormData();
//     formData.append('text', newMessage);
//     formData.append('sender', 'user');
//     formData.append('parentMessageId', selectedMessage ? selectedMessage.id : '');
//     if (attachment) {
//       formData.append('attachment', attachment);
//     }
  
//     fetch('http://localhost:5000/messages', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (selectedMessage) {
//           // Add message to conversation
//           setConversation([...conversation, data]);
//         } else {
//           // Add message to main message list
//           setMessages([...messages, data]);
//         }
  
//         setNewMessage('');
//         setAttachment(null);
//       })
//       .catch((error) => console.error(error));
//   };
  

//   const handleNewMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleAttachmentChange = (e) => {
//     setAttachment(e.target.files[0]);
//   };
  
//   const handleMessageSelect = (message) => {
//     // If the message is already selected, do nothing
//     if (selectedMessage && selectedMessage.id === message.id) {
//       return;
//     }

//     // Otherwise, update the selected message and conversation
//     setSelectedMessage(message);
//     setConversation(messages.filter(m => m.parentMessageId === message.id));
//   }
  
//   const handleMessageDelete = (messageId) => {
//     setMessages(messages.filter(message => message.id !== messageId));

//     if (selectedMessage && selectedMessage.id === messageId) {
//       setSelectedMessage(null);
//       setConversation([]);
//     }
//   }
  
//   const handleMessageResolve = (messageId) => {
//     const updatedMessages = messages.map(message => {
//       if (message.id === messageId) {
//         return {
//           ...message,
//           resolved: true,
//         }
//       }
//       return message
//     })
//     setMessages(updatedMessages)
//   }

//   useEffect(() => {
//     // Fetch messages from the backend here
//     fetch('http://localhost:5000/messages')
//       .then((res) => res.json())
//       .then((data) => setMessages(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="bg-black shadow rounded-lg p-4 flex">
//       <div className="w-3/4 pr-4">
//         <h2 className="text-2xl font-medium text-green-600 mb-4">Support</h2>
//         <div className="flex flex-col space-y-2 h-96 overflow-y-auto">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               onClick={() => handleMessageSelect(message)}
//               className={classNames('flex', {
//                 'bg-gray-700': selectedMessage && selectedMessage.id === message.id,
//               })}
//             >
//               <div className="p-3 rounded-lg bg-gray-800 text-white w-full">
//                 <p className="text-sm">{message.text}</p>
//                 {message.attachment && (
//                   <a href={URL.createObjectURL(message.attachment)}>
//                     {message.attachment.name}

// <FontAwesomeIcon icon={faPaperclip} className="ml-2" />
// </a>
// )}
// <div className="flex justify-between items-center text-xs mt-2">
// <span>{message.sender === 'user' ? 'You' : 'Support'}</span>
// <div className="flex items-center">
//   {message.resolved ? (
//     <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
//   ) : (
//     <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-600 mr-2" />
//   )}
//   <FontAwesomeIcon
//     icon={faTrash}
//     className="text-red-600 cursor-pointer"
//     onClick={(e) => {
//       e.stopPropagation();
//       handleMessageDelete(message.id);
//     }}
//   />
// </div>
// </div>
// </div>
// </div>
// ))}
// </div>
// <form onSubmit={handleSendMessage} className="flex items-center space-x-2 mt-4">
// <input
// type="text"
// placeholder="Type your message here..."
// value={newMessage}
// onChange={handleNewMessageChange}
// className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
// />
// <label htmlFor="attachment" className="flex items-center space-x-2">
// <FontAwesomeIcon icon={faPaperclip} />
// <span className="text-sm font-medium">Attachment</span>
// <input
// type="file"
// id="attachment"
// accept="image/*,.pdf,.doc,.docx"
// onChange={handleAttachmentChange}
// className="hidden"
// />
// </label>
// <button
// type="submit"
// className="bg-green-600 hover:bg-green-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
// >
// Send
// </button>
// </form>
// </div>
// {selectedMessage && (
// <div className="w-1/4 pl-4 border-l border-gray-700">
// <h3 className="text-xl font-medium mb-4">{selectedMessage.text}</h3>
// <div className="flex flex-col space-y-2 h-80 overflow-y-auto">
// {conversation.map((message) => (
// <div key={message.id} className="flex">
// <div className="p-3 rounded-lg bg-gray-800 text-white w-full">
// <p className="text-sm">{message.text}</p>
// {message.attachment && (
//   <a href={URL.createObjectURL(message.attachment)}>
//     {message.attachment.name}
//     <FontAwesomeIcon icon={faPaperclip} className="ml-2" />
//   </a>
// )}
// <div className="flex justify-between items-center text-xs mt-2">
//   <span>{message.sender === 'user' ? 'You' : 'Support'}</span>
//   <div className="flex items-center">
//     {message.resolved ? (
//       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
//     ) : (
//       <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-600 mr-2" />
//     )}
//     <FontAwesomeIcon
//       icon={faTrash}
//       className="text-red-600 cursor-pointer"
//       onClick={(e) => {
//         e.stopPropagation();
//         handleMessageDelete(message.id);
//       }}
//     />
//   </div>
// </div>
// </div>
// </div>
// ))}
// <form onSubmit={handleSendMessage} className="flex items-center space-x-2 mt-4">
// <input
// type="text"
// placeholder="Type your message here..."
// value={newMessage}
// onChange={handleNewMessageChange}
// className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
// />
// <label htmlFor="attachment" className="flex items-center space-x-2">
// <FontAwesomeIcon icon={faPaperclip} />
// <span className="text-sm font-medium">Attachment</span>
// <input
//            type="file"
//            id="attachment"
//            accept="image/*,.pdf,.doc,.docx"
//            onChange={handleAttachmentChange}
//            className="hidden"
//          />
// </label>
// <button
//          type="submit"
//          className="bg-green-600 hover:bg-green-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
//        >
// Send
// </button>
// </form>
// </div>
// </div>
// )}

// </div>
// );
// };
// export default Support;