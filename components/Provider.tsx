'use client';

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderProps extends SessionProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
);

export default Provider;