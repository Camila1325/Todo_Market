import React from 'react';
import { ProductDetailTemplate } from '../components/templates/productDetailTemplate';
import { ImageGallery } from '../components/molecules/imageGallery';
import { ProductInfo } from '../components/molecules/productInfo';
import { ProductActions } from '../components/molecules/productActions';
import { ProductDetailTabs } from '../components/organisms/productDetailTabs';
import { ProductGrid } from '../components/organisms/productGrid';

const Product = () => {
    const product = {
        category: "Audio & Tech",
        title: "Aura Pro Noise-Cancelling Headphones",
        price: 299.00,
        rating: 4.5,
        reviews: 128,
        description: "Experience pure audio immersion with the Aura Pro. Featuring industry-leading active noise cancellation, custom 40mm drivers for rich bass and crisp highs, and a lightweight ergonomic design for all-day comfort. The 30-hour battery life ensures your playlist never stops.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBxAgvl5uV9ssdk6PXnV_R_5p250_-l1EqBYr6GgRB3zBVUB_HOAOumstF44APgwxzpF6Ary1rTh7KOAkZP8VfFM6sucjBn3kYSIaVylQ7eBcT1FW1q9c1xlbWfkHhZ3DiGYVVKNMRArXvjbR7XrFtKPg-FSJu5PzDL-YO9rkgy3yg2aQSFos_oisMrP2r67F-wLX80JGz2HTiBFYEpokg3nCu5LCDnNNbRFFWUa5DI3WTK6-l7qzwqNe_brY4mI_h5cQJ2CH7hlH3V",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDG5OxUsjKN2xC7rjDPkBYZ2orOWcfW4j3d58PYNip8FxJi4NpXggzM-1JLrp8i_cxs9xuxHva7b-bfLSHwbBTItamF5YfUo1JIoZNEIPi5Lr9tZbQRh-JHvNCp2D8irtgUA4tXmKZpNl70D9imqdWAwZC_EWDzS81SPi7AqqJlKeDN1ilH9iaKox64iwVHBZWvHLD09ksLTVqfx9qDab2pSgkhNsEOCAFExJf70cYEj9Tq14rfm6qVl7uy_gnRmsScftZCFN6rr_Xb",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBUJjDAQbLBi4HHc5iiFmTNeR5iWEuPpCuh3EfnMq8z-mUHcQ5ABSAo_5x8O3DL9WrX8ZfqcujYonYuLP8yvZrHrIaAxnWWG94etgTr0YyHK3Yvqy0tFgl4n47OOqVk6K5nzvJv_RnrpsTbd9btbGeK1dWTlM6f8rvWGuN2KDO6Cb5ChbA8uaqRI0TQslzpeGXbihD2rTp2JIp-PmjNZyi4BWsmKfWWVa7VVJvOkx-NCW56fWN4-108FxJDSPH431-XJwXqhvgr5-AJ"
        ],
        specs: [
            { label: "Marca", value: "Aura" },
            { label: "Modelo", value: "Pro ANC-100" },
            { label: "Conectividad", value: "Bluetooth 5.2" },
            { label: "Batería", value: "Hasta 30 horas" },
            { label: "Peso", value: "254g" },
            { label: "Garantía", value: "2 Años Limitada" }
        ]
    };

    const relatedProducts = [
        { id: 1, title: "Echo Desktop Speaker", price: 89.00, rating: 4.8, count: 45, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaLCl2diVeHk1GATpCIrM_AAUT6_7gorGFfeapu9l6x2FJ1D2rUTQ_lryD_9qciW2m4PB_o2jUKurnFZYWP3y-0Woi7464a9zbpGEGRLIapb2BqYoXbEw59dlFK_JatEJqaq_3UqysX4uZ-_JP1WOpgrB7ZqTIMWOrZ1rqldc3LdB60vGstkupZX4sdNpmwoM-wAymdds98xb-Uvorgdj-6pKe6wSoaNZHDNQMc57FNR5pp1JA0JwtiHU0KezbfiV1VPrrNsv0zI3e" },
        { id: 2, title: "Aura Pods True Wireless", price: 149.00, rating: 4.6, count: 92, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcryX1Erd99Lpv1HQun-7YIxkVuY6lZkaHpQneFVVyTKzu57_0vTl6WS1P85_gwHJqDvfOupCoGSlJLyvM3WvNvjYiY4eVLmvRplKbiYBf6VnPtOb2mlrzw1tZYOo32saKon4QDCZnSvwGoeYGxiYe542y2TzjoUCkYKm182jinSN91skESx9x3xtsqYDs1sywCO5gjx3d2VvzKhvLaLZUl9IrS1erBmovk8N1ltF_9h5aOKBI8p5EL24uAna4yOhhf0_Kx5jNwf6p" },
        { id: 3, title: "FastCharge Wireless Pad", price: 45.00, rating: 4.9, count: 210, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVNVMxpkQnrergsP_7aHo31zkc5GgFRe8tvSU7-HTIzN-ooWB38CCweYAvvuPte_lViSoSMOMT8aPyJHVuPLV0raBkI8SfrxpRuVqbPdntbRo7p0_sZGS6ODIEEDIJH0L2wQ-Eb7GkLJkSwRWC1nSl4_Hrx4JeOVABvXs82z7y74tPD92RlQ2RXvVKxJFSiUBSFCZyPhq9ejrP37GKmE9BQRl7LHkaLnydweDt38YdKu0X0H63aS4gm9ipUZd8V9FuUSI2e3Horhy3" },
        { id: 4, title: "Chrono Smartwatch Pro", price: 210.00, rating: 4.7, count: 56, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1rQkd0-FpUOVs0A3j0yKZsS8pS-UdfUqVvjlJN4kN5kcTQtoDyEUsP0tlmOI3bt7F3nM9o2bBJvWULKTs47iKT3mvo4Tkq-MG-CT_4u5ujtPdBvCTDXGPC8wnUhBpFIakaqhlAsMYX-3k6uKeqkicRNTieYvK9QZQY8HoQFlzamdATW1ncV1TxF2eVj9ouVA0xRTKduynnJ5G55JMfATRFIaLbmseEE6u-4CO6XrS_8nTyeX8uvgTegZEvOk0HuOCiwu6FSRFkDy8" }
    ];

    return (
        <ProductDetailTemplate
            gallery={<ImageGallery images={product.images} />}
            info={
                <ProductInfo 
                    category={product.category}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    description={product.description}
                />
            }
            actions={<ProductActions product={product} />}
            tabs={<ProductDetailTabs specs={product.specs} />}
            relatedProducts={<ProductGrid products={relatedProducts} />}
        />
    );
};

export default Product;
