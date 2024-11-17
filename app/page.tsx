// pages/index.tsx

import ContentsSection from "@/components/layouts/main-content";
import RightSidebar from "@/components/layouts/main-insight";
import Layout from "@/components/layouts/main-layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side (Main Content) */}
        <ContentsSection />
        {/* Right Side (Top Reports & Saved Topics) */}
        <RightSidebar />
      </div>
    </Layout>
  );
};

export default HomePage;
