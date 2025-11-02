import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { MdDashboard, MdInventory, MdSettings } from 'react-icons/md';
import { BsBasket } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { GiMeal } from 'react-icons/gi';
import { FaUsers, FaUserTie } from 'react-icons/fa';
import { RiFileChartLine } from 'react-icons/ri';
import { AiOutlineAreaChart } from 'react-icons/ai';

export default function Sidebar() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();
    console.log(user);
    

    const menuItems = [
        { path: '/dashboard', name: 'Dashboard', icon: MdDashboard },
        { path: '/orders', name: 'Orders', icon: BsBasket },
        { path: '/reservations', name: 'Reservations', icon: SlCalender },
        { path: '/menu', name: 'Menu Management', icon: GiMeal },
        { path: '/inventory', name: 'Inventory', icon: MdInventory },
        { path: '/staff', name: 'Staff', icon: FaUserTie },
        { path: '/customers', name: 'Customers', icon: FaUsers },
        { path: '/reports', name: 'Reports', icon: RiFileChartLine },
        { path: '/analytics', name: 'Analytics', icon: AiOutlineAreaChart },
        { path: '/settings', name: 'Settings', icon: MdSettings },
    ];

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // Helper component for menu items
    const MenuItem = ({ item }) => {
        const Icon = item.icon;
        return (
            <NavLink
                to={item.path}
                className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`
                }
            >
                {Icon && <Icon className="w-5 h-5" />}
                <span className="truncate">{item.name}</span>
            </NavLink>
        );
    };

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
            {/* Logo / Header */}
            <div className="p-6 border-b border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                    R
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-900">RestaurantDB</h1>
                    <p className="text-xs text-gray-500">Admin Panel</p>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <MenuItem key={item.path} item={item} />
                ))}
            </nav>

            {/* User info + logout */}
          <div className="flex flex-col p-4 border-t border-gray-200">
  {/* User Info */}
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-3">
    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold border">
      {user?.name?.charAt(0) || 'A'}
    </div>
    <div className="flex-1 overflow-hidden align-middle">
      <p className="text-sm font-medium text-gray-900 truncate">
        {user?.name || 'Admin User'}
      </p>
      <p className="text-xs text-gray-500 truncate items-center">
        {user?.role || 'admin@restaurant.com'}
      </p>
    </div>
  </div>

  {/* Logout Button */}
  <button
    onClick={handleLogout}
    className="w-full bg-amber-600 text-white font-medium flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
  >
    Logout
  </button>
</div>

        </aside>
    );
}
