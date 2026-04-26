export const Input = ({ label, id, ...props }) => (
    <div className="w-full">
        {label && <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">{label}</label>}
        <input
            id={id}
            className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
            {...props}
        />
    </div>
);