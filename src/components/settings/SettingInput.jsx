// src/components/SettingInput.jsx
import React from 'react';

function SettingInput({ type, value, onChange }) {
    let inputType = 'text';
    if (type === 'integer') inputType = 'number';
    // For string, path, url: use text input

    return (
        <input
            className="setting-value w-full border border-gray-500 px-2 py-2 my-1 bg-gray-700
            text-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-400"
            type={inputType}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
}

export default SettingInput;
