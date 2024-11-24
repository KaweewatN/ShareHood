import HomeCarousel from "@components/home/HomeCarousel";
import HomeCategory from "@components/home/HomeCategory";
import HomeCardPopularContainer from "@components/home/HomeCardPopularContainer";
import HomeCardRecomConatiner from "@components/home/HomeCardRecomContainer";

export default async function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeCategory />
      <HomeCardPopularContainer />
      <HomeCardRecomConatiner />
    </>
  );
}
