import MiddleSection from '@/components/MiddleSection/MiddleSection';
import Navigation from '@/components/Navigation/Navigation';
import styles from '@/styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Navigation />
      <MiddleSection />
    </div>
  );
}
