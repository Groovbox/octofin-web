// src/components/SettingsContent.jsx
import React from 'react';

function SettingsContent({ settings }) {
    return (
        <div>
            {settings.map(setting => (
                <div key={setting.name} className="setting-card">
                    <div className="setting-name">{setting.display_name}</div>
                    <div className="setting-value">{setting.value}</div>
                    <div className="setting-description">{setting.description}</div>
                </div>
            ))}
        </div>
    );
}

export default SettingsContent;
