import React, { useState } from 'react';
import SettingSection from './SettingSection';
import ToggleSwitch from './ToggleSwitch';
import { Lock } from 'lucide-react';

const Security = () => {
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <SettingSection title="Security" icon={Lock}>
            <ToggleSwitch
                Label={'Two Factor Authentication'}
                isOn={true}
                onToggle={() => setTwoFactor(!twoFactor)}
            />
            <div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                    Change Password
                </button>
            </div>
        </SettingSection>
    );
};

export default Security;
