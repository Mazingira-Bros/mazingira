import React from 'react'

export const OrganizationNavBar = (props) => {
  return (
    <nav className=""> {/* Update rounded class to "rounded-lg" */}
      <div className="flex justify-center items-center px-4">
        <ul className="flex items-center space-x-4">
          <li className="list-none">
            {/* <a href="/donor-dashboard" className="bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] font-semibold py-2 px-4 rounded-full">
              Home
            </a> */}
          </li>
          <li className="list-none">
            {/* <Search /> */}
          </li>
          <li className="list-none">
            {/* <Filter /> */}
          </li>
        </ul>
        <div className="p-4">
          <p>Hello, {props.name}! Welcome to your Organisation dashboard! Here you can manage your account settings, manage beneficiary stories, and update organization details.</p>
        </div>
      </div>
    </nav>
  )
}
