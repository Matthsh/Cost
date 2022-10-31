import { useLocation } from 'react-router-dom'
import Message from "../layout/Message";
import styles from './Projects.module.css'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import { useState, useEffect } from 'react'

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            content: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => { console.log(err) })
        }, 2000)
    }, [])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json)
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso')
        }
        ).catch(err => console.log(err))
    }
    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkButton text="Criar Projeto" to="/newproject"></LinkButton>
            </div>
            {message && <Message msg={message} type="success" />}
            {projectMessage && <Message msg={projectMessage} type="success" />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        name={project.name}
                        id={project.id}
                        budget={project.budget}
                        category={project.category.name}
                        handleRemove={removeProject}
                    />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}