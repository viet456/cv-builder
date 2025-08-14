import { useState } from "react";
import { Accordion } from "../../accordion/Accordion";
import { ExperienceForm } from "../experienceForm/ExperienceForm";
import { ExpListManager } from "../expListManager/ExpListManager";

export function ExperienceSection({openState}) {
    const [expList, setExpList] = useState([]);
    const handleAddExp = (newExpEntry) => {
        const entryWithId = {
            ...newExpEntry, id: crypto.randomUUID()
        };
        setExpList(prevList => [...prevList, entryWithId]);
    }
    return (
        <Accordion title='Work Experience' openState={openState}>
            <ExperienceForm onAddExp={handleAddExp}/>
            <ExpListManager items={expList}/>
        </Accordion>
    )
}