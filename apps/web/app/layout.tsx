import { NextTamaguiProvider } from './provider';

export const metadata = {
  title: 'Nx Tamagui',
  description: 'Next.js Expo Tamagui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
}
