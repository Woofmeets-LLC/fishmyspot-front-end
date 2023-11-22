import axios from 'axios';
import Link from 'next/link';
import slugify from 'slugify';
import useSwr from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const SubExploreFishMySpotByState = () => {
	const { data: states, error } = useSwr(
		'https://cms.fishmyspot.com/api/states?sort[0]=state&pagination[page]=1&pagination[pageSize]=100&populate=*',
		fetcher
	);

	return (
		<section className="bg-gray-100">
			<div className="container py-20">
				<h1 className="font-food-truck text-xl uppercase text-primary sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
					Explore fishmyspot By State
				</h1>
				<div className="mt-1 mb-6 h-1 w-16 rounded bg-secondary md:mb-10 md:w-20 lg:mt-3 lg:w-24 xl:h-[6px] xl:w-28 2xl:mt-5 2xl:mb-16 2xl:w-36"></div>
				<div className="grid grid-flow-row-dense auto-rows-auto grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
					{states?.data?.map((state) => {
						return (
							<Link
								key={state.id}
								href={`/services/${slugify(
									state?.attributes?.state
								).toLowerCase()}`}>
								<a className="cursor-pointer font-trade-gothic text-base text-primary underline underline-offset-2 2xl:text-lg">
									{state?.attributes?.state}
								</a>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default SubExploreFishMySpotByState;
