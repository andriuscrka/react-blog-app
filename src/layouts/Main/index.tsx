import styles from './styles.module.css';

import { Header, Footer } from '../../components/UI';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        { children }
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;