const CategorySection = ({ blogsCategory, setBlogsCategory, categories }) => {
  return (
    <div className="flex items-center justify-end pb-8">
      <span className="inline-block pr-2 font-trade-gothic text-xs text-blue-400">
        Category
      </span>
      <span className="inline-block">
        <select
          name="category"
          id="category"
          className="rounded border border-gray-200 py-1 px-3 font-trade-gothic text-xs text-blue-400 focus:outline-none"
          onChange={(e) => setBlogsCategory(e.target.value)}
          value={blogsCategory}
        >
          <option value="">Select</option>
          {categories?.map((category) => (
            <option key={category.id} value={category?.attributes?.name}>
              {category?.attributes?.name}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default CategorySection;
