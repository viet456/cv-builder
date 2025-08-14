import styles from './preview.module.css'

export function Preview({ cvData }) {
    const { personalDetails, educationList, experienceList } = cvData;
    return (
        <section className='preview'>
            <header className="cvHeader">
                <h1>{personalDetails.name || 'Your Name'}</h1>
                <p>
                    {personalDetails.email || 'your.email@example.com'}
                    {' | '}
                    {personalDetails.phone || '123-456-7890'}
                    {' | '}
                    {personalDetails.city || 'City, State'}
                </p>
                <p style={{ whiteSpace: 'pre-wrap' }}>{personalDetails.links}</p>
            </header>

            {experienceList.length > 0 && (
                <section className="cvSection">
                    <h2>Work Experience</h2>
                    <hr />
                    {experienceList.map(exp => (
                        <div key={exp.id} className="cvEntry">
                            <div className="entryHeader">
                                <strong>{exp.company}</strong>
                                <strong>{exp.startDate} to {exp.endDate || 'Present'}</strong>
                            </div>
                            <div className="entrySubheader">
                                <span style={{ fontStyle: 'italic' }}>{exp.position}</span>
                                <span style={{ fontStyle: 'italic' }}>{exp.location}</span>
                            </div>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                        </div>
                    ))}
                </section>
            )}

            {educationList.length > 0 && (
                <section className="cvSection">
                    <h2>Education</h2>
                    <hr />
                    {educationList.map(edu => (
                        <div key={edu.id} className="cvEntry">
                            <div className="entryHeader">
                                <strong>{edu.school}</strong>
                                <strong>{edu.startDate} to {edu.endDate || 'Present'}</strong>
                            </div>
                            <div className="entrySubheader">
                                <span>{edu.major}</span>
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </section>
    )
}