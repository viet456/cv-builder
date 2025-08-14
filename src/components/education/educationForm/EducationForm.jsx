import { useState } from 'react';
import styles from './educationForm.module.css';

export function EducationForm({ onAddEducation }) {
    const [formData, setFormData] = useState({
        school: '',
        major: '',
        startDate: '',
        endDate: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEducation(formData);
        setFormData({
            school: '',
            major: '',
            startDate: '',
            endDate: '',
        });
    }
    return (
        <section className={styles.educationDetails}>
            <form id='educationForm' className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    name="school"
                    id="school"
                    value={formData.school}
                    onChange={handleChange}
                />

                <label htmlFor="major">Major</label>
                <input
                    type="text"
                    name="major"
                    id="major"
                    value={formData.major}
                    onChange={handleChange}
                />

                <label htmlFor="startDate">Start Date</label>
                <input  
                    type="month" 
                    name="startDate" 
                    id="startDate" 
                    value={formData.startDate}
                    onChange={handleChange}
                />

                <label htmlFor="endDate">End Date</label>
                <input 
                    type="month" 
                    name="endDate" 
                    id="endDate" 
                    value={formData.endDate}
                    onChange={handleChange}
                />

                <button type="submit" value='Save'>Save</button>
            </form>
        </section>
    )
}