import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="homepage_container">
        <h2 className="homepage_title">Welcome to the DDD</h2>
        <p className="homepage_text">Select an option from the sidebar to get started.</p>
      </div>
    </MainLayout>
  );
}