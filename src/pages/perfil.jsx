import React from 'react';
import { MainLayout } from '../components/templates/mainLayout';
import { ProfileHeader } from '../components/molecules/profileHeader';
import { ProfileStats } from '../components/molecules/profileStats';
import { ProfileMenu } from '../components/organisms/profileMenu';

const Perfil = () => {
    // Datos demo extraídos del diseño de Stitch
    const userData = {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxwUXEwrimsFIhCuhWDX1t9FLG3KkJ5fAzOKo41gk_z767bGP_8Ia7utOTcKtdifoixQc-uAEwX3gWPqmjvyglsc7pjVUHNHtA8HtfipFTgQgA5NYHnvK2pH0YZt2Eil2pCzIArTu_K76OvQg0DGzOGE8_4342bfmfzCJuRNktjU9TgTLrlGbnMsVb1Mux2WREOsdqBx5NEV_enKfc1X5TnzDt7zBxDVPpV2aKmQy92ZXBWOj0kXn8Pfooh8cOorNZxGDEM-Qp_wn9"
    };

    const stats = {
        totalOrders: 42,
        points: 1250
    };

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Profile Header */}
                <ProfileHeader user={userData} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Account Stats */}
                    <div className="lg:col-span-4">
                        <ProfileStats stats={stats} />
                    </div>

                    {/* Navigation Menu */}
                    <div className="lg:col-span-8">
                        <ProfileMenu />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Perfil;
