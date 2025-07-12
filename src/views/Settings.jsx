// src/views/Settings.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import SettingsContent from '../components/settings/SettingsContent.jsx';

function Settings() {
    const [settings, setSettings] = useState([]);
    const [groups, setGroups] = useState([]);
    const [currentGroup, setCurrentGroup] = useState('');

    const fetchSettings = () => {
        fetch('/api/settings')
            .then(res => res.json())
            .then(data => {
                const settingsArray = Array.isArray(data)
                    ? data
                    : Object.values(data);

                const uniqueGroups = [...new Set(settingsArray.map(s => s.group))];
                setSettings(settingsArray);
                setGroups(uniqueGroups);
                if (!currentGroup && uniqueGroups.length > 0) {
                    setCurrentGroup(uniqueGroups[0]);
                }
            });
    };

    useEffect(fetchSettings, []);

    const settingsByGroup = settings.filter(s => s.group === currentGroup);

    return (
        <div className="flex h-screen bg-[#111827]">
            <Sidebar
                groups={groups}
                currentGroup={currentGroup}
                onSelect={setCurrentGroup}
            />
            <main className="mt-18 flex-1 p-6 overflow-y-auto">
                <h1 className="text-xl font-semibold text-gray-300 mb-4">
                    {currentGroup}
                </h1>
                <SettingsContent
                    settings={settingsByGroup}
                    onSettingSaved={fetchSettings} // 🔁 auto-refresh after save
                />
            </main>
        </div>
    );
}

export default Settings;
