import { Button, YStack } from 'tamagui';

export const Menu = () => {
  return (
    <YStack m={1} padding={100}>
      <Button key={1}>Home</Button>
      <Button key={2}>About</Button>
      <Button key={3}>Contact</Button>
    </YStack>
  );
};
