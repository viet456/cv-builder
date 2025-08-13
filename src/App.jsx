import { useState } from 'react';
import { Personal } from './components/personal/Personal';
import { Education } from './components/education/Education';

export function App() {
    return (
        <>
            <Personal />
            <Education />
        </>

    );
}