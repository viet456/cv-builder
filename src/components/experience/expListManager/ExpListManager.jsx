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
                                <p>{item.position}</p>
                                <p>{item.location}</p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    );
}