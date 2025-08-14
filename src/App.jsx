import { Personal } from './components/personal/Personal';
import { Accordion } from './components/accordion/Accordion';
import { EducationSection } from './components/education/educationSection/EducationSection';
import { ExperienceSection } from './components/experience/experienceSection/ExperienceSection';

export function App() {
    return (
        <>
            <Accordion title='Personal Details' openState={true}>
                <Personal />
            </Accordion>
            <EducationSection openState={true}/>
            <ExperienceSection />
        </>
    );
}