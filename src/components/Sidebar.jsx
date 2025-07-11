function Sidebar({ groups, currentGroup, onSelect }) {
    // Group groups by section
    const groupedSections = groups.reduce((acc, fullGroupName) => {
        const [section] = fullGroupName.split('/');
        if (!acc[section]) acc[section] = [];
        acc[section].push(fullGroupName); // Keep full path to match `currentGroup`
        return acc;
    }, {});

    return (
        <aside className="w-60 bg-[#111827] border-r border-gray-700 shadow-md p-4">
            <div className="mb-7 hover:bg-gray-800 rounded-lg p-3 transition">
                <h2 className="mx-3 text-3xl font-semibold text-gray-100 transition">Octofin</h2>
            </div>

            {/* Loop through sections */}
            <div className="space-y-6">
                {Object.entries(groupedSections).map(([section, groupList]) => (
                    <div key={section}>
                        <h3 className="text-gray-400 text-sm font-semibold mb-3 px-2">{section}</h3>
                        <ul className="space-y-1">
                            {groupList.map(group => {
                                const groupName = group.split('/')[1];
                                return (
                                    <li key={group}>
                                        <button
                                            onClick={() => onSelect(group)}
                                           className={`transition w-full text-left px-3 py-3 rounded-xl 
                                                 ${currentGroup === group
                                                 ? 'bg-violet-500 text-gray-100'
                                                 : 'text-gray-100 hover:bg-gray-800'}`}>
                                            {groupName}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
