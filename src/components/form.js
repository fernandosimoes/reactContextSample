import React, { useContext } from 'react';
import MyContext from '../context/Context';

function Form() {
    const { nome, setNome, email, setEmail,   idade, setIdade} = useContext(MyContext);

    function handleChange(e) {
        setNome(e.target.value)
    }

    return (
        <div>
            <input onChange={handleChange} ></input>
        </div>
    )
}
export default Form;