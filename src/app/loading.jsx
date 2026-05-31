export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[50vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <h2 className="text-xl font-semibold text-primary">Loading Data...</h2>
      </div>
    </div>
  );
}
