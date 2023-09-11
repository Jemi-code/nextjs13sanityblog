import Image from 'next/image'
import styles from './page.module.css'
import Portfolio from '@/components/portfolio/portfolio'

export const revalidate = 10;

export default function Home() {
  return (
    <main className={styles.main}>
      <Portfolio />
    </main>

  )
}
