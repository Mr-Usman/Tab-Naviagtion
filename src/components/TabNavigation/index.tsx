import { JSX, FC, useEffect } from "react";
import { NavContainer, Navigation, Container, NavContent } from "./styled";
import useTabNavigation from "../../hooks/useTabNavigation";

type Tab = {
  id: string;
  label: string;
  content: string;
};

type Props = {
  Tabs: Tab[];
};

const TabNavigation: FC<Props> = ({ Tabs }): JSX.Element | null => {
  const { setSteps, currentStep, setCurrentStep, defaultActive } = useTabNavigation();
  
  useEffect(() => {
    setSteps(Tabs.length);
  });

  const handleTabClick = (id: string) => {
    setCurrentStep(id);
  };

  if(!defaultActive) return null;

  return (
    <Container>
      <NavContainer>
        {Tabs.map((tab, key) => (
          <>
          <Navigation onClick={() => handleTabClick(tab.id)} active={parseInt(currentStep, 10) === key + 1} key={tab.id}>
            {tab.label}
          </Navigation>
          </>
        ))}
      </NavContainer>
      <NavContent>
          {Tabs.find((tab) => tab?.id === currentStep)?.content}
      </NavContent>
    </Container>
  );
};

export default TabNavigation;

