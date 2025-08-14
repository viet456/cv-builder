import { useState } from "react";
import { Accordion } from "../../accordion/Accordion";
import { EducationForm } from '../educationForm/EducationForm';
import { EduListManager } from "../eduListManager/EduListManager";
export function EducationSection({openState}) {
    const [educationList, setEducationList] = useState([]);
    const handleAddEducation = (newEducationEntry) => {
        const entryWithId = {
            ...newEducationEntry, id: crypto.randomUUID()
        };
        setEducationList(prevList => [...prevList, entryWithId]);
    }
    return (
        <Accordion title='Education' openState={openState}>
            <EducationForm onAddEducation={handleAddEducation}/>
            <EduListManager items={educationList}/>
        </Accordion>
    )
}