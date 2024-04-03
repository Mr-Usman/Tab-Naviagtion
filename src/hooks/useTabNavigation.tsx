import { useContext } from 'react';
import { TabNavigationContext } from '../context/TabNavigationContext';

const useTabNavigation = () => {
    const context = useContext(TabNavigationContext);
    if (context === undefined) {
      throw new Error('useTabNavigation must be used within a TabNavigationProvider');
    }
    return context;
};

export default useTabNavigation;
  