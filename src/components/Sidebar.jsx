// src/components/Sidebar.jsx
import React from 'react';

function Sidebar({ groups, currentGroup, onSelect }) {
    return (
        <nav className="sidebar">
            <ul>
                {groups.map(group => (
                    <li
                        key={group}
                        className={group === currentGroup ? 'active' : ''}
                        onClick={() => onSelect(group)}
                    >
                        {group}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;
