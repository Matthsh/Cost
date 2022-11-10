import styles from '../project/ProjectForm.module.css'

import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

export default function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})
    
    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({ ...service, [e.target.name]: e.target.value})
    }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text"
            text="Nome do Serviço"
            name="name"
            placehoder="Insira o nome do serviço"
            handleOnChange={handleChange}
            />
            <Input 
            type="number"
            text="Custo do Serviço"
            name="cost"
            placehoder="Insira o valor total"
            handleOnChange={handleChange}
            />
            <Input 
            type="text"
            text="Descrição do Serviço"
            name="description"
            placehoder="Descreva o serviço"
            handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}