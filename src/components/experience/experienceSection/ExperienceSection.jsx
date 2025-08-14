import { Accordion } from "../../accordion/Accordion";
import { ExperienceForm } from "../experienceForm/ExperienceForm";
import { ExpListManager } from "../expListManager/ExpListManager";

export function ExperienceSection({openState, onAddExperience, items}) {
    return (
        <Accordion title='Work Experience' openState={openState}>
            <ExperienceForm onAddExperience={onAddExperience}/>
            <ExpListManager items={items}/>
        </Accordion>
    )
}