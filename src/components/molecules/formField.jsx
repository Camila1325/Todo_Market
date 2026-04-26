import { Input } from '../atoms/input';

export const FormField = ({ label, id, error, ...props }) => (
    <div className="space-y-2">
        <Input label={label} id={id} {...props} />
        {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
);