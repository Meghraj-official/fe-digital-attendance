import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton() {
  return (
    <div className="flex px-2 lg:px-5 gap-y-4  lg:gap-y-8 space-x-4  flex-wrap  justify-center items-center ">
      {/* this is the navbar */}
      {/* <div className="w-full  ">
        {" "}
        <Skeleton className="h-10 w-full  " />
      </div> */}
      <div className="grid grid-row-4 gap-4 lg:gap-8  h-fit   w-full  ">
        <div className=" grid grid-cols-4 gap-4 lg:gap-8 w-full">
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
        </div>
        <div className=" grid grid-cols-4 gap-4 lg:gap-8 w-full ">
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
        </div>
        <div className=" grid w-full grid-cols-4 gap-4 lg:gap-8  ">
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
        </div>
        <div className=" grid grid-cols-4 gap-4 lg:gap-8 w-full ">
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
          <Skeleton className="h-8 rouded-md" />
        </div>
      </div>
    </div>
  );
}
