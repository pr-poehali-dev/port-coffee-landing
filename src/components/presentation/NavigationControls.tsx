import Icon from "@/components/ui/icon";

interface NavigationControlsProps {
  slides: Array<{ id: number; title: string }>;
  currentSlide: number;
  isAnimating: boolean;
  onSlideChange: (index: number) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

const NavigationControls = ({
  slides,
  currentSlide,
  isAnimating,
  onSlideChange,
  onPrevSlide,
  onNextSlide,
}: NavigationControlsProps) => {
  return (
    <>
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => !isAnimating && onSlideChange(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? "w-8 bg-white" 
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="fixed top-4 right-4 z-50 text-white text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      <button
        onClick={onPrevSlide}
        disabled={currentSlide === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <Icon name="ChevronLeft" size={28} className="text-white" />
      </button>

      <button
        onClick={onNextSlide}
        disabled={currentSlide === slides.length - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <Icon name="ChevronRight" size={28} className="text-white" />
      </button>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/60 text-sm flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
        <Icon name="ArrowLeft" size={16} />
        <span>Используйте стрелки или кнопки для навигации</span>
        <Icon name="ArrowRight" size={16} />
      </div>
    </>
  );
};

export default NavigationControls;
