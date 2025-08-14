import { useState } from 'react';
import styles from './personal.module.css';

export function Personal({ details, onDetailsChange }) {
    return (
        <section className={styles.personalDetails}>
            <form className={styles.form}>
                <label htmlFor="name">Full Name</label>
                <input 
                    type='text'
                    name='name' 
                    id='name' 
                    value={details.name}
                    onChange={onDetailsChange}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type='email' 
                    name='email' 
                    id='email' 
                    value={details.email}
                    onChange={onDetailsChange}
                />

                <label htmlFor="phone">Phone Number</label>
                <input 
                    type='tel' 
                    name='phone' 
                    id='phone' 
                    value={details.phone}
                    onChange={onDetailsChange}
                />

                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    name="city" 
                    id="city" 
                    value={details.city}
                    onChange={onDetailsChange}
                />

                <label htmlFor="links">Links</label>
                <textarea
                    name="links"
                    id="links"
                    rows='2'
                    value={details.links}
                    onChange={onDetailsChange}
                />
            </form>
        </section>)
}