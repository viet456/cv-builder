import { useState } from "react";
import styles from './accordion.module.css';

export function Accordion({ title, openState=false, children }) {
    const [isOpen, setIsOpen] = useState(openState);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <section className={styles.section}>
            <div className={styles.header} onClick={toggleOpen}>
                <h2 className={styles.title}>{title}</h2>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {/* if isOpen is true the content will be rendered */}
            {isOpen && <div className='content'>{children}</div>}
        </section>
    )
}