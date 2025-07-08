// components/ui/bento-grid.jsx
import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        //"py-4 max-w-7x1 mx-auto sm:px-6 lg:px-36">
        "grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[8rem] md:grid-cols-4 sm:px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-1 mb-1 font-sans font-bold text-orange-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-sans font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
