export const Input = ({ label, id, error, rightElement, ...props }) => (
    <div className="w-full">
        {label && <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">{label}</label>}
        <div className="relative">
            <input
                id={id}
                name={id}
                className={`block w-full rounded-lg border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm transition-all duration-200
                    ${error 
                        ? 'ring-red-300 focus:ring-red-500 bg-red-50/30' 
                        : 'ring-gray-300 focus:ring-orange-600'
                    }`}
                {...props}
            />
            {rightElement && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {rightElement}
                </div>
            )}
        </div>
    </div>
);