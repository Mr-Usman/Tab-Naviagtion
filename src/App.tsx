import { JSX } from 'react';
import TabNavigation from './components/TabNavigation';

const TabsContent = [
  { id: "1", label: "Liability", content: "liability contebt" },
  { id: "2", label: "Insurance", content: "Insurance contebt" },
  { id: "3", label: "Mode", content: "mode contebt" },
];

function App() : JSX.Element {
  return (
    <TabNavigation Tabs={TabsContent} />
  );
}

export default App;
