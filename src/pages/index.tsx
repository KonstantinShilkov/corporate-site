import MainLayout from "@/layouts/MainLayout";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="homepage__container">
        <h2>Welcome to the DDD</h2>
        <p>
          Добро пожаловать в Инфрасек.DDP! Ваш инструмент для проактивной защиты
          от киберугроз. Отслеживайте атаки в реальном времени, управляйте
          ловушками и анализируйте поведение злоумышленников.
        </p>
      </div>
    </MainLayout>
  );
};
export default HomePage;
