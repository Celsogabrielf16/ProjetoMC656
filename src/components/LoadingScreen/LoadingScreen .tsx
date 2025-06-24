import styles from './LoadingScreen.module.scss';

export const LoadingScreen = () => {
  return (
    <main className={styles['container']}>
      <p className={styles['loading']}>Carregando ...</p>
    </main>
  )
}