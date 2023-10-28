'use client';

import tamaguiConfig from '../tamagui.config';
import { TamaguiProvider } from 'tamagui';
import { useServerInsertedHTML } from 'next/navigation';

interface NextTamaguiProviderProps {
  children: React.ReactNode;
}

export const NextTamaguiProvider = ({ children }: NextTamaguiProviderProps) => {
  useServerInsertedHTML(() => {
    return <>{tamaguiConfig.getNewCSS()}</>;
  });
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};
