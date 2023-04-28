// import React from 'react'

// function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard






// import OrganizationNavBar from './OrganizationNavBar';

// import MyDonationsModal from './OrganizationModals/MyDonationsModal';
// import MyEventsModal from './OrganizationModals/MyEventsModal';
// import MyImpactModal from './OrganizationModals/MyImpactModal';

// import MyDonations from './MyDonations';
// import MyEvents from './MyEvents/MyEvents';
// import MyAddedEvents from './MyEvents/MyAddedEvents';
// import MyImpact from './MyImpact/MyImpact';

// import MyImpactStories from './MyImpact/MyImpactStories';

// import AccountSettingsModal from './OrganizationModals/AccountSettingsModal';

import React, { useState, useEffect } from 'react';

import AdminNavBar from './AdminNavBar';
import Footer from '../Donor/Footer';
import Notifications from './Notifications';
import Support from './Support';
import AccountSettings from './AccountSettings';
import ProfilePicture from '../Donor/Profilepic';
import Analytics from './Analytics';
import ContentManagement from './ContentManagement';
import DonorManagement from './DonorManagement';
import UserManagement from './UserManagement';


import AnalyticsModal from './AdminModals/AnalyticsModal';
import ContentManagementModal from './AdminModals/ContentManagementModal';
import DonorManagementModal from './AdminModals/DonorManagementModal';
import UserManagementModal from './AdminModals/UserManagementModal';
import NotificationsModal from './AdminModals/NotificationsModal';
import SupportModal from './AdminModals/SupportModal';




import {FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {FaBell, FaEdit, FaSignOutAlt,FaMoneyBillAlt, FaCalendarAlt, FaChartPie, FaHeartbeat, FaPhoneAlt, FaFileAlt, FaUsers, FaUserCog } from 'react-icons/fa';







function Dashboard() {




  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [profilePicture, setProfilePicture] = useState("");
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [selectedContent, setSelectedContent] = useState(null);
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);





  const handleAccountSettingsClick = () => {
    setSelectedContent('account-settings');
  };

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

    <div className="bg-[#000000] text-white py-2  w-full flex-1 fixed">
          <AdminNavBar
          name={name}
          onAccountSettingsClick={handleAccountSettingsClick}
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

           <div className="flex flex-col h-full p-4  bg-[#000000]">

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

{/* ***********************************************My-Analytics Button*************************************************************** */}


<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
onClick={() => setSelectedContent('analytics')}
>
<FaChartPie className="mr-2" />
<span>Analytics</span>
</button>


{/* ***********************************************End of Analtics Button*************************************************************** */}


{/* ***********************************************My Content-Management Button*************************************************************** */}

<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('content-management')}

  >
  <FaFileAlt className="mr-2" />
  <span>Content-Management</span>
</button>



{/* ***********************************************End of Content Mnagement Button*************************************************************** */}

{/* ***********************************************Donor Management Button*************************************************************** */}
<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
onClick={() => setSelectedContent('donor-management')}
>
<FaUsers className="mr-2" />
<span>Donor-Management</span>
</button>

{/* ***********************************************End of Donor Management Button*************************************************************** */}

{/* ***********************************************User Management Button*************************************************************** */}
<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
onClick={() => setSelectedContent('user-management')}
>
<FaUserCog className="mr-2" />
<span>User-Management</span>
</button>

{/* ***********************************************End of User Management Button*************************************************************** */}

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
<FaPhoneAlt  className="mr-2" />
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
<div className='md:pl-80'>
<div className=" flex-grow flex flex-col  py-20  mr-5 overflow-y-auto">
{/* md:pl-80 */}

{/*******************STRAT OF MY Analytics Content ********************************************** */}

<div>
{/* Render MyDonations component for each organization and pass the props */}
{selectedContent === 'analytics' && <Analytics/>}
{/* Render MyDonationsModal with welcome message */}
{selectedContent === 'analytics' && !isWelcomeShown && <AnalyticsModal setIsWelcomeShown={setIsWelcomeShown}/>}

</div>

{/*******************End of MY Analytics Content ********************************************** */}


{/*******************STRAT OF MY content-management Content ********************************************** */}

<div>
{/* Render MyDonations component for each organization and pass the props */}
{selectedContent === 'content-management' && <ContentManagement/>}
{/* Render MyDonationsModal with welcome message */}
{selectedContent === 'content-management' && !isWelcomeShown && <ContentManagementModal setIsWelcomeShown={setIsWelcomeShown}/>}

</div>

{/*******************End of MY content-management Content ********************************************** */}




{/*******************STRAT OF MY donor-management Content ********************************************** */}

<div>
{/* Render MyDonations component for each organization and pass the props */}
{selectedContent === 'donor-management' && <DonorManagement/>}
{/* Render MyDonationsModal with welcome message */}
{selectedContent === 'donor-management' && !isWelcomeShown && <ContentManagementModal setIsWelcomeShown={setIsWelcomeShown}/>}

</div>

{/*******************End of MY donor-management Content ********************************************** */}


{/*******************STRAT OF MY user-management Content ********************************************** */}

<div>
{/* Render MyDonations component for each organization and pass the props */}
{selectedContent === 'user-management' && <UserManagement/>}
{/* Render MyDonationsModal with welcome message */}
{selectedContent === 'user-management' && !isWelcomeShown && <UserManagementModal setIsWelcomeShown={setIsWelcomeShown}/>}

</div>

{/*******************End of MY donor-management Content ********************************************** */}



{/*******************NOTIFICATIONS Content ********************************************** */}

<div>
  <>
  {selectedContent === 'notifications' && < Notifications />}
  </>

{selectedContent === 'notifications' && !isWelcomeShown && <NotificationsModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div>

{/*******************End of NOTIFICATIONSContent ********************************************** */}

{/*******************STARTof SUPPORT ********************************************** */}

<div>
{selectedContent === 'support' && < Support />}

{selectedContent === 'support' && !isWelcomeShown && <SupportModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div>

{/*******************End of SUPPORT ********************************************** */}

{/*******************STARTf ACCOUNT SETTINGS ********************************************** */}


<div>
      {selectedContent === 'account-settings' && ( <AccountSettings />)}
</div>

 {/* <div>
{selectedContent === 'account-settings' && < AccountSettings />}

{selectedContent === 'account-settings' && !isWelcomeShown && <AccountSettingsModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div> */}

{/*******************End of ACCOUNT SETTINGS ********************************************** */}


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




