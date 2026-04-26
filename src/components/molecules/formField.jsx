import { Input } from '../atoms/input';

export const FormField = ({ label, id, error, ...props }) => (
    <div className="space-y-1.5">
        <Input label={label} id={id} error={error} {...props} />
        {error && (
            <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                <span className="material-symbols-outlined text-xs">error</span>
                {error}
            </p>
        )}
    </div>
);