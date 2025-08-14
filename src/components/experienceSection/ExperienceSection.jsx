import { useState } from "react";
import { Accordion } from "../accordion/Accordion";
import { ExperienceForm } from "../experienceForm/ExperienceForm";

export function ExperienceSection() {
    return (
        <Accordion title='Work Experience'>
            <ExperienceForm />
        </Accordion>
    )
}