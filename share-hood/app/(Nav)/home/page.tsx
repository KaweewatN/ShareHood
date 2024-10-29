import HomeCarousel from "@components/home/HomeCarousel";
import HomeCategory from "@components/home/HomeCategory";
import HomeCardPopularContainer from "@components/home/HomeCardPopularContainer";
import HomeCardRecomConatiner from "@components/home/HomeCardRecomContainer";

export default function Home() {
  return (
    <>
      {/* <SearchBar query={homeQuery} setQuery={setHomeQuery} /> */}
      <HomeCarousel
        text="Special 40% Discount for New Users"
        description="Get a chance to experience great value as a first-time user with our limited offer."
        image="/images/home-noti-image.png"
      />
      <HomeCategory />
      <HomeCardPopularContainer />
      <HomeCardRecomConatiner />
    </>
  );
}
