import Icon from "@/components/ui/icon";

const TitleSlide = () => {
  return (
    <div className="text-center text-white space-y-8 animate-fade-in">
      <div className="inline-block mb-8">
        <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
          <Icon name="Heart" size={64} className="text-white" />
        </div>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
        Слушаем и Поддерживаем
      </h1>
      <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light">
        Курсовой проект: Разработка дизайна мобильного приложения<br />для психологической помощи
      </p>
      <div className="pt-8 text-xl text-white/80">
        <p>Выполнила: Шумова Д.В. | Группа ДС 22-21</p>
        <p className="mt-2">Руководитель: Сорочан Ю.В.</p>
      </div>
      <div className="pt-12 flex justify-center gap-4">
        <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-100"></div>
        <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  );
};

export default TitleSlide;
