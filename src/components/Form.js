import React, {useContext} from 'react';

import NameContext from '../context/NameContext';

import styles from '../css/Form.module.css';

const Form = () => {
    const nameContext = useContext(NameContext);

    function inputHandler(e){
        nameContext.setName(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <label
                htmlFor="name"
            />
                Name:
            <label/>
            <input
                type='text'
                onChange={inputHandler}
                value={nameContext.name}
                name="name"
                id="name"
            />
        </form>
    )
}

export default Form;