import { Button } from '../atoms/button';

export const SocialButton = ({ provider, iconUrl, onClick }) => (
    <Button variant="outline" className="text-sm py-2 w-full" onClick={onClick}>
        <img className="h-5 w-5" src={iconUrl} alt={provider} />
        <span className="hidden sm:inline">{provider}</span>
    </Button>
);