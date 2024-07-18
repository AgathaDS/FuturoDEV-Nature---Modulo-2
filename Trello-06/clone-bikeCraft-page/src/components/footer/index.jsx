import RedesSociais from "../redesSociais";
import styles from "./Footer.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
        
        <div className={styles.columns}>
            <div>
                <img className="logo" src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="logo" />
            </div>

            
            <div className={styles.footerContato}>
                <h3>CONTATO</h3>
                
                <ul>
                    <li>+55 21 9999-9999</li>
                    <li><a style={{color:'#b2b2b2'}} href="mailto:contato@bikcraft.com">contato@bikcraft.com</a></li>
                    <li>Rua Ail Perto, 42 - Botafogo</li>
                    <li>Rio de Janeiro - RJ</li>
                </ul>
                
                
                <RedesSociais/>

            </div>
            
            <div className={styles.footerInfo}>
                <h3>INFORMAÇÕES</h3>
                <ul>
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                    <li>Termos e Condições</li>
                </ul>
            </div>

        </div>

        <div className={styles.footerRights}>
            <p> Bikcraft © Alguns direitos reservados.</p>
        </div>

    </div>
  );
}

export default Footer;
