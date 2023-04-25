// import React from 'react'

// function MyImpactStories() {
//   return (
//     <div>MyImpactStories</div>
//   )
// }

// export default MyImpactStories



import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaMapMarkerAlt } from 'react-icons/fa';

function MyImpactStories() {
  const [stories, setstories] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedstory, setSelectedstory] = useState(null);
  const [formData, setFormData] = useState({
    blogurl:'',
    name:'',
    location: '',
    title: '',
    time: '',
    summary: '',
    image: null
  });

  useEffect(() => {
    // fetch stories from your database
    fetch('http://localhost:5000/stories')
      .then(response => response.json())
      .then(data => setstories(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    // DELETE fetch to delete the story
    fetch(`/api/stories/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          const updatedstories = stories.filter(story => story.id !== id);
          setstories(updatedstories);
        }
      })
      .catch(error => console.log(error));
  }

  const handleEdit = (story) => {
    setSelectedstory(story);
    setFormData({
      blogurl:story.blogurl,
      name:story.name,
      location: story.location,
      title: story.title,
      date: story.date,
      summary: story.summary,
      image: story.image
    });
    setEditModalOpen(true);
  }

  const handleFormChange = (story) => {
    if (story.target.name === 'image') {
      setFormData({
        ...formData,
        image: URL.createObjectURL(story.target.files[0])
      });
    } else {
      setFormData({
        ...formData,
        [story.target.name]: story.target.value
      });
    }
  }

  const handleSave = () => {
    // PATCH fetch to update the story
    fetch(`/api/stories/${selectedstory.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        const updatedstories = stories.map(story => {
          if (story.id === selectedstory.id) {
            return data;
          } else {
            return story;
          }
        });
        setstories(updatedstories);
        setEditModalOpen(false);
      })
      .catch(error => console.log(error));
  }
  return (
<div className="mt-6 bg-[#f2efc5]  ">

<div className=''> 

<div className="grid gap-2 md:gap-4">
<h1 className="text-3xl font-bold text-center py-4 cardevent">My Added Stories</h1>
  {stories.map((story) => (
    <div key={story.id} className=" cardevent mb-4 p-4 border-b border-gray-200 flex items-start">
      {story.image && (
        <div className="mr-4 flex-none">
          <img
            src={story.image}
            alt={story.title}
            className="w-32 rounded-md shadow-md"
          />
        </div>
      )}
      <div className="flex-1 gap-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium mb-2">{story.title}</h2>
          <div className="flex gap-2">
  <div className=" rounded-md p-2">
    <p className="text-gray-800"><strong>Date Added:</strong> {story.date}</p>
  </div>
  
</div>

{/* <div className=" rounded-md p-2">
    <p className="text-gray-800"><strong>Blog:</strong> {story.blogurl}</p>
  </div> */}


        </div>
        {/* <div className="bg-gray-100 rounded-md p-2 mt-2 water-effect">
  <p className="text-gray-800">{story.summary}</p>
</div> */}

<div className="bg-gray-100 rounded-md p-2 mt-2 shadow-md" style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}>
  <p className="text-gray-800">{story.summary}</p>
</div>

<div className="mt-4 flex justify-end">
  <div className="bg-gray-100 rounded-md p-2 mt-2 shadow-md flex items-center" style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}>
    <FaMapMarkerAlt className="mr-2 text-gray-500" />
    <p className="text-gray-800">{story.location}</p>
  </div>

  <div className="ml-auto">
    <button onClick={() => handleEdit(story)} className="mr-2 text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
    <button onClick={() => handleDelete(story.id)} className="text-red-500 hover:text-red-700"><FaTrash/>Delete</button>
  </div>
</div>

      </div>
    </div>
  ))}
</div>
</div>




  
  {editModalOpen && (
    <div className="fixed z-10 inset-0 overflow-y-auto " >
      <div className="flex items-center justify-center max-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block impact-modal align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        style={{ width: '600px', height: '400px' }}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
            <h2 className="text-lg font-medium mb-4">Edit story</h2>
            <form>
            <label className="block mb-2">Organization's Name:</label>
              <input type="name" name="name" value={formData.name} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Title:</label>
              <input name="title" value={formData.title} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Date:</label>
              <input type="date" name="date" value={formData.date} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Time:</label>
              <input type="time" name="time" value={formData.time} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Location:</label>
              <input type="location" name="time" value={formData.location} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">Blog URL:</label>
              <input type="url" name="blogurl" value={formData.blogurl} onChange={handleFormChange} className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" />
              <label className="block mb-2">summary:</label>
              <textarea name="summary" value={formData.summary} onChange={handleFormChange}


    className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full" rows="4"></textarea>
<label className="block mb-2">Image:</label>
<input type="file" name="image" onChange={handleFormChange} className="mb-4" />
{formData.image && (
<div className="mt-4">

</div>
)}
<div className="mt-4 flex justify-end">
<button
               type="button"
               onClick={handleSave}
               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
             >
Save
</button>
<button
type="button"
onClick={() => setEditModalOpen(false)}
className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
>
Cancel
</button>
</div>
</form>
</div>
</div>
</div>
</div>


)}
</div>


  );
      }

      export default MyImpactStories;
