import React from 'react';
import { CatalogTemplate } from '../components/templates/catalogTemplate';
import { SearchInput } from '../components/atoms/searchInput';
import { CategoriesScroller } from '../components/molecules/categoriesScroller';
import { BentoNovedades } from '../components/molecules/bentoNovedades';
import { ProductGrid } from '../components/molecules/productGrid';
import { IconButton } from '../components/atoms/iconButton';

const Catalogo = () => {
  const categories = ["Todos los productos", "Electrónica", "Moda", "Hogar y Jardín", "Deportes"];
  const featuredProduct = {
    title: "Aura Pro Noise Cancelling",
    description: "Experimenta el silencio absoluto y una claridad de audio impecable.",
    price: "$299",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000"
  };

  const secondaryProducts = [
    { title: "Chrono Smartwatch", price: "$149", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000" },
    { title: "Mint Instant Cam", price: "$89", img: "https://images.unsplash.com/photo-1526170315870-ef6897388a22?q=80&w=1000" }
  ];

  const trendingProducts = [
    { id: 1, title: "Velocity Elite Running Shoes", price: "$129.99", rating: "4.9", count: "420", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000" },
    { id: 2, title: "Essential Organic Cotton Tee", price: "$24.00", rating: "4.5", count: "85", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000" },
    { id: 3, title: "Artisan Pour-Over Set", price: "$45.00", rating: "4.8", count: "210", img: "https://images.unsplash.com/photo-1544787210-2827443cb39b?q=80&w=1000", sale: "15% OFF" },
    { id: 4, title: "Fitness Tracker Pro Series", price: "$89.50", rating: "4.6", count: "18", img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1000" }
  ];

  return (
    <CatalogTemplate
      searchBar={
        <SearchInput placeholder="Busca productos, marcas y más..." />
      }

      categories={
        <CategoriesScroller
          categories={categories}
          activeCategory="Todos los productos"
          onCategoryClick={(cat) => console.log("Filtrando por:", cat)}
        />
      }

      featuredSection={
        <BentoNovedades
          featured={featuredProduct}
          secondaries={secondaryProducts}
        />
      }

      productsGrid={
        <ProductGrid products={trendingProducts} />
      }

      pagination={
        <div className="flex items-center gap-2">
          <IconButton icon="chevron_left" className="h-10 w-10 border border-gray-200" />
          <button className="h-10 w-10 rounded-xl bg-orange-600 text-white font-bold shadow-md shadow-orange-200">1</button>
          <button className="h-10 w-10 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50">2</button>
          <IconButton icon="chevron_right" className="h-10 w-10 border border-gray-200" />
        </div>
      }
    />
  );
};

export default Catalogo;