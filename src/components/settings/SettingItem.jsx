// src/components/SettingItem.jsx
import React, { useState } from 'react';
import SettingInput from './SettingInput.jsx';
import SettingBool from './SettingBool.jsx';

function SettingItem({ setting }) {
    const [value, setValue] = useState(setting.value);

    const handleChange = (newValue) => {
        setValue(newValue);
        // Optionally: trigger a save or callback here
    };

    if (setting.type === 'bool') {
        return (
            <div className="setting-card">
                <SettingBool
                    id={setting.name}
                    label={setting.display_name}
                    value={value}
                    onChange={handleChange}
                />
                <div className="text-gray-400 text-sm" >{setting.description}</div>
            </div>
        );
    }

    // For string, path, url, integer
    return (
        <div className="setting-card">
            <div className="setting-name text-gray-300 text-sm">{setting.display_name}</div>
            <SettingInput
                type={setting.type}
                value={value}
                onChange={handleChange}
            />
            <div className="text-gray-400 text-sm">{setting.description}</div>
        </div>
    );
}

export default SettingItem;
