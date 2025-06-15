export default function ShowIcon({ className = "w-6 h-6 text-gray-700 drop-shadow-sm" }) {
    return (
        <svg
            className={className}
            fill="currentColor"
            stroke="gray"
            strokeWidth="0.8"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"
            />
            <circle cx="12" cy="12" r="2.5" fill="text-gray-500" />
        </svg>
    );
}
