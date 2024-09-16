import { ChakraProvider } from '@chakra-ui/react';
import './styles/globals.css';  // Global SCSS styles

export const metadata = {
  title: 'Mudirr Dashboard',
  description: 'Full Stack Developer Task',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}