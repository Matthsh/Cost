import { useLocation } from 'react-router-dom'
import Message from "../layout/Message";
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import { useState, useEffect } from 'react'

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            content: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => { console.log(err) })
    }, [])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkButton text="Criar Projeto" to="/newproject"></LinkButton>
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard key={project.id}
                        name={project.name}
                        id={project.id}
                        budget={project.budget}
                        category={project.category.name}
                    />)
                }
            </Container>
        </div>
    )
}