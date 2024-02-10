import React, { useState } from 'react';
import contatoImg from '../../../public/image/multidao.png';
import styles from './contato.module.css';
import InputCep from '../../componentes/InputCep';

function Contato() {
  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');

  function setInputValueMensagem(event) {
    setMensagem(event.target.value);
  }

  function setInputValueNome(event) {
    setNome(event.target.value);
  }

  function setInputValueEmail(event) {
    setEmail(event.target.value);
  }

  function setInputValueCep(event) {
    setCep(event.target.value);
  }

  function handleCreateMessage(event) {
    event.preventDefault();

    const aoSalvar = {
      mensagem: mensagem,
      email: email,
      nome: nome,
      cep: cep,
    };

    setMensagem('');
    setNome('');
    setEmail('');
    setCep('');
  }

  return (
    <>
      <div className={styles.header}>
        <img src={contatoImg} alt="Imagem de contato" />
      </div>
      <div className={styles.formContainer}>
      <div className={styles.title}>
        <h1>Me envie um e-mail que logo entrarei em contato!</h1>
      </div>        
          <form onSubmit={handleCreateMessage} className={styles.form}>
          <input className={styles.formInput} placeholder="Digite sua nome" onChange={setInputValueNome} value={nome} />
          <input className={styles.formInput} placeholder="Digite sua email" onChange={setInputValueEmail} value={email} />
          <textarea className={styles.formTextArea} placeholder="Digite sua mensagem" onChange={setInputValueMensagem} value={mensagem} />
          <InputCep handleChange={setInputValueCep} value={cep} />

          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  );
}

export default Contato;