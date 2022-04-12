/* eslint-disable import/no-anonymous-default-export */

import { useState } from "react";
import Categories from "../../components/SubPages/ServicesPage/Categories";

export default {
    title: 'pages/Services Page'
}

export const ServicesStoryA = () => {
    const [query, setQuery] = useState({ location: '', typeFish: [], rating: [], experience: [], price: [0, 1000] });
    return (<Categories getQuery={q => setQuery(q)} />)
};
ServicesStoryA.storyName = "Categories";