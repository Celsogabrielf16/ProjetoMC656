import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles['FooterComponent']}>
      <div className={styles["footer__detail"]}></div>
      <div className={styles["footer__informations"]}>
        <div className={styles["information-project"]}>
          <h1 className={styles['logo']}>Pedalando</h1>
          <p className={styles["information-description"]}>Site de empréstimos de bicicletas no campus da UNICAMP, desenvolvido como projeto do curso de Engenharia de Software do Bacharelado em Ciência da Computação na Universidade Estadual de Campinas - UNICAMP</p>
        </div>
        <div className={styles["information-developers"]}>
            <h4 className={styles["information-title"]}>Desenvolvedores</h4>
            <div className={styles["information-text"]}>
              <p>Artur Dias De Oliveira</p>
              <p>Celso Gabriel Prado</p>
              <p>Luiz Antonio Correa De Oliveira</p>
              <p>Vitor Ferreira Lacerda</p>
            </div>
        </div>
        <div className={styles["information-tools"]}>
            <h4 className={styles["information-title"]}>Usados no desenvolvimento</h4>
            <div className={styles["information-text"]}>
              <p>Figma</p>
              <p>Next</p>
              <p>Prisma ORM</p>
              <p>PostgreSQL</p>
            </div>
        </div>
      </div>
    </footer>
  )
}