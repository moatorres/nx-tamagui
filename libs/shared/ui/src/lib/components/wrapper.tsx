import React from 'react';
import { Stack } from 'tamagui';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <Stack>{children}</Stack>;
};
