function Card({ title, children }) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            {title && (
                <h3 className="text-lg font-semibold mb-2">
                    {title}
                </h3>
            )}

            <div>
                {children}
            </div>
        </div>
    )
}

export default Card