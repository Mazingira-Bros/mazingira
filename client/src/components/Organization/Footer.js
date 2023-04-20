import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="flex items-center justify-center bg-gray-200 p-4">
        <div className="w-1/2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-4">
              <FaFacebook className="text-2xl text-gray-600" />
            </span>
            <span className="mr-4">
              <FaInstagram className="text-2xl text-gray-600" />
            </span>
            <span>
              <FaTwitter className="text-2xl text-gray-600" />
            </span>
          </div>
          <div>
            <span className="text-gray-600">© 2023 Mazingira. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer