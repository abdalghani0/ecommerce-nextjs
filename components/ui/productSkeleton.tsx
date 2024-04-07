
export default function ProductSkeleton() {
    return (
        <div className="max-w-sm rounded-lg border rounded overflow-hidden shadow-lg p-4 animate-pulse">
            <div className="w-full h-[250px] bg-gray-300 mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-300 mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 mb-2"></div>
            <div className="w-full h-4 bg-gray-300"></div>
        </div>
    )
}