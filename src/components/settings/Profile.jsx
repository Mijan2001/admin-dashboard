import React from 'react';
import SettingSection from './SettingSection';
import { User } from 'lucide-react';

const Profile = () => {
    return (
        <SettingSection title="Profile" icon={User}>
            <div className="flex flex-col sm:flex-row items-center mb-6">
                <img
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="profile"
                    className="w-20 h-20 rounded-full bg-gray-800 bg-opacity-50 object-cover mr-4"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-100">
                        John Doe
                    </h3>
                    <p>john.doe@example.com</p>
                </div>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 sm:w-auto">
                Edit Profile
            </button>
        </SettingSection>
    );
};

export default Profile;
