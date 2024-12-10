import React, { useState } from "react";
import {
  HomeIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  // State to handle notifications dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-gray-800 text-white w-60 h-screen p-4 h-full">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <ul className="mt-6 space-y-4">

        {/* Home Tab */}
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
          <HomeIcon className="h-6 w-6 mr-3 text-gray-400" />
          <span>Home</span>
        </li>

        {/* User Profile */}
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
          <UserCircleIcon className="h-8 w-8 mr-3 text-gray-400" />
          <span>Profile</span>
        </li>

        {/* Transactions Tab */}
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
          <CurrencyDollarIcon className="h-6 w-6 mr-3 text-gray-400" />
          <span>Transactions</span>
        </li>

        {/* Settings Tab */}
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
          <Cog6ToothIcon className="h-6 w-6 mr-3 text-gray-400" />
          <span>Settings</span>
        </li>

        {/* Messages Tab */}
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
          <HomeIcon className="h-6 w-6 mr-3 text-gray-400" />
          <span>Messages</span>
        </li>

        {/* Notifications Tab */}
        <li
          className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BellIcon className="h-6 w-6 mr-3 text-gray-400" />
          <span>Notifications</span>
          {isOpen && (
            <div className="absolute left-16 top-2 bg-white text-black p-2 rounded shadow-md z-10">
              <ul>
                <li className="p-1 hover:bg-gray-200 rounded">New transaction alert</li>
                <li className="p-1 hover:bg-gray-200 rounded">Account security update</li>
                <li className="p-1 hover:bg-gray-200 rounded">Payment failed</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
