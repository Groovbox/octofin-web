import React, { useState } from 'react';
import SettingItem from './SettingItem.jsx';

function SettingsContent({ settings }) {
    const [notification, setNotification] = useState(null);

    const testConnection = async () => {
        try {
            const response = await fetch('/api/settings/jellyfin/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.success) {
                setNotification({ type: 'success', message: 'Server is connected' });
            } else {
                setNotification({ type: 'error', message: 'Failed to connect to server' });
            }
        } catch (error) {
            console.error('Connection test error:', error);
            setNotification({ type: 'error', message: 'Failed to connect to server' });
        }

        // Clear notification after 3 seconds
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <form className="space-y-6 w-[80%]">
            {notification && (
                <div className={`fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                    {notification.message}
                </div>
            )}

            {settings.map(setting => (
                <div key={setting.name} className="my-7">
                    <SettingItem setting={setting} />
                    {setting.name === "jellyfin_api_key" && (
                        <button
                            type="button"
                            onClick={testConnection}
                            className="w-full mt-5 px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl hover:bg-gray-700 transition"
                        >
                            Test Connection
                        </button>
                    )}
                </div>
            ))}
        </form>
    );
}

export default SettingsContent;
