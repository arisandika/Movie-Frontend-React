import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <>
      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search movie by name"
          className="w-full py-3 pl-5 pr-12 text-sm rounded-full bg-gradient-to-r from-primary to-[#222332] focus:outline-none focus:ring-2 focus:ring-theme"
        />
        <Search className="absolute w-5 h-5 -translate-y-1/2 text-secondary right-4 top-1/2" />
      </div>
    </>
  );
};

export default SearchInput;
