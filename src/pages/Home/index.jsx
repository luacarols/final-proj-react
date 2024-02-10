import styles from './home.module.css'
import homeImg from '../../../public/image/capa.png'
import softImg from '../../../public/image/soft.jpg'
import hardImg from '../../../public/image/hard.jpg'

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
        </h1>
        <img src={homeImg} />
      </div>
      <div className={styles.subtitulo}>
        <p>
          Esse é o site do projeto final do módulo de React do Ciclo formativo Básico da Pretalab.
          Projeto desenvolvido em React abordando todos os tópicos vistos durante a aula (Componentes, Props,
          Estados, Listas e Keys, Hooks, onChange e onClick, Context API em React, React Router DOM
          imagens e modularização do CSS, TDD).
        </p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h3 className={styles.tituloCards}>Habilidades desenvolvidas durante o ciclo formativo</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={softImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>HardSkills</h3>
              <p className={styles.texto}>Tecnologia é o mercado que mais cresce no mundo e nunca para de inovar e por isso eu iniciei esse ciclo e colecionei conhecimentos,
              com tecnologias como JavaScript, HTML e CSS, React que foram fundamentais para criação desse projeto.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={hardImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>SoftSkills</h3>
              <p className={styles.texto}>Habilidade sociais e capacidade da inteligencia emocional é um ponto fundamental para manter o ambiente corporativo saudavel para todos.
              Além desses temas também falamos sobre autoconhecimento e comunicação assertiva, o que pode contribuir muito para minha carreira. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Home;