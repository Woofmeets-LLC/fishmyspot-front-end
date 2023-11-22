import axios from 'axios';
import SubResourceDetailPage from '../../../components/SubPages/ResourceDetailPage';
import HomeLayout from '../../../layouts/HomeLayout';

const ResourceDetails = ({ data }) => {
	return (
		<HomeLayout>
			<SubResourceDetailPage data={data} />
		</HomeLayout>
	);
};

export async function getServerSideProps({ params: { slug } }) {
	const data = await axios
		.get(
			`https://cms.fishmyspot.com/api/resources?filters\[slug\][$eq]=${slug}`
		)
		.then((res) => res.data.data);
	if (data.length === 0) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			data: data[0],
		},
	};
}

export default ResourceDetails;
