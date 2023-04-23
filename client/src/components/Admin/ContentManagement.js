
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContentManagement() {
  const [pages, setPages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/pages')
      .then(response => response.json())
      .then(data => setPages(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/stories')
      .then(response => response.json())
      .then(data => setStories(data))
      .catch(error => console.error(error));
  }, []);

  function handlePageDelete(id) {
    fetch(`http://localhost:5000/pages/${id}`, {
      method: 'DELETE',
    })
      .then(() => setPages(pages.filter(page => page.id !== id)))
      .catch(error => console.error(error));
  }

  function handlePostDelete(id) {
    fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => setPosts(posts.filter(post => post.id !== id)))
      .catch(error => console.error(error));
  }

  function handleEventDelete(id) {
    fetch(`http://localhost:5000/events/${id}`, {
      method: 'DELETE',
    })
      .then(() => setEvents(events.filter(event => event.id !== id)))
      .catch(error => console.error(error));
  }

  function handleStoryDelete(id) {
    fetch(`http://localhost:5000/stories/${id}`, {
      method: 'DELETE',
    })
      .then(() => setStories(stories.filter(story => story.id !== id)))
      .catch(error => console.error(error));
  }

  return (
    <div className="bg-[#E5E4E2] px-4 py-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Content Management</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className=''>
        <h2 className="text-2xl font-bold text-gray-700 mb-2 ">Pages</h2>
        <div className='reminder-card '>
        <ul>
          {pages.map((page) => (
            <li
              key={page.id}
              className=" flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2 hover:shadow-lg transition-shadow duration-200 ease-in-out reminder-card"
            >
              <Link
                to={`/pages/${page.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                {page.title}
              </Link>
              <button
                onClick={() => handlePageDelete(page.id)}
                className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Posts</h2>
        <div className='reminder-card '>
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              className=" reminder-card flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2 hover:shadow-lg transition-shadow duration-200 ease-in-out"
            >
              <Link
                to={`/posts/${post.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                {post.title}
              </Link>
              <button
                onClick={() => handlePostDelete(post.id)}
                className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2"
              >
                Delete
              </button>
            </li> 
          ))}
        </ul>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Events</h2>
        <div className='reminder-card '>
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
              className=" reminder-card flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2 hover:shadow-lg transition-shadow duration-200 ease-in-out"
            >
              <Link
                to={`/events/${event.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                {event.title}
              </Link>
              <button
                onClick={() => handleEventDelete(event.id)}
                className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Stories</h2>
        <div className='reminder-card '>
        <ul>
          {stories.map((story) => (
            <li
              key={story.id}
              className=" reminder-card flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2 hover:shadow-lg transition-shadow duration-200 ease-in-out"
            >
              <Link
                to={`/stories/${story.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
                >
                {story.title}
                </Link>
                <button
                onClick={() => handleStoryDelete(story.id)}
                className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2"
                >
                Delete
                </button>
                </li>
                ))}
                </ul>
                </div>
                </div>
                
                  </div>
                </div>
  
  );
            }

  export default ContentManagement





//   ******************************************FOR AUTHORIZATION PURPOSES, USE this*********************************************



// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Admin/contexts/AuthContext';

// function ContentManagement() {
//   const { authToken } = useContext(AuthContext);
//   const [pages, setPages] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     fetch('https://yourapi.com/pages', {
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => setPages(data))
//       .catch(error => console.error(error));
//   }, [authToken]);

//   useEffect(() => {
//     fetch('https://yourapi.com/posts', {
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => setPosts(data))
//       .catch(error => console.error(error));
//   }, [authToken]);

//   useEffect(() => {
//     fetch('https://yourapi.com/events', {
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => setEvents(data))
//       .catch(error => console.error(error));
//   }, [authToken]);

//   useEffect(() => {
//     fetch('https://yourapi.com/stories', {
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => setStories(data))
//       .catch(error => console.error(error));
//   }, [authToken]);

//   function handlePageDelete(id) {
//     fetch(`https://yourapi.com/pages/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(() => setPages(pages.filter(page => page.id !== id)))
//       .catch(error => console.error(error));
//   }

//   function handlePostDelete(id) {
//     fetch(`https://yourapi.com/posts/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(() => setPosts(posts.filter(post => post.id !== id)))
//       .catch(error => console.error(error));
//   }

//   function handleEventDelete(id) {
//     fetch(`https://yourapi.com/events/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(() => setEvents(events.filter(event => event.id !== id)))
//       .catch(error => console.error(error));
//   }

//   function handleStoryDelete(id) {
//     fetch(`https://yourapi.com/stories/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//       .then(() => setStories(stories.filter(story => story.id !== id)))
//       .catch(error => console.error(error));
//   } 

//   return (
//     <div className="bg-gray-100 px-4 py-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">Content Management</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-700 mb-2">Pages</h2>
//           <ul>
//             {pages.map(page => (
//               <li key={page.id} className="flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2">
//                 <Link to={`/pages/${page.id}`} className="text-blue-500 hover:text-blue-700">{page.title}</Link>
//                 <button onClick={() => handlePageDelete(page.id)} className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2">Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-gray-700 mb-2">Posts</h2>
//           <ul>
//             {posts.map(post => (
//               <li key={post.id} className="flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2">
//                 <Link to={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-700">{post.title}</Link>
//                 <button onClick={() => handlePostDelete(post.id)} className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2">Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-gray-700 mb-2">Events</h2>
//           <ul>
//             {events.map(event => (
//               <li key={event.id} className="flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2">
//                 <Link to={`/events/${event.id}`} className="text-blue-500 hover:text-blue-700">{event.title}</Link>
//                 <button onClick={() => handleEventDelete(event.id)} className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2">Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-gray-700 mb-2">Stories</h2>
//           <ul>
//             {stories.map(story => (
//               <li key={story.id} className="flex items-center justify-between bg-white rounded-lg shadow-md px-4 py-2 mb-2">
//                 <Link to={`/stories/${story.id}`} className="text-blue-500 hover:text-blue-700">{story.title}</Link>
//                 <button onClick={() => handleStoryDelete(story.id)} className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2">Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
//             }

//   export default ContentManagement



