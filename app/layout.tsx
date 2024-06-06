import './globals.css';
import Provider from '../components/Provider';
import Nav from '../components/Nav';
import { ReactNode } from 'react';

export const metadata = {
  title: "Gazebo Bites",
  description: "Designed by KAMY"
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient_top"></div>
            <div className="gradient_bottom"></div>
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
