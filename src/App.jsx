import { useState } from 'react';
import { Personal } from './components/personal/Personal';
import { Education } from './components/education/Education';
import { Experience } from './components/experience/Experience';
import { Accordion } from './components/accordion/Accordion';

export function App() {
    return (
        <>
            <Accordion title='Personal Details' openState={true}>
                <Personal />
            </Accordion>
            <Accordion title='Education' openState={false}>
                <Education />
            </Accordion>
            <Accordion title='Work Experience' openState={false}>
                <Experience />
            </Accordion>
        </>

    );
}