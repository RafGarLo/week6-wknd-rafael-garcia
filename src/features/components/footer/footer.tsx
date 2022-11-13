import styles from "./footer.module.css";
export function Footer() {
    return (
        <footer>
            <div className={styles.footer__container}>
                <address>Couch Surfing 2022</address>
                <img
                    className={styles.logo__footer}
                    src="./assets/sofa_logo.png"
                    alt="Couch Surfing Logo"
                    min-width="20px"
                ></img>{" "}
                <address> by Rafael Garcia</address>
            </div>
        </footer>
    );
}
