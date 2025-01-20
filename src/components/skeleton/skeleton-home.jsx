import { Skeleton } from "../ui/skeleton";

const SkeletonHome = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full min-h-screen px-4 md:px-32">
        <header className="flex items-center justify-between w-full pt-8 pb-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="w-10 h-3" />
              <Skeleton className="w-20 h-3" />
            </div>
          </div>
          <Skeleton className="w-8 h-8 rounded-full" />
        </header>

        <div className="relative mt-4 w-full h-54 overflow-hidden aspect-[2/1] rounded-xl">
          <Skeleton className="w-full h-full aspect-[2/1]" />
        </div>

        <section className="w-full mt-7">
          <Skeleton className="w-32 h-6 mb-4" />
          <div className="flex gap-2 overflow-x-auto">
            <Skeleton className="w-20 h-8 rounded-full" />
            <Skeleton className="w-20 h-8 rounded-full" />
            <Skeleton className="w-20 h-8 rounded-full" />
          </div>
        </section>

        <section className="w-full mt-7">
          <Skeleton className="w-32 h-6 mb-4" />
          <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex gap-4 overflow-hidden md:items-start md:flex-col">
              <Skeleton className="w-2/4 md:w-full rounded-xl md:aspect-[2/3]" />
              <div className="w-2/3 md:w-full">
                <Skeleton className="w-40 h-4 mb-2" />
                <Skeleton className="w-20 h-4 mb-5" />
                <div className="flex flex-col items-start gap-1 mt-2 text-sm text-secondary">
                  <Skeleton className="w-24 h-3 mb-2" />
                  <Skeleton className="w-20 h-3 mb-2" />
                  <Skeleton className="w-10 h-3 mb-2" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 overflow-hidden md:items-start md:flex-col">
              <Skeleton className="w-2/4 md:w-full rounded-xl md:aspect-[2/3]" />
              <div className="w-2/3 md:w-full">
                <Skeleton className="w-40 h-4 mb-2" />
                <Skeleton className="w-20 h-4 mb-5" />
                <div className="flex flex-col items-start gap-1 mt-2 text-sm text-secondary">
                  <Skeleton className="w-24 h-3 mb-2" />
                  <Skeleton className="w-20 h-3 mb-2" />
                  <Skeleton className="w-10 h-3 mb-2" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 overflow-hidden md:items-start md:flex-col">
              <Skeleton className="w-2/4 md:w-full rounded-xl md:aspect-[2/3]" />
              <div className="w-2/3 md:w-full">
                <Skeleton className="w-40 h-4 mb-2" />
                <Skeleton className="w-20 h-4 mb-5" />
                <div className="flex flex-col items-start gap-1 mt-2 text-sm text-secondary">
                  <Skeleton className="w-24 h-3 mb-2" />
                  <Skeleton className="w-20 h-3 mb-2" />
                  <Skeleton className="w-10 h-3 mb-2" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 overflow-hidden md:items-start md:flex-col">
              <Skeleton className="w-2/4 md:w-full rounded-xl md:aspect-[2/3]" />
              <div className="w-2/3 md:w-full">
                <Skeleton className="w-40 h-4 mb-2" />
                <Skeleton className="w-20 h-4 mb-5" />
                <div className="flex flex-col items-start gap-1 mt-2 text-sm text-secondary">
                  <Skeleton className="w-24 h-3 mb-2" />
                  <Skeleton className="w-20 h-3 mb-2" />
                  <Skeleton className="w-10 h-3 mb-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-32" />
      </div>
    </>
  );
};

export default SkeletonHome;
