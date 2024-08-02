import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [data, setData] = useState({ channelAdmins: [], teamMembers: [] });

  useEffect(() => {
    // Fetch user data
    const fetchAdminData = async () => {
      try {
        const adminResponse = await fetch('http://localhost:8000/channelAdmins'); // Fetch channel admins
        const memberResponse = await fetch('http://localhost:8000/teamMembers'); // Fetch team members

        const admins = await adminResponse.json();
        const members = await memberResponse.json();

        // Set state with fetched data
        setData({ channelAdmins: admins, teamMembers: members });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="flex-1 w-full h-screen px-4 pt-6 space-y-8 bg-white lg:px-6">
      <div>
        <span className="block text-xs font-semibold tracking-widest text-gray-600 uppercase">Channel Admins</span>
        <div className="pt-2 divide-gray-200 xl:space-y-1">
          {data.channelAdmins.map((admin, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <a href="#" className="flex items-center space-x-3">
                <img src={admin.image} className="w-8 h-8 rounded-full" alt={admin.name} />
                <div>
                  <span className="text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600">{admin.name}</span>
                </div>
              </a>
              <span className={`w-2 h-2 rounded-full ${admin.status === 'online' ? 'bg-green-500' : admin.status === 'away' ? 'bg-yellow-500' : 'bg-gray-300'}`}>&nbsp;</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="block text-xs font-semibold tracking-widest text-gray-600 uppercase">Team Members</span>
        <div className="pt-2 divide-gray-200 xl:space-y-1">
          {data.teamMembers.map((member, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <a href="#" className="flex items-center space-x-3">
                <img src={member.image} className="w-8 h-8 rounded-full" alt={member.name} />
                <div>
                  <span className="text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600">{member.name}</span>
                </div>
              </a>
              <span className={`w-2 h-2 rounded-full ${member.status === 'online' ? 'bg-green-500' : member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-300'}`}>&nbsp;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
