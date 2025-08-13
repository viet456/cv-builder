import { useState } from 'react';
import styles from './education.module.css';

export function Education() {
    return (
        <section className={styles.educationDetails}>
            <h2>Education</h2>
            <form className={styles.form}>
                <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" />

                <label htmlFor="major">Major</label>
                <input type="text" name="major" id="major" />

                <label htmlFor="startDate">Start Date</label>
                <input type="month" name="startDate" id="startDate" />

                <label htmlFor="endDate">End Date</label>
                <input type="month" name="endDate" id="endDate" />
            </form>
        </section>
    )
}