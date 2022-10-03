import ProjectFrom from '../project/ProjectForm'
import styles from './NewProject.module.css'
export default function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectFrom btnText="Criar Projeto"/>
        </div>
    )
}