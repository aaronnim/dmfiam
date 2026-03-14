import React from 'react';
import Image from 'next/image';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`flex items-center ${className}`} style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                src="/dmfiamlogo.png"
                alt="dfiam Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain' }}
                priority
            />
        </div>
    );
};
