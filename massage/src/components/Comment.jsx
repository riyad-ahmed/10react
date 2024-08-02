import React from 'react';

const Comment = ({ userImage, userName, timeAgo, message, actions }) => {
  return (
    <div className="flex items-start col-span-1 pt-3 space-x-3">
      <img src={userImage} className="w-12 h-12 rounded-full" alt={userName} />
      <div className="flex-1">
        <div className="px-4 py-4 bg-white border rounded-md border-gray-50 lg:px-6 lg:pb-6">
          <div className="flex items-end justify-between pb-3">
            <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
              {userName}
            </span>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="block text-xs font-semibold tracking-wider text-gray-600 uppercase">
                {timeAgo}
              </span>
            </div>
          </div>
          <p className="block text-sm text-gray-700">{message}</p>
        </div>
        {/* Quick actions */}
        <div className="flex items-center pt-3 pb-3 space-x-3 border-b border-gray-50">
          <div className="flex items-center space-x-1 text-gray-800">
            {actions.map((action, index) => (
              <button
                key={index}
                type="button"
                className="px-2 py-1 text-sm duration-500 scale-100 bg-white border rounded-lg border-gray-50 h-9 hover:scale-105 hover:-rotate-12 hover:text-blue-600"
              >
                {action.icon}
                <span>{action.count}</span>
              </button>
            ))}
          </div>
        </div>
        {/* / Quick actions */}
      </div>
    </div>
  );
};

export default Comment;
