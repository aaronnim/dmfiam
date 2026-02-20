import React from 'react';
import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => {
    return (
        <div className={clsx("container", className)} {...props}>
            {children}
        </div>
    );
};
