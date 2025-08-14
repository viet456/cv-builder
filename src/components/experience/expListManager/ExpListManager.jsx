export function ExpListManager({ items }) {
    const isActive = items && items.length > 0;
    return (
        <>
            {isActive && (
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item.id}>
                                <strong>{item.company}</strong>
                                <strong>{item.startDate} to {item.endDate}</strong>
                                <p style={{fontStyle: 'italic'}}>{item.position}</p>
                                <p style={{fontStyle: 'italic'}}>{item.location}</p>
                                <p>{item.description}</p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    );
}