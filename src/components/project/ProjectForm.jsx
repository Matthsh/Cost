import Input from '../form/input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
export default function ProjectFrom(props) {
    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select nome="category_id" text="Escolha uma categoria" />
            <SubmitButton text={props.btnText}/>
        </form>
    )
}