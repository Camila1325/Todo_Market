import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../components/templates/mainLayout';
import { ProfileHeader } from '../components/molecules/profileHeader';
import { ProfileStats } from '../components/molecules/profileStats';
import { ProfileMenu } from '../components/organisms/profileMenu';
import { useAuth } from '../context/AuthContext';

const Perfil = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/auth');
        }
    }, [user, loading, navigate]);

    if (loading || !user) return null;

    const userData = {
        name: user.displayName || "Usuario de Todo Market",
        email: user.email,
        avatar: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}&background=f97316&color=fff&size=256`
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
