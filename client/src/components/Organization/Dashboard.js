
import React, { useState, useEffect } from 'react';


import OrganizationNavBar from './OrganizationNavBar';
import Footer from '../Donor/Footer';
import MyDonationsModal from './OrganizationModals.js/MyDonationsModal';
import MyEventsModal from './OrganizationModals.js/MyEventsModal';
import MyImpactModal from './OrganizationModals.js/MyImpactModal';
import NotificationsModal from './OrganizationModals.js/NotificationsModal';
import SupportModal from './OrganizationModals.js/SupportModal';
import MyDonations from './MyDonations';
import MyEvents from './MyEvents/MyEvents';
import MyAddedEvents from './MyEvents/MyAddedEvents';
import MyImpact from './MyImpact';
import Notifications from './Notifications';
import Support from './Support';


import {FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {FaBell, FaEdit, FaSignOutAlt,FaMoneyBillAlt, FaCalendarAlt, FaChartPie, FaHeartbeat } from 'react-icons/fa';

import ProfilePicture from '../Donor/Profilepic';





function Dashboard() {



  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [profilePicture, setProfilePicture] = useState("");
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  // const [profilePicture, setProfilePicture] = useState("");
  const [selectedContent, setSelectedContent] = useState(null);
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);
  // const [donationHistory, setDonationHistory] = useState([]);
  // const [donationCount, setDonationCount] = useState(0);


  const handleEditClick = () => {
    setIsEditFormOpen(true);
  }

  const handleSaveClick = () => {
    setIsEditFormOpen(false);
  }

  // Function to handle email change
  const handleEmailChange = (e) => {
  setEmail(e.target.value);
  }

  // Function to handle profile picture change
  const handleProfilePictureChange = (e) => {
  setProfilePicture(e.target.value);
  };

  
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle saving the new profile picture here
  };



return (
   
<div className="flex flex-col min-h-screen bg-fff5e1">
      <div className="flex-grow">
        <div className="">


                                                {/* This is the START OF THE NAVBAR AREA */}

    <div className="bg-[#042a30] text-white py-2  w-full flex-1 fixed">
          <OrganizationNavBar 
          name={name}
          />
    </div>

                                                {/* This is the END OF THE NAVBAR AREA */}


  <div >
    <div className=''>
  {/* ************************************This is the START of the contents related to the Sidebar Container********************************************** */}
  <div className=''>
            {isSidebarOpen && (
         
         <div className="flex-grow flex flex-col md:flex-row  sidebar h-full">
           <div className="w-full md:w-1/5 bg-gray-200 flex-1 fixed top-0 bottom-0 left-0">
           {/* w-1/5 bg-gray-200 flex-1 fixed top-0 bottom-0 left-0 */}
          
           <div className="flex flex-col h-full p-4  bg-[#042a30]">

            {/* Profile Picture ******************************************************************************************************/}

            <div className="flex items-center justify-center mb-4">
            <ProfilePicture
          initialProfilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-FVVaYSFbTMXiC6bUW2O_Vzx0OyauBu_RwRlfQ7iIU5aMvWJ86dpdfvGL7eYThBSkQ0&usqp=CAU"  
          profilePicture={profilePicture}
          setProfilePicture={setProfilePicture}
        />
                 </div>

             {/* Profile Picture Upload *************************************************************************************************/}

         

           {/* ***************************End of Profile Picture Uploads********************************************************************* */}


             {/* Name and Email and Icon EditForm***********************************************************************************************************************/}

             {isEditFormOpen ? (
               <input
                 type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 className="w-full mb-2 px-2 py-1 rounded-md"
               />
             ) : (
               <p className="text-white text-lg font-medium mb-2">{name}</p>
             )}

             {/* Email */}
             {isEditFormOpen ? (
               <input
                 type="email"
                 value={email}
                 onChange={handleEmailChange} // Use the handleEmailChange function to handle email change
                 className="w-full mb-4 px-2 py-1 rounded-md"
               />
             ) : (
               <p className="text-white mb-5">{email}</p>
             )}

             {/* Edit Icon */}
             {isEditFormOpen ? (
               <button
                 className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md"
                 onClick={handleSaveClick}
               >
                 Save
               </button>
             ) : (
               <button
               className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-9 flex items-center justify-center"
               onClick={handleEditClick}
             >
               <FaEdit className="mr-2" />
               Edit
             </button>
             )}


                                                   {/* This are the dashboard Buttons  */}

            <div className="flex flex-col h-full p-4">

{/* ***********************************************My-Donation Button*************************************************************** */}


<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
onClick={() => setSelectedContent('donations')}
>
<FaMoneyBillAlt className="mr-2" />
<span>My Donations</span>
</button>


{/* ***********************************************End of M-Donation Button*************************************************************** */}


{/* ***********************************************My Events Button*************************************************************** */}

<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('my-events')}
  
  >
  <FaCalendarAlt className="mr-2" />
  <span>My Events</span>
</button>



{/* ***********************************************End of HEvents Button*************************************************************** */}

{/* ***********************************************Impact Button*************************************************************** */}
<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
onClick={() => setSelectedContent('my-impact')}
>
<FaChartPie className="mr-2" />
<span>My Impact</span>
</button>

{/* ***********************************************End of impact Button*************************************************************** */}

{/* ***********************************************Notifications Button*************************************************************** */}

<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center mb-4 "
onClick={() => setSelectedContent('notifications')}
>
<FaBell className="mr-2" />
<span>Notifications</span>
</button>


{/* ***********************************************End of Notifications Button*************************************************************** */}

{/* ***********************************************Support Button*************************************************************** */}

<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center"
onClick={() => setSelectedContent('support')}
>
<FaHeartbeat  className="mr-2" />
<span>Support</span>
</button>

{/* ***********************************************END OF Support Button*************************************************************** */}

{/* ***********************************************Logout Button*************************************************************** */}

<a href="/login" 
 className="py-2 mb-2 mt-auto bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center ">
 <FaSignOutAlt className="mr-2" />
 <span>Logout</span>
</a>

{/* ***********************************************End of Logout Button*************************************************************** */}

           </div>

                                         {/* This is the end of the dashboard Buttons  */}

     </div>
   </div>
   </div>
 
 )}


    </div>

{/* ************************************This is the END of the contents related to the Sidebar Container********************************************** */}

                                              



                                              {/* This is the START OF THE CONTENT AREA */}

{/* ******These is where the props are passed from their imported components *************************************************************************************************** */}
<div className='bg-[#f2efc5]'>
<div className='md:pl-80 '>
<div className=" flex-grow flex flex-col py-16  mr-5 overflow-y-auto">
{/* md:pl-80 */}

{/*******************STRAT OF MY Donation Content ********************************************** */}

<div>
{/* Render MyDonations component for each organization and pass the props */}
{selectedContent === 'donations' && <MyDonations/>}
{/* Render MyDonationsModal with welcome message */}
{selectedContent === 'donations' && !isWelcomeShown && <MyDonationsModal setIsWelcomeShown={setIsWelcomeShown}/>}

</div>

{/*******************End of MY Donations Content ********************************************** */}


{/*******************START OF MYEVENTS Content ********************************************** */}

<div className="flex flex-row flex-wrap">
  <div className="w-full lg:w-1/2">
    {selectedContent === 'my-events' && <MyEvents />}
  </div>
  <div className="w-full lg:w-1/2 ">
    {selectedContent === 'my-events' && <MyAddedEvents />}
  </div>
  {selectedContent === 'my-events' && !isWelcomeShown && <MyEventsModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div>


{/*******************End of MYEVENTS Content ********************************************** */}


{/*******************MyImpact Content ********************************************** */}

<div className="">
  {/* use this for styling do not delete its custom css reminder-container */}
  {selectedContent === 'my-impact' &&  <MyImpact/>}
  
  {selectedContent === 'my-impact' && !isWelcomeShown && <MyImpactModal setIsWelcomeShown={setIsWelcomeShown}/>}

</div>

{/*******************End of MyImpact Content ********************************************** */}


{/*******************NOTIFICATIONS Content ********************************************** */}

<div>
{selectedContent === 'notifications' && < Notifications />}

{selectedContent === 'notifications' && !isWelcomeShown && <NotificationsModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div>

{/*******************End of NOTIFICATIONSContent ********************************************** */}

{/*******************STARTof SUPPORT ********************************************** */}

<div>
{selectedContent === 'support' && < Support />}

{selectedContent === 'support' && !isWelcomeShown && <SupportModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div>

{/*******************End of SUPPORT ********************************************** */}


</div>

</div>

{/* ************************************************************************************************************************************************************** */}

                    

                                        {/* This is the END OF THE CONTENT AREA */}
</div>
                                        {/* This is the END OF THE CONTENT AREA AND SIDEBAR */}



                                              {/* Sidebar Toggle Button */}
<div className='fixed right-0 bottom-1/2 mr-1 mb-4 p-2 flex items-center bg-gray-600 rounded-full cursor-pointer'>
<span
className="text-gray-600 text-sm absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 px-2 py-1 rounded-md"
onClick={handleSidebarToggle}
title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
>
{isSidebarOpen ? (
<span>
 Hide Sidebar
<FaChevronLeft className="inline-block ml-1" />
</span>
) : (
<span>
Show Sidebar
<FaChevronRight className="inline-block ml-1" />
</span>
  )}
</span>
</div>
                          
                                            {/* END OF Sidebar Toggle Button */}
    </div>

    </div>

                                                            
                                            {/* START OF FOOTER CONTENT */}

<div className=''>
<Footer/>
</div>

            
                                          {/* This is the END OF FOOTER CONTENT */}
         
        </div>
      </div>
    </div>
  
  );
}
export default Dashboard;




