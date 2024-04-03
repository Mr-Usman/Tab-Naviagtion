import useTabNavigation from '../../hooks/useTabNavigation';
import { Slider, Switch, SwitchWrapper } from './styled';

const ToggleSwitch = ({ round = false }) => {
    const { setDefaultActive } = useTabNavigation();
    return (
        <Switch>
            <input onChange={() => setDefaultActive(prev => !prev)} type="checkbox" />
            <Slider round={round} />
        </Switch>
    )
};


const SwitchComponent = () => {
    return (
        <SwitchWrapper>
           <ToggleSwitch round />
        </SwitchWrapper>
    )
};

export default SwitchComponent;