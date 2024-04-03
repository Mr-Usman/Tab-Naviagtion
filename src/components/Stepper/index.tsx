import { JSX } from 'react';
import useTabNavigation from "../../hooks/useTabNavigation";

const Stepper = () : JSX.Element | null => {
    const { defaultActive } = useTabNavigation();
    if(defaultActive) return null;

    return (
        <div>
        Stepper Component
        </div>
    );
};

export default Stepper;