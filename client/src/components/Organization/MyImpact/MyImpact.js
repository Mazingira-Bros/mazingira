

import React, { useState } from 'react';

function MyImpact() {
  const [stories, setstories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [storyAdded, setstoryAdded] = useState(false);
  const [story, setstory] = useState({
    blogurl: '',
    name: '',
    location:'',
    title:'',
    date: '',
    image: '',
    summary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstory(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.prstoryDefault();
  
    // POST fetch to your database
    fetch('/api/stories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(story),
    })
      .then(response => response.json())
      .then(data => {
        setstories(prevState => [...prevState, data]);
        setstory({
          blogurl: '',
          name: '',
          location:'',
          title:'',
          date: '',
          image: '',
          summary: '',
        });
        handlestoryAdded();
      })
      .catch(error => console.log(error));
  }

  const handlestoryAdded = () => {
    setstoryAdded(true);
    setShowForm(false);
  }
  

  const handleEdit = (id) => {
    // find the story to edit
    const storyToEdit = stories.find(story => story.id === id);
    setstory(storyToEdit);
  }

 



  const handleUpdate = (e) => {
    e.prstoryDefault();

    // PUT fetch to update the story
    fetch(`/api/stories/${story.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(story),
    })
      .then(response => response.json())
      .then(data => {
        const updatedstories = stories.map(story => {
          if (story.id === data.id) {
            return data;
          }
          return story;
        });
        setstories(updatedstories);
        setstory({
          blogurl: '',
          name: '',
          location:'',
          title:'',
          date: '',
          image: '',
          summary: '',
        });
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
    <div className="p-6">
      {showForm ? (
        <>
          <form onSubmit={handleSubmit}>
            {/* INPUT FIELDS */}

    <div className="flex flex-col">
       <label htmlFor="title" className="text-lg font-medium leading-6 text-gray-900">Story Title</label>
     <input
      type="text"
      name="title"
      value={story.title}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the title"
    />
  </div>


  <div className="flex flex-col mt-4">
    <label htmlFor="date" className="text-lg font-medium leading-6 text-gray-900">Date Posted</label>
    <input
      type="date"
      name="date"
      value={story.date}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the date"
    />
  </div>

  <div className="flex flex-col mt-4">
    <label htmlFor="blog-url" className="text-lg font-medium leading-6 text-gray-900">BLOG URL</label>
    <input
      type="blog"
      name="blog-url"
      value={story.blogurl}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter your Blog URL"
    />
  </div>

  <div className="flex flex-col mt-4">
    <label htmlFor="name" className="text-lg font-medium leading-6 text-gray-900">Organization's name</label>
    <input
      type="name"
      name="name"
      value={story.name}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter your organization's name"
    />
  </div>

 
  <div className="flex flex-col mt-4">
    <label htmlFor="summary" className="text-lg font-medium leading-6 text-gray-900">summary</label>
    <textarea
      name="summary"
      value={story.summary}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the summary"
    ></textarea>
  </div>

  <div className="flex flex-col ">
    <label htmlFor="image" className="text-lg font-medium leading-6 text-gray-900">Location</label>
    <input
      type="text"
      name="location"
      value={story.location}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter location of the community impacted"
    />

<label className="block mt-4 text-lg font-medium leading-6 text-gray-900">Image:</label>
<input type="file" name="image" onChange={handleChange} className="mb-4" />
{story.image && (
<div className="mt-4">

</div>
)}
  </div>

  


  {/* CLOSE FORM AND SHOW story ADDED BUTTON */}
  <button type="submit" onClick={() => setShowForm(false)} className="py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
  {storyAdded ? 'story Added' : 'Add story'}
</button>

          </form>
         
        </>
      ) : (
        <button type="button" onClick={() => setShowForm(true)} className="py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
          Add story
        </button>
      )}
    </div>
  </div>
);
}

export default MyImpact;