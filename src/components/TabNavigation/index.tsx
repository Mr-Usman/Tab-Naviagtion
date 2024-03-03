import { JSX, useState, FC } from "react";
import { NavContainer, Navigation, Container, NavContent } from "./styled";

type Tab = {
  id: string;
  label: string;
  content: string;
};

type Props = {
  Tabs: Tab[];
};

const TabNavigation: FC<Props> = ({ Tabs }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <Container>
    <NavContainer>
      {Tabs.map((tab, key) => (
        <>
        <Navigation onClick={() => handleTabClick(tab.id)} active={parseInt(activeTab, 10) === key + 1} key={tab.id}>
          {tab.label}
        </Navigation>
        </>
      ))}
    </NavContainer>
    <NavContent>
        {Tabs.find((tab) => tab.id === activeTab)?.content}
    </NavContent>
    </Container>
  );
};

export default TabNavigation;

