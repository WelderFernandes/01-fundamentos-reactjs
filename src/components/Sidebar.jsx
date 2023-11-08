import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://i.pravatar.cc/300"
            />

            <div className={styles.profile}>
                <strong>Nome de Úsuario</strong>
                <span>Descrição</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
            
        </aside>
    )
}