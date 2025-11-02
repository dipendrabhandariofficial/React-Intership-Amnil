import React from 'react'
import { ActivitySquare } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">This is Dashboard</h3>
          <p className="text-gray-600">Dashboard content and statistics will be displayed here</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard