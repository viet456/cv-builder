import { useState } from 'react';
import styles from './experienceForm.module.css';

export function ExperienceForm({ onAddExp }) {
    const [formData, setFormData] = useState({
        company: '',
        startDate: '',
        endDate: '',
        position: '',
        location: '',
        description: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExp(formData);
        setFormData({
            company: '',
            startDate: '',
            endDate: '',
            position: '',
            location: '',
            description: ''
        })
    }
    return (
        <section className={styles.experienceDetails}>
            <form className={styles.form} id='expForm' onSubmit={handleSubmit}>
                <label htmlFor="company">Company Name</label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="startDate">Start Date</label>
                <input
                    type="month"
                    name="startDate"
                    id="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="endDate">End Date</label>
                <input
                    type="month"
                    name="endDate"
                    id="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />

                <label htmlFor="position">Position Title</label>
                <input
                    type="text"
                    name="position"
                    id="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <button type="submit" value='Save'>Save</button>
            </form>
        </section>
    )
}