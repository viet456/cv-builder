import { useState } from 'react';
import styles from './personal.module.css';

export function Personal() {
    return (
    <section className={styles.personalDetails}>
        <h2>Personal Details</h2>
        <form className={styles.form}>
            <label htmlFor="name">Full Name</label>
            <input type='text' name='name' id='name'/>

            <label htmlFor="email">Email</label>
            <input type='email' name='email' id='email'/>

            <label htmlFor="phone">Phone Number</label>
            <input type='number' name='phone' id='phone' />

            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />

            {/* List section for adding external links
            eg Github, Behance, Artstation */}

        </form>
    </section>)
}