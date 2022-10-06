import { useState } from 'react';

export const useTabs = (
  initialTabs: number,
  allTabs: { id: number; tab: string; content: JSX.Element }[]
) => {
  const [contentIndex, setContentIndex] = useState<number>(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};
