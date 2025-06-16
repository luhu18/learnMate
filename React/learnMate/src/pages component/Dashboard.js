import React from 'react';

function DashboardPage() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome to your personalized dashboard! Here you can see your progress, enrolled courses, and more.</p>
      <ul>
        <li>Enrolled Course: Web Development Basics</li>
        <li>Progress: 75%</li>
        <li>Upcoming Lesson: React Hooks</li>
      </ul>
      <button>Go to My Courses</button>
    </div>
  );
}

export default DashboardPage;