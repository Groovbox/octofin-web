import React from 'react';
import SettingItem from './SettingItem.jsx';

function SettingsContent({ settings }) {
    return (
        <form className="space-y-6 w-[80%]">
            {settings.map(setting => (
                <div key={setting.name} className="my-7">
                    <SettingItem setting={setting} />
                    {setting.name === "jellyfin_api_key" && (
                        <button
                            type="button"
                            onClick={() => console.log("Testing connection...")}
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
