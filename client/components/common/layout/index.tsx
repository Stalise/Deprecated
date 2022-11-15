import { FC } from 'react';

import { Header } from '../header';
import { Footer } from '../footer';

interface IProps {
  children: React.ReactNode
}

export const Layout: FC<IProps> = ({ children }) => (
  <>
    <Header />
    <main>{ children }</main>
    <Footer />
  </>
);
