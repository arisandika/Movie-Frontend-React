import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile, logout } from "@/api/auth";
import UserHeader from "@/components/layouts/UserHeader";
import CarouselSection from "./CarouselSection";
import MovieList from "./MovieList";
import GenreSection from "./GenreSection";
import ComingSoon from "./ComingSoon";

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
    return <div>Loading...</div>;
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
