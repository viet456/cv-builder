import { useState } from 'react';
import styles from './experience.module.css';

export function Experience() {
    return (
        <section className={styles.experienceDetails}>
            <form className={styles.form}>
                <label htmlFor="company">Company Name</label>
                <input type="text" name="company" id="company" />

                <label htmlFor="position">Position Title</label>
                <input type="text" name="position" id="position" />

                <label htmlFor="startDate">Start Date</label>
                <input type="month" name="startDate" id="startDate" />

                <label htmlFor="endDate">End Date</label>
                <input type="month" name="endDate" id="endDate" />

                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" />

                <label htmlFor="desc">Description</label>
                <input type="text" name="description" id="description" />
            </form>
        </section>
    )
}