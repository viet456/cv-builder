import { Accordion } from "../../accordion/Accordion";
import { EducationForm } from '../educationForm/EducationForm';
import { EduListManager } from "../eduListManager/EduListManager";
export function EducationSection({openState, onAddEducation, items}) {
    return (
        <Accordion title='Education' openState={openState}>
            <EducationForm onAddEducation={onAddEducation}/>
            <EduListManager items={items}/>
        </Accordion>
    )
}