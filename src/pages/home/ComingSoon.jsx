import { Film } from "lucide-react";

const ComingSoon = () => {
  const items = [
    {
      src: "/assets/images/cover/dplus_lob_mas_mob_05.jpg",
      title: "DPlus Lob Mas Mob 05",
    },
    {
      src: "/assets/images/cover/themarvels_lob_mas_min_mob_01.jpg",
      title: "The Marvels",
    },
    {
      src: "/assets/images/cover/jeffrivals_com_mas_mob_00.jpg",
      title: "Jeff Rivals",
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-lg font-semibold text-light">Coming Soon</h2>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[80%] md:min-w-[60%] aspect-[4/5] rounded-xl snap-center overflow-hidden mb-6"
          >
            <img
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-full"
            />
            <div
              className="absolute bottom-0 w-full p-4 text-center text-white"
            >
              <div className="flex items-center gap-3 p-2 text-base font-medium text-white md:p-4 bg-light/30 backdrop-blur-lg rounded-xl">
                <div className="p-2 rounded-lg">
                  <Film className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-light text-secondary">Action</span>
                  <span className="font-medium text-light text-start">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
