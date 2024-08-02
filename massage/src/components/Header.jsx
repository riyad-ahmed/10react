import React, { useEffect,useState } from 'react';

const Header = () => {
    const [user, setUser] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);


  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8000/user'); // Adjust the endpoint as needed
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);



  return (
    <div className="flex px-6 py-3 bg-white border-b border-gray-200 justify-between h-16">
      <div className="relative hidden w-1/2 md:block -top-1">
        <div className="flex items-center justify-between space-x-4">
          <form action="" className="relative flex-1">
            <input
              type="text"
              placeholder="Search term..."
              className="block w-full py-3 pl-12 placeholder-gray-400 transition-colors duration-300 border-0 border-transparent peer focus:border-transparent ring-transparent focus:ring-transparent focus:ring-opacity-80 text-sm"
            />
            <button className="absolute flex items-center justify-center w-8 h-8 p-1 text-gray-600 transition-all duration-300 bg-transparent rounded-full left-3 top-2 hover:bg-gray-100 peer-focus:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="relative inline-flex items-center justify-center w-10 h-10 text-gray-600 transition-all duration-300 scale-100 bg-transparent rounded-full hover:scale-105 hover:text-blue-600 hover:-rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute w-2 h-2 bg-red-500 rounded-full top-2 right-3">&nbsp;</span>
        </button>
        <div className="relative" onBlur={() => setIsProfileMenuOpen(false)}>
          <button
            className="inline-flex space-x-3 text-gray-700 duration-300 scale-100 h hover:text-blue-600"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
             {user ? (
                <>
                    <img src={user.profileImage} alt="User" className="w-10 h-10 rounded-full" />
                    <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                        {user.name}
                    </span>
                    <span className="relative block text-xs text-gray-700">{user.email}</span>
                    </div>
                </>
                ) : (
              <span>Loading...</span>
            )}
          </button>

          {isProfileMenuOpen && (
            <ul
              className="absolute z-20 w-40 py-1 mt-2 text-sm font-semibold text-gray-700 transition-all origin-top-right bg-white rounded shadow -right-2 lg:w-64"
              style={{
                transform: isProfileMenuOpen ? 'scale(1)' : 'scale(0.75)',
                opacity: isProfileMenuOpen ? 1 : 0,
              }}
            >
              <li>
                <a href="/" className="block px-3 py-3 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-600">
                  My Profile
                </a>
              </li>
              <li>
                <a href="/" className="block px-3 py-3 transition-colors duration-300 border-b hover:bg-gray-100 hover:text-blue-600">
                  Register
                </a>
              </li>
              <li>
                <a href="/" className="block px-3 py-3 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-600">
                  Log out
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
