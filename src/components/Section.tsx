import React from 'react';
import clsx from 'clsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    grainy?: boolean;
}

export const Section: React.FC<SectionProps> = ({ className, children, grainy, ...props }) => {
    return (
        <section
            className={clsx(className)}
            style={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                position: 'relative',
                overflow: 'hidden',
                ...props.style
            }}
            {...props}
        >
            {grainy && (
                <div
                    className="grainy-gradient"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}
                />
            )}
            {children}
        </section>
    );
};
