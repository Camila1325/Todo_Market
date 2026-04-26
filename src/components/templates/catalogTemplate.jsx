import React from 'react';
import { MainLayout } from './mainLayout';

export const CatalogTemplate = ({
    searchBar,
    categories,
    featuredSection,
    productsGrid,
    pagination
}) => {
    return (
        <MainLayout>
            <main className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12 animate-in fade-in duration-500">

                <section className="flex flex-col gap-6">
                    <div className="max-w-2xl mx-auto w-full">
                        {searchBar}
                    </div>
                    {categories}
                </section>

                {featuredSection && (
                    <section>
                        {featuredSection}
                    </section>
                )}

                <section className="flex flex-col gap-6">
                    {productsGrid}

                    <div className="flex justify-center mt-8">
                        {pagination}
                    </div>
                </section>

            </main>
        </MainLayout>
    );
};