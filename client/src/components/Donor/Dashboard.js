
import React, { useState, useEffect } from 'react';
import DonorNavBar from './DonorNavBar';
import Footer from './Footer';
import HistoryContent from './HistoryContent';
import NewDonationContent from './NewDonationContent';
import BeneficiaryStoriesContent from './BeneficiaryStoriesContent';
import ReminderContent from './ReminderContent';
import NewDonationModal from './DonorModals.js/NewDonationModal';
import HistoryModal from './DonorModals.js/HistoryModal';
import BeneficiaryModal from './DonorModals.js/BeneficiaryModal';
import ReminderModal from './DonorModals.js/ReminderModal';
import AccountSettings from './AccountSettings';
import Support from './Support';
import SupportModal from './DonorModals.js/SupportModal';
import Notifications from './Notifications';
import NotificationsModal from './DonorModals.js/NotificationsModal';
import TransactionHistory from './TransactionHistory';
import TransactionHistoryModal from './DonorModals.js/TransactionHistoryModal';



import {FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {FaDonate, FaHistory, FaBell, FaHeart, FaEdit, FaSignOutAlt, FaHeartbeat, FaPhoneAlt, FaRegHeart } from 'react-icons/fa';



import ProfilePicture from './Profilepic';

function Dashboard() {

 
 




  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  // const [profilePicture, setProfilePicture] = useState("");
  const [selectedContent, setSelectedContent] = useState(null);
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);
  const [donationHistory, setDonationHistory] = useState([]);
  const [donationCount, setDonationCount] = useState(0);





  
  
 
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

// ************************************************************FOR HANDLING HISTORYCONTENT**********************************************************************


  

// ************************************************************END OF HANDLING HISTORYCONTENT**********************************************************************


// ************************************************************FOR HANDLING NEWDONATION CONTENT**********************************************************************

const [organizations, setorganizations] = useState([]);

const handleNewDonationClick = () => {
  console.log('New-Donation button clicked'); // Add your custom logic here
  setSelectedContent('new-donation');
};


// const handleDonate = (orgId) => {
//   // Implement your logic for handling donation here
// };

// const handleAddToDonationList = (orgId) => {
//   // Implement your logic for adding organization to donation list here
// };

const handleDonate = (orgId) => {

  // setDonationCount(donationCount + 1);

  
  // Find the organization in the list of organizations
  const organization = organizations.find((org) => org.id === orgId);

  // // Update the organization's donation count
  // organization.donationCount = organization.donationCount ? organization.donationCount + 1 : 1;

  // Update the state with the updated organization data
  setorganizations((prevOrganizations) =>
    prevOrganizations.map((org) => (org.id === orgId ? organization : org))
  );
};

const handleAddToDonationList = (orgId) => {
  // Find the organization in the list of organizations
  const organization = organizations.find((org) => org.id === orgId);

  // Add the organization to the donation history
  setDonationHistory((prevDonationHistory) => {
    // Check if the organization is already in the history
    const existingOrg = prevDonationHistory.find((org) => org.id === orgId);
    if (existingOrg) {
      // If organization already exists, update its donation count
      return prevDonationHistory.map((org) =>
        org.id === orgId ? { ...org, donationCount: org.donationCount + 1 } : org
      );
    } else {
      // If organization doesn't exist in history, add it
      return [...prevDonationHistory, { ...organization, donationCount: 1 }];
    }
  });
};



  useEffect(() => {
    // Fetch organizations data from backend API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/organizations');
        const data = await response.json();
        // Update state with fetched data
        setorganizations(data);
      } catch (error) {
        console.error('Failed to fetch organizations data:', error);
      }
    };

    fetchData();
  }, []); 


// ************************************************************END OF HANDLING NEWDONATION CONTENT**********************************************************************

 
// ************************************************************FOR HANDLING REMINDER CONTENT**********************************************************************
  const [reminders, setReminders] = useState([]);

  const handleReminderClick = () => {
    console.log('reminder button clicked'); // Add your custom logic here
    setSelectedContent('reminder');
  };
 
  useEffect(() => {
    // Fetch organizations data from backend API
    const fetchData = async () => {
      try {
        const response = await fetch(' http://localhost:5000/reminders');
        const data = await response.json();
        // Update state with fetched data
        setReminders(data);
      } catch (error) {
        console.error('Failed to fetch organizations data:', error);
      }
    };

    fetchData();
  }, []); 

  

  function handleReminder(reminder) {
    console.log('Reminder:', reminder);
  }

  function handleAddToReminderList(reminder) {
    console.log('Added to reminder list:', reminder);
  }

// ************************************************************END OF HANDLING REMINDERS CONTENT**********************************************************************

  
// ************************************************************FOR HANDLING HISTORYCONTENT**********************************************************************

const [profilePicture, setProfilePicture] = useState("");


 
// const [profilePicture, setProfilePicture] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle saving the new profile picture here
  };



  function handleHistoryClick() {
    // Create a list of organization IDs from the donation history
    const orgIds = donationHistory.map((org) => org.id);
  
    // Fetch details of each organization using its ID
    orgIds.forEach(async (orgId) => {
      try {
        const response = await fetch(`http://localhost:5000/organizations/${orgId}`);
        const data = await response.json();
        console.log('Organization details:', data);
        // Add code here to update the UI with the organization details
      } catch (error) {
        console.error(`Failed to fetch organization details for ID ${orgId}:`, error);
      }
    });
  }
  
  
 
{/* ***********************************************Beneficiaries Stories *************************************************************** */}

// const [Beneficiaries, setBeneficiaries] = useState([]);

const [stories, setStories] = useState([]);

const handleBeneficiaryClick = () => {
  console.log('beneficiary button clicked');
  setSelectedContent('beneficiary-stories');
};
 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/stories');
      const data = await response.json();
      setStories(data);
    } catch (error) {
      console.error('Failed to fetch beneficiary-stories data:', error);
    }
  };
  fetchData();
}, []);

function handleBeneficiary(beneficiary) {
  console.log('Beneficiary:', beneficiary);
}


{/* ***********************************************End of Beneficiaries Stories *************************************************************** */}


return (
   
<div className="flex flex-col min-h-screen bg-fff5e1">
      <div className="flex-grow">
        <div className="">


                                                {/* This is the START OF THE NAVBAR AREA */}

    <div className="bg-[#464931] text-white py-2  w-full flex-1 fixed">
          <DonorNavBar 
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
          
           <div className="flex flex-col h-full p-4  bg-[#464931] ">

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

{/* ***********************************************New-Donation Button*************************************************************** */}


<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
onClick={handleNewDonationClick} // Add the onClick event handler here
>
<FaDonate className="mr-2" />
<span>New-Donation</span>
</button>


{/* ***********************************************End of New-Donation Button*************************************************************** */}

{/* ***********************************************Transactions Button*************************************************************** */}


<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('my-transactions')}
  
  >
  <FaHistory className="mr-2" />
  <span> My-Transaction</span>
</button>


{/* ***********************************************End of Transactions Button*************************************************************** */}




{/* ***********************************************Reminder Button*************************************************************** */}
<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
onClick={handleReminderClick}>
<FaBell className="mr-2" />
<span>Reminder</span>
</button>

{/* ***********************************************End of Reminder Button*************************************************************** */}

{/* ***********************************************Beneficiaries Stories Button*************************************************************** */}

<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
// onClick={() => setSelectedContent('beneficiary-stories')}
onClick={handleBeneficiaryClick}
>
<FaHeart className="mr-2" />
<span>Beneficiary Stories</span>
</button>


{/* ***********************************************End of Beneficiary Stories Button*************************************************************** */}


{/* ***********************************************Notifications Button*************************************************************** */}

<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center mb-4 "
onClick={() => setSelectedContent('notifications')}
>
<FaBell className="mr-2" />
<span>Notifications</span>
</button>


{/* ***********************************************End of Notifications Button*************************************************************** */}


{/* ***********************************************History Button*************************************************************** */}

{/* <button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('history')}
  
  >
  <FaHistory className="mr-2" />
  <span>History</span>
</button> */}



{/* ***********************************************End of History Button*************************************************************** */}


{/* ***********************************************Support Button*************************************************************** */}

<button
className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center mb-4"
onClick={() => setSelectedContent('support')}
>
<FaPhoneAlt  className="mr-2" />
<span>Support</span>
</button>

{/* ***********************************************END OF Support Button*************************************************************** */}


{/* ***********************************************Logout Button*************************************************************** */}

<a href="/donor-login" 
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
<div className=''>
<div className='md:pl-80 '>
  

<div className=" flex-grow flex flex-col py-20  mr-5 overflow-y-auto">
{/* md:pl-80 */}

{/*******************NewDonation Content ********************************************** */}

<div>
{/* Render NewDonationContent component for each organization and pass the props */}
{selectedContent === 'new-donation' &&
organizations.map((org) => (
<NewDonationContent
key={org.id}
organization={org}
onDonate={handleDonate}
onAddToDonationList={handleAddToDonationList}
// organization={selectedContent.organization}


/>
))}
{/* Render NewDonationModal with welcome message */}
{selectedContent === 'new-donation' && !isWelcomeShown && <NewDonationModal setIsWelcomeShown={setIsWelcomeShown}/>}

</div>

{/*******************End of NewDonation Content ********************************************** */}

{/*******************HISTORY Content ********************************************** */}
<div>
{selectedContent === 'history' && 
// donationHistory.map((donation, index) => (
<HistoryContent 
// key={index}
// donation={donation}
onDonate={handleDonate}
donationHistory={donationHistory}/>
}

{selectedContent === 'history' && !isWelcomeShown && < HistoryModal 
setIsWelcomeShown={setIsWelcomeShown}


/>}
</div>

{/*******************End of Hitory Content ********************************************** */}

{/*******************ReminderContent Content ********************************************** */}

<div className="reminder-container">
  {selectedContent === 'reminder' && reminders.map((reminder) => (
    <ReminderContent
      key={reminder.id}
      reminder={reminder}
      onReminder={handleReminder}
      onAddToReminderList={handleAddToReminderList}
    />
  ))}
  
  {selectedContent === 'reminder' && !isWelcomeShown && <ReminderModal setIsWelcomeShown={setIsWelcomeShown}/>}
  

</div>

{/*******************End of ReminderContent Content ********************************************** */}


{/*******************Beneficiary Stories Content ********************************************** */}

<div>
{selectedContent === 'beneficiary-stories' && 
<BeneficiaryStoriesContent 
stories={stories} 



/>
}

{selectedContent === 'beneficiary-stories' && !isWelcomeShown && < BeneficiaryModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div>


{/*******************End of Benficiary Content ********************************************** */}

{/*******************NOTIFICATIONS Content ********************************************** */}

<div>
  <>
  {selectedContent === 'notifications' && < Notifications />}
  </>

{selectedContent === 'notifications' && !isWelcomeShown && <NotificationsModal setIsWelcomeShown={setIsWelcomeShown}/>}
</div>

{/*******************End of NOTIFICATIONSContent ********************************************** */}

{/*******************NOTIFICATIONS Content ********************************************** */}

<div>
  <>
  {selectedContent === 'my-transactions' && < TransactionHistory />}
  </>

{selectedContent === 'my-transactions' && !isWelcomeShown && <TransactionHistoryModal setIsWelcomeShown={setIsWelcomeShown}/>}
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
                          
                                            {/* Sidebar Toggle Button */}
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




