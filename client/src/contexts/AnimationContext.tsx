import { createContext, useContext } from 'react';

// Animation Context
interface AnimationContextType {
  animationsEnabled: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  animationsEnabled: false
});

export const useAnimationContext = () => useContext(AnimationContext);

export { AnimationContext };