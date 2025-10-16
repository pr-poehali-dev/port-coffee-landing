import { useState, useEffect } from "react";
import TitleSlide from "@/components/presentation/TitleSlide";
import AboutSlide from "@/components/presentation/AboutSlide";
import DesignSlide from "@/components/presentation/DesignSlide";
import UserJourneySlide from "@/components/presentation/UserJourneySlide";
import ScreensSlide from "@/components/presentation/ScreensSlide";
import FunctionalitySlide from "@/components/presentation/FunctionalitySlide";
import NavigationControls from "@/components/presentation/NavigationControls";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    { id: 0, title: "Титульный слайд" },
    { id: 1, title: "О приложении" },
    { id: 2, title: "Дизайн" },
    { id: 3, title: "Путь пользователя" },
    { id: 4, title: "Экраны приложения" },
    { id: 5, title: "Функционал" },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleSlideChange = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isAnimating]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>

      <NavigationControls
        slides={slides}
        currentSlide={currentSlide}
        isAnimating={isAnimating}
        onSlideChange={handleSlideChange}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className={`w-full max-w-6xl transition-all duration-500 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
          {currentSlide === 0 && <TitleSlide />}
          {currentSlide === 1 && <AboutSlide />}
          {currentSlide === 2 && <DesignSlide />}
          {currentSlide === 3 && <UserJourneySlide />}
          {currentSlide === 4 && <ScreensSlide />}
          {currentSlide === 5 && <FunctionalitySlide />}
        </div>
      </div>
    </div>
  );
};

export default Index;
