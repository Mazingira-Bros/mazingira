import react from 'react'

function Navbar() {
    return (
        <div className='navBar flex justify-between items-centre p-[3rem]'>
          <div className='logoDiv'>
            <h1 className='logo text-[25px] text-blueColor'>
                <strong>Job</strong>Search</h1>
          </div>
          <div className='menu flex gap-8'>
            <li className='menuList text-[#6f6f6f] hover:text-blue-700'>Log In</li>
           

          </div>
        </div>
    )
}

export default Navbar