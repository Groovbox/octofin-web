import React from 'react';

function SettingBool({ value, onChange, label, id }) {
    return (
        <div className="bg-[rgba(30,40,54,0.8)]  border border-[rgb(71,80,92)] rounded-[1em] pt-5 pb-4 px-5 text-[93%] leading-[1.35] text-gray-100 my-2">
            <label htmlFor={id} className="inline-flex items-center gap-2 select-none">
                <input
                    id={id}
                    type="checkbox"
                    checked={!!value && (value === 'True')}
                    onChange={e => onChange(e.target.checked)}
                    className="h-5 w-5 accent-[rgb(79,70,229)] rounded cursor-pointer"
                />
                <span className="text-sm">{label}</span>
            </label>
        </div>
    );
}

export default SettingBool;
