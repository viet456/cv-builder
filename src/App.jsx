import { useState } from 'react';
import { Personal } from './components/personal/Personal';
import { Education } from './components/education/Education';
import { Experience } from './components/experience/Experience';

export function App() {
    return (
        <>
            <Personal />
            <Education />
            <Experience />
        </>

    );
}