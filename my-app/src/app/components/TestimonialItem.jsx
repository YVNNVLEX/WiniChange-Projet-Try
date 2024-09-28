import clsx from "clsx";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-[150%] after:bg-white/60 after:content-[''] max-md:px-6 max-md:pb-10 max-md:pt-8 after:max-md:-right-4 max-sm:px-4 max-sm:pb-8 max-sm:pt-6",
        containerClassName
      )}
    >
      <blockquote className="mb-8 text-xl text-white/60 max-md:text-lg max-sm:text-base">
        {item.comment}
      </blockquote>

      <div className="flex items-center">
        <div className="mr-4 size-20 shrink-0 rounded-full border-2 border-purple-200 p-1.5 max-md:size-16 max-sm:size-12">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="mb-0.5 text-sm font-bold uppercase max-md:text-xs max-sm:text-[10px]">
            {item.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
