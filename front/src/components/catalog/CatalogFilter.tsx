import { useEffect, useState } from 'react';
import { fetchAllCategories } from '@/lib/products/categories';
import { Category } from '@/models/products';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

interface CatalogFilterProps {
  initialCategory: string;
  onFilterChange: (category: string) => void;
}

const CatalogFilter: React.FC<CatalogFilterProps> = ({ initialCategory, onFilterChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await fetchAllCategories();
        setCategories(cats);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    onFilterChange(selectedCategory);
  }, [selectedCategory, onFilterChange]);

  return (
    <Select defaultValue={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
      <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 text-2xl">
        <SelectValue placeholder={selectedCategory || 'FILTER'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-xl">Categories</SelectLabel>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.name} className="text-xl">
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CatalogFilter;
