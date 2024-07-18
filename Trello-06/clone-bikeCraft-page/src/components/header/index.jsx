import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="logo" />
            <ul> 
                <li>Bicicletas</li>
                <li>Seguros</li>
                <li>Contatos</li>
            </ul>
        </div>
    )

}

export default Header