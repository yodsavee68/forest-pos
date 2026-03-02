import Spinner from "../components/Spinner";

export default function Loading() {
    return (
        <div className="flex h-full w-full items-center justify-center p-12">
            <Spinner size="lg" />
        </div>
    );
}
