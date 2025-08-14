export function EduListManager({ items }) {
    const isActive = items && items.length > 0;
    return (
        <>
            {isActive && (
                <ul>
                    {items.map((item) => {
                        return <li key={item.id}>
                            <strong>{item.school}</strong>: {item.major}
                            ({item.startDate} to {item.endDate || 'Present'})
                            </li>
                    })}
                </ul>
            )}
        </>
    );
}