



// import React from 'react';
// import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// function BeneficiaryStoriesContent({ stories }) {
//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold leading-tight text-gray-900">
//           Beneficiary Stories
//         </h2>
//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {stories.map((story) => (
//             <div key={story.id} className="bg-white shadow-lg">
//               <img
//                 className="h-48 w-full object-cover"
//                 src={story.image}
//                 alt={story.title}
//               />
//               <div className="px-4 py-4">
//                 <h3 className="text-xl font-medium text-gray-900 mb-2">
//                   {story.title}
//                 </h3>
//                 <p className="text-gray-700">{story.summary}</p>
//                 <div className="flex justify-between items-center mt-4">
//                   <div className="flex items-center">
//                     <FaThumbsUp className="mr-2 cursor-pointer" />
//                     <FaThumbsDown className="mr-2 cursor-pointer" />
//                     <span>{story.likes} Likes</span>
//                   </div>
//                   <a
//                     href={story.url}
//                     className="text-blue-500 hover:underline inline-block"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BeneficiaryStoriesContent;




// import React, { useState } from 'react';
// import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// function BeneficiaryStoriesContent({ stories }) {
//   const [likedStories, setLikedStories] = useState([]);

//   const handleLike = (storyId) => {
//     setLikedStories([...likedStories, storyId]);
//   };

//   const handleDislike = (storyId) => {
//     setLikedStories(likedStories.filter((id) => id !== storyId));
//   };

//   const isLiked = (storyId) => likedStories.includes(storyId);
//   const isDisliked = (storyId) => likedStories.includes(`disliked_${storyId}`);

//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold leading-tight text-gray-900">
//           Beneficiary Stories
//         </h2>
//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {stories.map((story) => (
//             <div key={story.id} className="bg-white shadow-lg reminder-card">
//               <img
//                 className="h-48 w-full object-cover"
//                 src={story.image}
//                 alt={story.title}
//               />
//               <div className="px-4 py-4">
//                 <h3 className="text-xl font-medium text-gray-900 mb-2">
//                   {story.title}
//                 </h3>
//                 <p className="text-gray-700">{story.summary}</p>
//               </div>
//               <div className="flex justify-between items-end px-4 py-2">
//                 <div className="flex items-center">
//                   <FaThumbsUp
//                     className={`mr-2 cursor-pointer transition-colors ${
//                       isLiked(story.id) ? 'text-green-500' : 'text-gray-500'
//                     }`}
//                     onClick={() => handleLike(story.id)}
//                   />
//                   <FaThumbsDown
//                     className={`mr-2 cursor-pointer transition-colors ${
//                       isDisliked(story.id) ? 'text-red-500' : 'text-gray-500'
//                     }`}
//                     onClick={() => handleDislike(`disliked_${story.id}`)}
//                   />
//                   <span>{story.likes} Likes</span>
//                 </div>
//                 <a
//                   href={story.url}
//                   className="text-blue-500 hover:underline inline-block"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BeneficiaryStoriesContent;







import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown, FaMapMarkerAlt } from 'react-icons/fa';

function BeneficiaryStoriesContent() {
  const [stories, setStories] = useState([]);
  const [likedStories, setLikedStories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/stories');
      const data = await response.json();
      setStories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLike = async (storyId) => {
    try {
      const response = await fetch(`/api/stories/${storyId}/like`, {
        method: 'POST',
      });
      const data = await response.json();
      setLikedStories([...likedStories, data.id]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDislike = async (storyId) => {
    try {
      const response = await fetch(`/api/stories/${storyId}/dislike`, {
        method: 'POST',
      });
      const data = await response.json();
      setLikedStories(likedStories.filter((id) => id !== data.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (storyId) => {
    try {
      await fetch(`/api/stories/${storyId}`, {
        method: 'DELETE',
      });
      setStories(stories.filter((story) => story.id !== storyId));
    } catch (error) {
      console.log(error);
    }
  };


  const isLiked = (storyId) => likedStories.includes(storyId);
  const isDisliked = (storyId) => likedStories.includes(`disliked_${storyId}`);

  return (
    <div className="bg-gray-100 py-8">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold leading-tight text-gray-900">
        Beneficiary Stories
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <div key={story.id} className="bg-white shadow-lg reminder-card">
            <div className="relative h-48">
              <img
                className="absolute h-full w-full object-cover"
                src={story.image}
                alt={story.title}
              />
              <div className="absolute bottom-0 left-0 px-4 py-2 bg-white bg-opacity-75 w-full">
                <p className="font-bold text-lg">{story.organization}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <p><span className="font-bold">Posted on:</span> {story.date}</p>
                  {/* <p className="text-gray-700">{story.location}</p> */}
                </div>
              </div>
            </div>
            <div className="px-4 py-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-700">{story.summary}</p>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-1" />
                <p className="text-gray-700">{story.location}</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <FaThumbsUp
                    className={`text-gray-600 cursor-pointer ${isLiked(story.id) ? 'text-blue-600' : ''}`}
                    onClick={() => handleLike(story.id)}
                  />
                  <span className="ml-1">{story.likes}</span>
                </div>
                <div className="flex items-center">
                  <FaThumbsDown
                    className={`text-gray-600 cursor-pointer ${isDisliked(story.id) ? 'text-red-600' : ''}`}
                    onClick={() => handleDislike(story.id)}
                  />
                  <span className="ml-1">{story.dislikes}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                onClick={() => window.location.href = `/stories/${story.id}`}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  
);
}

export default BeneficiaryStoriesContent;

