const CategorySection = ({ blogsCategory, setBlogsCategory, categories }) => {
  return (
    <div className="flex items-center justify-end pb-8">
      <span className="inline-block pr-2 font-trade-gothic text-lg">
        Category
      </span>
      <span className="inline-block">
        <select
          name="category"
          id="category"
          className="rounded border border-gray-200 py-1 px-3 font-trade-gothic focus:outline-none"
          onChange={(e) => setBlogsCategory(e.target.value)}
        >
          <option value="">Select</option>
          {categories?.map((category) => (
            <option
              key={category.id}
              value={category?.attributes?.name}
              selected={blogsCategory === category?.attributes?.name}
            >
              {category?.attributes?.name}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default CategorySection;
