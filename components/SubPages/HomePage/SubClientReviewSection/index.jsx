import axios from 'axios';
import Slider from 'react-slick';
import useSWR from 'swr';
import Review from '../Review';

//axios with bearer token
const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const SubClientReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
          dots: false,
        },
      },
      // {
      //   breakpoint: 540,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     dots: false
      //   }
      // }
    ],
  };
  const { data: reviews, error } = useSWR(
    'https://cms.fishmyspot.com/api/reviews?populate=*',
    fetcher
  );

  if (error) console.log({ error });

  if (!reviews) return <></>;

  // const reviews = [
  //   {
  //     name: "Tammy",
  //     image: "/images/woman-w-bass-logo-mac-min.jpg",
  //     review: "Gorgeous location. Tons of fishing potential. Pond owner and family extremely welcoming and helpful!",
  //     location: "Describing Pond In Green, Ohio",
  //   },
  //   {
  //     name: "Bryant",
  //     image: "/images/man-fishing-photo-north-royalton-min.jpg",
  //     review: "Me and my buddy booked a half day and had a BALL!! We fished from 6am-11am and caught over 20 large mouth. Very health fish & pond taking good care of. I would definitely book again.",
  //     location: "Fished at Pond in Macedonia, Ohio",
  //   },
  //   {
  //     name: "Mary",
  //     image: "/images/green-pond-boy-fishing-min.jpg",
  //     review: "Very friendly pond owner. The kids caught plenty of small bass and bluegill. Only one larger bass caught but was told the group who came in the AM caught several nice bass. I’m assuming our timing was just unfortunate.",
  //     location: "Describing Pond In Green",
  //   },
  //   {
  //     name: "Morgan",
  //     image: "/images/morgan-stuart-fisher-min.jpg",
  //     review: "We met the owner, very nice, let us know which ponds had which fish. Very relaxing during this pandemic. It was great to go out in public without a mask because it was just the four of us.",
  //     location: "Fished at our pond in Canton, Ohio",
  //   },
  //   {
  //     name: "Nicole",
  //     image: "/images/beloit-pond-w-logo-min.jpg",
  //     review: "Owners extremely friendly .. great spot to catch fish.",
  //     location: "Referring to our pond in Beloit, Ohio",
  //   },
  //   {
  //     name: "Patty ",
  //     image: "/images/green- little-girl-angler-logo-min.jpg",
  //     review: "The family that came to fish yesterday was adorable! I loved seeing the excitement of the little girl when she caught a large-mouth bass. Made my day. I’m loving this.",
  //     location: "Pond Owner in Canton, Ohio",
  //   },
  // ]
  return (
    reviews && (
      <section className="overflow-x-hidden bg-[#fcfcfc]">
        <div
          className={`reviews-container bg-[#fcfcfc] py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32`}
        >
          <div className="mb-10 text-center text-primary xl:mb-16 2xl:mb-24">
            <h1 className="font-food-truck text-xl uppercase sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
              OUR TRUSTED REVIEWS
            </h1>
          </div>
          <Slider {...settings}>
            {reviews?.map(({ id, ...reviewData }) => (
              <Review
                key={id}
                name={reviewData?.attributes?.name}
                image={reviewData?.attributes?.image?.data[0]?.attributes?.url}
                review={reviewData?.attributes?.review}
                location={reviewData?.attributes?.location}
              />
            ))}
          </Slider>
        </div>
      </section>
    )
  );
};

export default SubClientReviewSection;
