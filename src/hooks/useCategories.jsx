import { useState, useCallback } from 'react';

const useCategories = (initialCategory) => {
	const [selectedCategory, setSelectedCategory] = useState(initialCategory);
	
	const handleCategoryChange = useCallback((category) => {
		setSelectedCategory(category);
	}, []);
	
	return { selectedCategory, handleCategoryChange };
};

export default useCategories;
