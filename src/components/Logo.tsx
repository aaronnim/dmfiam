import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`flex items-center gap-2 font-bold text-xl tracking-tight ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
            <div style={{ color: 'var(--accent)', display: 'flex' }}>
                <ShieldCheck size={32} strokeWidth={2.5} />
            </div>
            <span style={{ color: 'var(--foreground)' }}>dmf<span style={{ color: 'var(--navy)' }}>IAM</span></span>
        </div>
    );
};
