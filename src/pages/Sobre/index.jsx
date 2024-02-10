import fotoPerfil from '../../../public/image/eu-atual.jpeg'
import fotoIcon from '../../../public/image/eu-icon.jpeg'
import styles from './sobre.module.css'
import { Link } from 'react-router-dom'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Olá Mundo, me chamo</h1>
       <p className={styles.nomeCompleto}>Luana Belnuovo</p>
        <p className={styles.profissao}> e eu sou Estágiaria em Monitoramento</p> 
        <div>
            <img src={fotoIcon} alt="Foto Icon" />
        </div>
      </div>
      <div className={styles.containerSobre} >
      </div>
      
      <div>
        <h1 className={styles.subtitulo}>Sobre mim</h1>
          <img src={fotoPerfil} alt="Foto Perfil" className={styles.fotoPerfil} />
          <p className={styles.corpo}>
              Olá pessoal, me chamo Luana, mas podem me chamar de Lu, seja bem vindo ao meu portfólio.
              No momento estou cursando Ciências da Computação. Tenho estudos focados na primeira certificação AWS, experiência com Zabbix, Graffana e Jira Cloud.
              Além de também ter projetos em React, HTML CSS e JavaScript.
            </p>
            </div>
        <div className={styles.containerSubtitulo}> 
      </div>

      <div className={styles.containerRodape}>
        <div className={styles.rodapeSobre}>
          <p>Seria um prazer poder compartilhar mais sobre mim e adquirir experiência enfrentando desafios no Desenvolvimento Web.
          Se você estiver em busca de alguém dedicado, fome por aprendizado e que deseja crescer junto à sua empresa, ficaria honrada em ter essa oportunidade. Sinta-se à vontade para entrar em contato e juntos transformarmos ideias em realidade.
          </p>
          <Link to="/contato" className={styles.botao}>Entre em contato</Link>
        </div>
</div>
    </>
  )
}

export default Sobre;