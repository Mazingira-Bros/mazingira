import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle, faTrash, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

function Support() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('text', newMessage);
    formData.append('sender', 'user');
    formData.append('parentMessageId', selectedMessage ? selectedMessage.id : '');
    if (attachment) {
      formData.append('attachment', attachment);
    }
  
    fetch('http://localhost:5000/messages', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (selectedMessage) {
          // Add message to conversation
          setConversation([...conversation, data]);
        } else {
          // Add message to main message list
          setMessages([...messages, data]);
        }
  
        setNewMessage('');
        setAttachment(null);
      })
      .catch((error) => console.error(error));
  };

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };
  
  const handleMessageSelect = (message) => {
    // If the message is already selected, do nothing
    if (selectedMessage && selectedMessage.id === message.id) {
      return;
    }

    // Otherwise, update the selected message and conversation
    setSelectedMessage(message);
    setConversation(messages.filter(m => m.parentMessageId === message.id));
  }
  
  const handleMessageDelete = (messageId) => {
    setMessages(messages.filter(message => message.id !== messageId));

    if (selectedMessage && selectedMessage.id === messageId) {
      setSelectedMessage(null);
      setConversation([]);
    }
  }
  
  const handleMessageResolve = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (message.id === messageId) {
        return {
          ...message,
          resolved: true,
        }
      }
      return message
    })
    setMessages(updatedMessages)
  }

  useEffect(() => {
    // Fetch messages from the backend here
    fetch('http://localhost:5000/messages')
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
              onClick={() => handleMessageSelect(message)}
              className={classNames('flex', {
                'bg-gray-700': selectedMessage && selectedMessage.id === message.id,
              })}
            >
              <div className="p-3 rounded-lg bg-gray-800 text-white w-full">
                <p className="text-sm">{message.text}</p>
                {message.attachment && (
                  <a href={URL.createObjectURL(message.attachment)}>
                    {message.attachment.name}

<FontAwesomeIcon icon={faPaperclip} className="ml-2" />
</a>
)}
<div className="flex justify-between items-center text-xs mt-2">
<span>{message.sender === 'user' ? 'You' : 'Support'}</span>
<div className="flex items-center">
  {message.resolved ? (
    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
  ) : (
    <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-600 mr-2" />
  )}
  <FontAwesomeIcon
    icon={faTrash}
    className="text-red-600 cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      handleMessageDelete(message.id);
    }}
  />
</div>
</div>
</div>
</div>
))}
</div>
<form onSubmit={handleSendMessage} className="flex items-center space-x-2 mt-4">
<input
type="text"
placeholder="Type your message here..."
value={newMessage}
onChange={handleNewMessageChange}
className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
/>
<label htmlFor="attachment" className="flex items-center space-x-2">
<FontAwesomeIcon icon={faPaperclip} />
<span className="text-sm font-medium">Attachment</span>
<input
type="file"
id="attachment"
accept="image/*,.pdf,.doc,.docx"
onChange={handleAttachmentChange}
className="hidden"
/>
</label>
<button
type="submit"
className="bg-green-600 hover:bg-green-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
>
Send
</button>
</form>
</div>
{selectedMessage && (
<div className="w-1/4 pl-4 border-l border-gray-700">
<h3 className="text-xl font-medium mb-4">{selectedMessage.text}</h3>
<div className="flex flex-col space-y-2 h-80 overflow-y-auto">
{conversation.map((message) => (
<div key={message.id} className="flex">
<div className="p-3 rounded-lg bg-gray-800 text-white w-full">
<p className="text-sm">{message.text}</p>
{message.attachment && (
  <a href={URL.createObjectURL(message.attachment)}>
    {message.attachment.name}
    <FontAwesomeIcon icon={faPaperclip} className="ml-2" />
  </a>
)}
<div className="flex justify-between items-center text-xs mt-2">
  <span>{message.sender === 'user' ? 'You' : 'Support'}</span>
  <div className="flex items-center">
    {message.resolved ? (
      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
    ) : (
      <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-600 mr-2" />
    )}
    <FontAwesomeIcon
      icon={faTrash}
      className="text-red-600 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleMessageDelete(message.id);
      }}
    />
  </div>
</div>
</div>
</div>
))}
<form onSubmit={handleSendMessage} className="flex items-center space-x-2 mt-4">
<input
type="text"
placeholder="Type your message here..."
value={newMessage}
onChange={handleNewMessageChange}
className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
/>
<label htmlFor="attachment" className="flex items-center space-x-2">
<FontAwesomeIcon icon={faPaperclip} />
<span className="text-sm font-medium">Attachment</span>
<input
           type="file"
           id="attachment"
           accept="image/*,.pdf,.doc,.docx"
           onChange={handleAttachmentChange}
           className="hidden"
         />
</label>
<button
         type="submit"
         className="bg-green-600 hover:bg-green-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
       >
Send
</button>
</form>
</div>
</div>
)}

</div>
);
};
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
  
//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const message = {
//       id: messages.length + 1,
//       text: newMessage,
//       sender: 'user',
//       attachment: attachment,
//       createdAt: new Date(),
//       parentMessageId: selectedMessage ? selectedMessage.id : null,
//     };
//     setMessages([...messages, message]);
//     setNewMessage('');
//     setAttachment(null);
//   };

//   const handleNewMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleAttachmentChange = (e) => {
//     setAttachment(e.target.files[0]);
//   };
  
//   const handleMessageSelect = (message) => {
//     setSelectedMessage(message)
//   }
  
//   const handleMessageDelete = (messageId) => {
//     setMessages(messages.filter(message => message.id !== messageId))
//     if (selectedMessage && selectedMessage.id === messageId) {
//       setSelectedMessage(null)
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
//     fetch(' http://localhost:5000/messages')
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
//                   </a>
//                 )}
//                 <div className="flex justify-between mt-2">
//                   {message.resolved ? (
//                     <span className="text-green-500">
//                       <FontAwesomeIcon icon={faCheckCircle} />
//                       Resolved
//                     </span>
//                   ) : (
//                     <span className="text-yellow-500">
// <FontAwesomeIcon icon={faExclamationCircle} />
// Pending
// </span>
// )}
// <button
// className="text-red-500"
// onClick={(e) => {
// e.stopPropagation();
// handleMessageDelete(message.id);
// }}
// >
// <FontAwesomeIcon icon={faTrash} />
// </button>
// </div>
// </div>
// </div>
// ))}
// </div>
// <form onSubmit={handleSendMessage}>
// <div className="flex items-center space-x-2">
// <input
//            type="text"
//            placeholder="Type your message here..."
//            value={newMessage}
//            onChange={handleNewMessageChange}
//            className="p-2 rounded-lg bg-gray-800 text-white flex-1 mr-2"
//          />
// <label htmlFor="attachment">
// <FontAwesomeIcon icon={faPaperclip} />
// </label>
// <input
//            type="file"
//            id="attachment"
//            onChange={handleAttachmentChange}
//            className="hidden"
//          />
// <button
//            type="submit"
//            className="bg-green-500 text-white rounded-lg px-4 py-2"
//          >
// Send
// </button>
// </div>
// </form>
// </div>
// {selectedMessage && (
// <div className="w-1/4 pl-4">
// <h3 className="text-xl font-medium text-green-600 mb-2">
// {selectedMessage.text}
// </h3>
// {selectedMessage.attachment && (
// <a href={URL.createObjectURL(selectedMessage.attachment)}>
// {selectedMessage.attachment.name}
// </a>
// )}
// <div className="mt-4 flex justify-between">
// {selectedMessage.resolved ? (
// <span className="text-green-500">
// <FontAwesomeIcon icon={faCheckCircle} />
// Resolved
// </span>
// ) : (
// <button
// className="bg-green-500 text-white rounded-lg px-4 py-2"
// onClick={() => handleMessageResolve(selectedMessage.id)}
// >
// Resolve
// </button>
// )}
// <button
// className="text-red-500"
// onClick={() => setSelectedMessage(null)}
// >
// Close
// </button>
// </div>
// </div>
// )}
// </div>
// );
// }

// export default Support;














// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckCircle, faExclamationCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
// import classNames from 'classnames'

// function Support() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [attachment, setAttachment] = useState(null);
  
//   const [selectedMessage, setSelectedMessage] = useState(null);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const message = {
//       id: messages.length + 1,
//       text: newMessage,
//       sender: 'user',
//       attachment: attachment,
//       createdAt: new Date(),
//     };
//     setMessages([...messages, message]);
//     setNewMessage('');
//     setAttachment(null);
//   };

//   const handleNewMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleAttachmentChange = (e) => {
//     setAttachment(e.target.files[0]);
//   };
  
//   const handleMessageSelect = (message) => {
//     setSelectedMessage(message)
//   }
  
//   const handleMessageDelete = (messageId) => {
//     setMessages(messages.filter(message => message.id !== messageId))
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
//     fetch(' http://localhost:5000/messages')
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
//                   </a>
//                 )}
//                 <div className="flex justify-between mt-2">
//                   {message.resolved ? (
//                     <span className="text-green-500">
//                       <FontAwesomeIcon icon={faCheckCircle} />
//                       Resolved
//                     </span>
//                   ) : (
//                     <span className="text-yellow-500">
//                       <FontAwesomeIcon icon={faExclamationCircle} />
//                       Pending
//                     </span>
//                   )}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       handleMessageDelete(message.id)
//                     }}
//                     className="text-red-500 hover:text-red-600"
//                   >
//                     <FontAwesomeIcon icon={faTrash} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-1/4">
// <form onSubmit={handleSendMessage}>
// <textarea
//          value={newMessage}
//          onChange={handleNewMessageChange}
//          className="w-full h-32 p-2 rounded-lg mb-2"
//          placeholder="Type your message here"
//        />
// <input
//          type="file"
//          onChange={handleAttachmentChange}
//          className="mb-2"
//        />
// <button
//          type="submit"
//          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
//        >
// Send
// </button>
// </form>
// </div>
// </div>
// );
// }

// export default Support;