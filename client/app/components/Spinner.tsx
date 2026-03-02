export default function Spinner({ size = "md", color = "text-purple-600" }: { size?: "sm" | "md" | "lg", color?: string }) {
    const sizeClasses = {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-3",
        lg: "h-12 w-12 border-4",
    };

    return (
        <div className="flex justify-center items-center">
            <div
                className={`${sizeClasses[size]} ${color} border-t-transparent animate-spin rounded-full`}
                style={{ borderRightColor: "currentColor", borderBottomColor: "currentColor", borderLeftColor: "currentColor" }}
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
