import { AspectRatio } from "../ui/aspect-ratio";

import { Skeleton } from "../ui/skeleton";

export default function CatalogSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 ">
      <AspectRatio ratio={9 / 16} className="">
        <Skeleton className="w-full h-full" />
        <p className="  text-zinc-950 absolute top-0 left-0 transform -rotate-90 -translate-x-2 translate-y-12 antialiased opacity-65 z-10">
          <b>NEW</b> IN
        </p>
      </AspectRatio>
      <Skeleton className="w-full min-h-10" />
    </div>
  );
}
