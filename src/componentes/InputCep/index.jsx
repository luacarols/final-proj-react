import React, { useState } from 'react';
import axios from 'axios';
import styles from './inputcep.module.css';

const InputCep = () => {
    const [fields, setFields] = useState({
        rua: "",
        numero: "",
        cep: "",
        bairro: "",
        cidade: "",
        estado: "",
    });

    const handleChange = event => {
        if (event.target.name === "cep") {
            const cepFormat = event.target.value.replace(/\D/g, "");
            handleCep(cepFormat);
        }

        setFields({ ...fields, [event.target.name]: event.target.value});
    };

    const handleCep = async (cepFormat) => {
        console.log(cepFormat);
        if (cepFormat.length === 8){
            const cepData = await getCep(cepFormat).catch((e) => console.log(e));
            if(!cepData.data.erro) {
                console.log(cepData.data); 
            }
        }
    }; 

    return (
        <div className={styles.inputCepContainer}> 
            <input 
                type="text" 
                name="cep" 
                placeholder="Digite seu CEP" 
                value={fields.cep}
                onChange={handleChange}
                className={styles.inputCep} 
            />
        </div>
    );
};

async function getCep(data) {
    return axios.get(`https://viacep.com.br/ws/${data}/json/`)
        .catch(e => console.log(e));
}

export default InputCep;