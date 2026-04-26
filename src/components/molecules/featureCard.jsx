export const FeatureCard = ({ icon, title, description }) => (
    <div className="space-y-3 text-center p-4">
        <span className="material-symbols-outlined text-4xl text-orange-600">
            {icon}
        </span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
);