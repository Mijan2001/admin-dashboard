import React, { useState } from 'react';
import SettingSection from './SettingSection';
import ToggleSwitch from './ToggleSwitch';
import { Bell } from 'lucide-react';

const Notification = () => {
    const [notifications, setNotifications] = useState({
        push: true,
        email: false,
        sms: false
    });
    return (
        <SettingSection title="Notification" icon={Bell}>
            <ToggleSwitch
                Label={'Push Notification'}
                isOn={notifications.push}
                onToggle={() =>
                    setNotifications({
                        ...notifications,
                        push: !notifications.push
                    })
                }
            />

            <ToggleSwitch
                Label={'Email Notification'}
                isOn={notifications.email}
                onToggle={() =>
                    setNotifications({
                        ...notifications,
                        email: !notifications.email
                    })
                }
            />

            <ToggleSwitch
                Label={'SMS Notification'}
                isOn={notifications.sms}
                onToggle={() =>
                    setNotifications({
                        ...notifications,
                        sms: !notifications.sms
                    })
                }
            />
        </SettingSection>
    );
};

export default Notification;
