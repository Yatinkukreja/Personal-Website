// ScrollContext.tsx
import React, { createContext, useContext, RefObject } from 'react';

// Define the context type to match the refs you're working with
interface ScrollContextType {
  ProjectsSectionRef: RefObject<HTMLDivElement>;
  SkillsSectionRef: RefObject<HTMLDivElement>;
}

// Provide the initial context value with appropriate types
const initialContextValue: ScrollContextType = {
  ProjectsSectionRef: { current: null },
  SkillsSectionRef: { current: null },
};

// Creating the context with initial null values for the refs, properly typed
export const ScrollContext = createContext<ScrollContextType>(initialContextValue);

export const useScroll = () => useContext(ScrollContext);
