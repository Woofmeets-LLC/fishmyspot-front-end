import Link from "next/link";
import {useRouter} from "next/router";
import slugify from "slugify";

const states = [
  {
    stateName: "Alabama",
    stateCode: "AL",
  },
  {
    stateName: "Alaska", 
    stateCode: "AK",
  },
  {
    stateName: "Arizona",
    stateCode: "AZ",
  },
  {
    stateName: "Arkansas",
    stateCode: "AR",
  },
  {
    stateName: "California",
    stateCode: "CA",
  },
  {
    stateName: "Colorado",
    stateCode: "CO",
  },
  {
    stateName: "Connecticut",
    stateCode: "CT",
  },
  {
    stateName: "Delaware",
    stateCode: "DE",
  },
  {
    stateName: "Distric of Columbia",
    stateCode: "DC",
  },
  {
    stateName: "Florida",
    stateCode: "FL",
  },
  {
    stateName: "Georgia",
    stateCode: "GA",
  },
  {
    stateName: "Hawaii",
    stateCode: "HI",
  },
  {
    stateName: "Idaho",
    stateCode: "ID",
  },
  {
    stateName: "Illinois",
    stateCode: "IL",
  },
  {
    stateName: "Indiana",
    stateCode: "IN",
  },
  {
    stateName: "Iowa",
    stateCode: "IA",
  },
  {
    stateName: "Kansas",
    stateCode: "KS",
  },
  {
    stateName: "Kentucky",
    stateCode: "KY",
  },
  {
    stateName: "Louisiana",
    stateCode: "LA",
  },
  {
    stateName: "Maine",
    stateCode: "ME",
  },
  {
    stateName: "Maryland",
    stateCode: "MD",
  },
  {
    stateName: "Massachusetts",
    stateCode: "MA",
  },
  {
    stateName: "Michigan",
    stateCode: "MI",
  },
  {
    stateName: "Minnesota",
    stateCode: "MN",
  },
  {
    stateName: "Mississippi",
    stateCode: "MS",
  },
  {
    stateName: "Missouri",
    stateCode: "MO",
  },
  {
    stateName: "Montana",
    stateCode: "MT",
  },
  {
    stateName: "Nebraska",
    stateCode: "NE",
  },
  {
    stateName: "Nevada",
    stateCode: "NV",
  },
  {
    stateName: "New Hampshire",
    stateCode: "NH",
  },
  {
    stateName: "New Jersey",
    stateCode: "NJ",
  },
  {
    stateName: "New Mexico",
    stateCode: "NM",
  },
  {
    stateName: "New York",
    stateCode: "NY",
  },
  {
    stateName: "North Carolina",
    stateCode: "NC",
  },
  {
    stateName: "North Dakota",
    stateCode: "ND",
  },
  {
    stateName: "Ohio",
    stateCode: "OH",
  },
  {
    stateName: "Oklahoma",
    stateCode: "OK",
  },
  {
    stateName: "Oregon",
    stateCode: "OR",
  },
  {
    stateName: "Pennsylvania",
    stateCode: "PA",
  },
  {
    stateName: "Rhode Island",
    stateCode: "RI",
  },
  {
    stateName: "South Carolina",
    stateCode: "SC",
  },
  {
    stateName: "South Dakota",
    stateCode: "SD",
  },
  {
    stateName: "Tennessee",
    stateCode: "TN",
  },
  {
    stateName: "Texas",
    stateCode: "TX",
  },
  {
    stateName: "Utah",
    stateCode: "UT",
  },
  {
    stateName: "Vermont",
    stateCode: "VT",
  },
  {
    stateName: "Virginia",
    stateCode: "VA",
  },
  {
    stateName: "Washington",
    stateCode: "WA",
  },
  {
    stateName: "West Virginia",
    stateCode: "WV",
  },
  {
    stateName: "Wisconsin",
    stateCode: "WI",
  },
  {
    stateName: "Wyoming",
    stateCode: "WY",
  },
];

const SubExploreFishMySpotByState = () => {
  const router = useRouter();

  return (
    <section className="bg-[#EDF0F2]">
      <div className="container py-20">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-food-truck text-primary">Explore fish my spot By State</h1>
        <div className="w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-36 h-1 xl:h-[6px] bg-secondary rounded mt-1 lg:mt-3 2xl:mt-5 mb-6 md:mb-10 2xl:mb-16"></div>
        <div className="grid grid-rows-26 sm:grid-rows-17 md:grid-rows-13 lg:grid-rows-9 grid-flow-col gap-x-4 gap-y-2 md:gap-x-11 md:gap-y-5">
          {
            states?.map((state, ind) => {
              return (
                <Link key={ind} href={`/services/${slugify(state?.stateName).toLowerCase()}`}>
                  <a
                    className="underline text-sm md:text-base 2xl:text-lg font-trade-gothic text-primary cursor-pointer"
                  >
                    {state?.stateName}
                  </a>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default SubExploreFishMySpotByState;