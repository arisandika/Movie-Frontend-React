import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile, logout } from "@/api/auth";
import UserHeader from "@/components/layouts/UserHeader";
import CarouselSection from "./CarouselSection";
import MovieList from "./MovieList";
import GenreSection from "./GenreSection";
import ComingSoon from "./ComingSoon";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        const data = await fetchUserProfile(token);
        setUser(data);
      } else {
        navigate("/sign-in");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/sign-in");
  };

  if (!user) {
    return (
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
    );
  }

  const movies = [
    {
      title: "Sonic the Hedgehog 2 (2022)",
      cover: "/assets/images/cover/Sonic_The_hedgehog_2.jpg",
      genre: "Action Comedy",
      location: "Jakarta",
      rating: 4,
    },
    {
      title: "One Piece Film Red (2022)",
      cover: "/assets/images/cover/One_Piece_Film_Red.jpg",
      genre: "Action Comedy",
      location: "Jakarta",
      rating: 4,
    },
    {
      title: "Godzilla x Kong: The New Empire (2024)",
      cover: "/assets/images/cover/Godzilla_X_Kong.jpg",
      genre: "Action Fantasy",
      location: "Jakarta",
      rating: 4,
    },
    {
      title: "Star Wars: The Force Awakens (2015)",
      cover: "/assets/images/cover/Star_Wars_The_Force_Awakens.jpeg",
      genre: "Action Adventure",
      location: "Jakarta",
      rating: 4,
    },
  ];

  return (
    <div className="px-4 md:px-32">
      <UserHeader user={user} onLogout={handleLogout} />
      <CarouselSection />
      <GenreSection />
      <section className="mt-6">
        <h2 className="mb-4 text-lg font-semibold text-light">
          All New Movies
        </h2>
        <MovieList movies={movies} />
      </section>
      <ComingSoon />
      <div className="h-32" />
    </div>
  );
};

export default Home;
