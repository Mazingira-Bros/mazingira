



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




import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function BeneficiaryStoriesContent({ stories }) {
  const [likedStories, setLikedStories] = useState([]);

  const handleLike = (storyId) => {
    setLikedStories([...likedStories, storyId]);
  };

  const handleDislike = (storyId) => {
    setLikedStories(likedStories.filter((id) => id !== storyId));
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
              <img
                className="h-48 w-full object-cover"
                src={story.image}
                alt={story.title}
              />
              <div className="px-4 py-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-700">{story.summary}</p>
              </div>
              <div className="flex justify-between items-end px-4 py-2">
                <div className="flex items-center">
                  <FaThumbsUp
                    className={`mr-2 cursor-pointer transition-colors ${
                      isLiked(story.id) ? 'text-green-500' : 'text-gray-500'
                    }`}
                    onClick={() => handleLike(story.id)}
                  />
                  <FaThumbsDown
                    className={`mr-2 cursor-pointer transition-colors ${
                      isDisliked(story.id) ? 'text-red-500' : 'text-gray-500'
                    }`}
                    onClick={() => handleDislike(`disliked_${story.id}`)}
                  />
                  <span>{story.likes} Likes</span>
                </div>
                <a
                  href={story.url}
                  className="text-blue-500 hover:underline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeneficiaryStoriesContent;
