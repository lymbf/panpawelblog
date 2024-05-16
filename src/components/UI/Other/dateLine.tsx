import React from 'react';


export default function DateLine({timestamp, className}:{timestamp:string, className?:string}) {
    return (
        <div
            className={`text-slate-400 font-normal text-base tracking-wider mb-4 ${className}`}>{new Date(timestamp).toLocaleString()}
        </div>
    )
}