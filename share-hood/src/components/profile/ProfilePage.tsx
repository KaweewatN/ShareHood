"use client";

import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileMenuItem from './ProfileMenuItem';
import { FaUser, FaCog, FaCreditCard, FaQuestionCircle, FaEnvelope, FaSignOutAlt, FaExchangeAlt } from 'react-icons/fa';

const ProfilePage: React.FC = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    // eslint-disable-next-line no-console
    console.log('Logout');
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <ProfileHeader />
      <div className="mt-6 space-y-3">
        <ProfileMenuItem label="Switch to Owner" icon={FaExchangeAlt} />
        <ProfileMenuItem label="Personal details" icon={FaUser} />
        <ProfileMenuItem label="Settings" icon={FaCog} />
        <ProfileMenuItem label="Payment details" icon={FaCreditCard} />
        <ProfileMenuItem label="FAQ" icon={FaQuestionCircle} />
        <ProfileMenuItem label="Log out" icon={FaSignOutAlt} onClick={handleLogout} />
        <ProfileMenuItem label="Contact Us" icon={FaEnvelope} />
      </div>
    </div>
  );
};

export default ProfilePage;