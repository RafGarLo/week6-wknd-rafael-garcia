import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export function Menu() {
    const menuOption = [
        { id: "1", path: "home", label: "Home" },
        { id: "2", path: "bedroom", label: "Bedroom" },
        { id: "3", path: "livingroom", label: "Living Room" },
        { id: "4", path: "onsale", label: "On Sale" },
    ];
    return (
        <nav>
            <ul className={styles.header__ul}>
                {menuOption.map((item) => (
                    <li className={styles.header__li} key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
