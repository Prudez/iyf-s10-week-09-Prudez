function Input({
    label,
    error,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    name,
    required = false
}) {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block mb-1 text-sm">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`
                    w-full px-3 py-2 border rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${error ? 'border-red-500' : 'border-gray-300'}
                `}
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    )
}

export default Input