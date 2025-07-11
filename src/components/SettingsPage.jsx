import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SettingsContent from './SettingsContent';

function SettingsPage() {
    const [settings, setSettings] = useState([]);
    const [groups, setGroups] = useState([]);
    const [currentGroup, setCurrentGroup] = useState('');

    useEffect(() => {
        fetch('/api/settings')
            .then(res => res.json())
            .then(data => {
                const settingsArray = Object.values(data);
                const uniqueGroups = [...new Set(settingsArray.map(s => s.group))];
                setSettings(settingsArray);
                setGroups(uniqueGroups);
                setCurrentGroup(uniqueGroups[0]);
            });
    }, []);

    const settingsByGroup = settings.filter(s => s.group === currentGroup);

    return (
        <div className="settings-layout">
            <Sidebar groups={groups} currentGroup={currentGroup} onSelect={setCurrentGroup} />
            <main className="settings-content">
                <h1>{currentGroup} Settings</h1>
                <SettingsContent settings={settingsByGroup} />
            </main>
        </div>
    );
}

export default SettingsPage;
