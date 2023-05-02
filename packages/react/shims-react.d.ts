declare module '*.tsx' {
    import React from 'react';
    const component: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>
    export default component;
}