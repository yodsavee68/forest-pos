import styles from "../pos.module.css";

export default function SkeletonTable({ count = 8 }: { count?: number }) {
    return (
        <div className={styles.tableGrid}>
            {[...Array(count)].map((_, i) => (
                <div key={i} className={`${styles.tableCard} animate-pulse bg-gray-50 border-gray-100`}>
                    <div className="flex justify-between items-start">
                        {/* Table Name Skeleton */}
                        <div className="h-5 bg-gray-200 rounded w-16"></div>

                        {/* Status Badge Skeleton */}
                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                    </div>

                    <div className="text-sm mt-4 space-y-2 flex flex-col items-start w-full">
                        {/* Pax Skeleton */}
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        {/* Time Skeleton */}
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
