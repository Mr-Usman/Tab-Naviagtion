import { JSX } from 'react';
import TabNavigation from './components/TabNavigation';
import Stepper from './components/Stepper';
import Switch from './components/Switch';
import { TabNavigationProvider } from './context/TabNavigationContext';

const TabsContent = [
  { id: "1", label: "Liability", content: "liability contebt" },
  { id: "2", label: "Insurance", content: "Insurance contebt" },
  { id: "3", label: "Mode", content: "mode contebt" },
];

function App() : JSX.Element {
  return (
    <TabNavigationProvider>
      <Switch />
      <TabNavigation Tabs={TabsContent} />
      <Stepper />
    </TabNavigationProvider>
  );
}

export default App;
