import { useState } from 'react';
import { Personal } from './components/personal/Personal';
import { Accordion } from './components/accordion/Accordion';
import { EducationSection } from './components/education/educationSection/EducationSection';
import { ExperienceSection } from './components/experience/experienceSection/ExperienceSection';
import { Preview } from './components/preview/Preview';
import './App.css';

export function App() {
    const [educationList, setEducationList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        links: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleAddEducation = (newEntry) => {
        setEducationList(prevList => [...prevList, newEntry]);
    }
    const handleAddExperience = (newEntry) => {
        setExperienceList(prevList => [...prevList, newEntry]);
    }
    const cvData = { personalDetails, educationList, experienceList };
    return (
        <div className='appContainer'>
            <div className="editorSide">
                <Accordion title='Personal Details' openState={true}>
                    <Personal details={personalDetails} onDetailsChange={handleChange} />
                </Accordion>
                <EducationSection onAddEducation={handleAddEducation}/>
                <ExperienceSection onAddExperience={handleAddExperience}/>
            </div>
            <div className="previewSide">
                <Preview cvData={cvData}/>
            </div>
        </div>
    );
}