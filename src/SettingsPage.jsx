import React, { useEffect, useState } from 'react';

function SettingsPage() {
    const [settings, setSettings] = useState({});

    useEffect(() => {
        fetch('/api/settings')
            .then(res => res.json())
            .then(data => setSettings(data));
    }, []);

    return (
        <div>
            <h1>Settings</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(settings).map(([name, value]) => (
                    <tr key={name}>
                        <td>{name}</td>
                        <td>{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SettingsPage;
