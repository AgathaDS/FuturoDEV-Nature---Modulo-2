import styles from './TituloContato.module.css'

function TituloContato() {
    return(
        <> <div className={styles.bgTitulo}>
            <div className={styles.titulo}>
            <p>Tire suas dúvidas!</p>
            <h1>nosso contato<span>.</span></h1>
            </div>
        </div>
        </>
    )
}

export default TituloContato