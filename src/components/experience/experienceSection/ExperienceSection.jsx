import { useState } from "react";
import { Accordion } from "../../accordion/Accordion";
import { ExperienceForm } from "../experienceForm/ExperienceForm";
import { ExpListManager } from "../expListManager/ExpListManager";

export function ExperienceSection() {
    const [expList, setExpList] = useState([]);
    const handleAddExp = (newExpEntry) => {
        const entryWithId = {
            ...newExpEntry, id: crypto.randomUUID()
        };
        setExpList(prevList => [...prevList, entryWithId]);
    }
    return (
        <Accordion title='Work Experience'>
            <ExperienceForm onAddExp={handleAddExp}/>
            <ExpListManager items={expList}/>
        </Accordion>
    )
}