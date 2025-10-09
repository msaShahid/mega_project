import React from 'react';
import GlobalSuspense from '../loaders/GlobalSuspense'


const HeroSection = React.lazy(() => import('./Hero'));
const ProductSection = React.lazy(() => import('./Product'));
const FeaturesSection = React.lazy(() => import('./Features'));
const DemoSection = React.lazy(() => import('./Demo'));
const SocialSection = React.lazy(() => import('./Social'));
const AboutSection = React.lazy(() => import('./About'));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">

      {/* Hero Section */}
      <GlobalSuspense>
        <HeroSection />
      </GlobalSuspense>

      {/* Product Overview Section */}
      <GlobalSuspense>
        <ProductSection />
      </GlobalSuspense>

      {/* Features Section */}
      <GlobalSuspense>
        <FeaturesSection />
      </GlobalSuspense>

      {/* Demo/Video Section */}
      <GlobalSuspense>
        <DemoSection />
      </GlobalSuspense>

      {/* Social Proof Section */}
      <GlobalSuspense>
        <SocialSection />
      </GlobalSuspense>

      {/* About Us Section */}
      <GlobalSuspense>
        <AboutSection />
      </GlobalSuspense>

    </div>
  );
}
