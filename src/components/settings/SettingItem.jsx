
import React, { useState, useCallback } from 'react';
import SettingInput from './SettingInput.jsx';
import SettingBool from './SettingBool.jsx';

function SettingItem({ setting }) {
    const [value, setValue] = useState(setting.value);

    // Create a debounced function to save settings
    const debouncedSave = useCallback(
        (() => {
            let timeoutId = null;
            return (newValue) => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    fetch('/api/settings', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: setting.name,
                            value: newValue
                        })
                    })
                        .catch(error => {
                            console.error('Error updating setting:', error);
                        });
                }, 500); // Wait 500ms after last change before sending request
            };
        })(),
        [setting.name]
    );

    const handleChange = (newValue) => {
        setValue(newValue);
        // For boolean values, save immediately
        if (setting.type === 'bool') {
            debouncedSave(newValue);
        } else {
            // For text inputs, use debouncing
            debouncedSave(newValue);
        }
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
                <div className="text-gray-400 text-sm">{setting.description}</div>
            </div>
        );
    }

    return (
        <div className="setting-card">
            <div className="setting-name text-gray-300 text-sm">{setting.display_name}</div>
            <SettingInput type={setting.type} value={value} onChange={handleChange} />
            <div className="text-gray-400 text-sm">{setting.description}</div>
        </div>
    );
}

export default SettingItem;