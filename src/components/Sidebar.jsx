
import { PencilLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://source.unsplash.com/random/300×300/?software'
            />

            <div className={styles.profile}>
                <Avatar src="https://i.pravatar.cc/150" />
                <strong>Nome de Úsuario</strong>
                <span>Descrição</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
            
        </aside>
    )
}