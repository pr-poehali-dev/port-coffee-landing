import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

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

      <div className="fixed top-4 left-4 z-50 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => !isAnimating && setCurrentSlide(index)}
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
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <Icon name="ChevronLeft" size={28} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <Icon name="ChevronRight" size={28} className="text-white" />
      </button>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className={`w-full max-w-6xl transition-all duration-500 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
          
          {currentSlide === 0 && (
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
          )}

          {currentSlide === 1 && (
            <div className="text-white space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold mb-8 text-center" style={{ fontFamily: "'Manrope', sans-serif" }}>
                О приложении
              </h2>
              <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                <CardContent className="p-10">
                  <p className="text-2xl text-foreground leading-relaxed mb-8">
                    <strong>Слушаем и Поддерживаем</strong> — это приложение, которое психологически поможет людям с трудностями в жизни, эмоциями и принятием себя.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                        <Icon name="Target" size={32} />
                        Цели проекта
                      </h3>
                      <ul className="space-y-3 text-lg text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Создать удобный инструмент для психологической самопомощи</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Обеспечить доступность ментальной поддержки 24/7</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Помочь людям отслеживать своё эмоциональное состояние</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Предоставить персонализированные рекомендации</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                        <Icon name="Lightbulb" size={32} />
                        Задачи
                      </h3>
                      <ul className="space-y-3 text-lg text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Разработать интуитивный дизайн интерфейса</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Создать систему дневника настроения</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Интегрировать психологические тесты</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Обеспечить конфиденциальность данных пользователя</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSlide === 2 && (
            <div className="text-white space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold mb-8 text-center" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Дизайн системы
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-lg">
                        <Icon name="MessageCircle" size={48} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Логотип</h3>
                    <p className="text-muted-foreground text-lg">
                      Два диалоговых облака символизируют поддержку, эмпатию и взаимопонимание
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Цвета</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-[#3DB4E6] shadow-lg"></div>
                        <div className="text-left">
                          <p className="font-bold text-foreground">Синий</p>
                          <p className="text-sm text-muted-foreground">#3DB4E6</p>
                          <p className="text-xs text-muted-foreground mt-1">Спокойствие, доверие</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-[#7DD3C0] shadow-lg"></div>
                        <div className="text-left">
                          <p className="font-bold text-foreground">Зелёный</p>
                          <p className="text-sm text-muted-foreground">#7DD3C0</p>
                          <p className="text-xs text-muted-foreground mt-1">Гармония, рост</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Шрифт</h3>
                    <div className="space-y-4 text-left">
                      <div>
                        <p className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>Manrope</p>
                        <p className="text-muted-foreground">Заголовки, акценты</p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-2xl text-foreground mb-2">Inter</p>
                        <p className="text-muted-foreground">Основной текст, читабельность</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Icon name="Palette" size={28} className="text-primary" />
                    Философия дизайна
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-lg text-muted-foreground">
                    <div>
                      <p className="flex items-start gap-3">
                        <Icon name="Sparkles" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span><strong>Минимализм:</strong> Чистый интерфейс без лишних элементов для снижения когнитивной нагрузки</span>
                      </p>
                    </div>
                    <div>
                      <p className="flex items-start gap-3">
                        <Icon name="Heart" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span><strong>Эмпатия:</strong> Мягкие цвета и формы создают ощущение безопасности и поддержки</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSlide === 3 && (
            <div className="text-white space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold mb-8 text-center" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Путь пользователя
              </h2>
              
              <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                <CardContent className="p-10">
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                    
                    <div className="space-y-8 relative">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg z-10">
                          1
                        </div>
                        <div className="flex-1 pt-3">
                          <h3 className="text-2xl font-bold text-foreground mb-2">Старт → Вход / Регистрация</h3>
                          <p className="text-lg text-muted-foreground">Пользователь знакомится с возможностями приложения и создаёт аккаунт</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg z-10">
                          2
                        </div>
                        <div className="flex-1 pt-3">
                          <h3 className="text-2xl font-bold text-foreground mb-2">Главная страница</h3>
                          <p className="text-lg text-muted-foreground">Приветствие, ежедневная медитация, быстрый доступ к основным функциям</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-foreground font-bold text-xl flex-shrink-0 shadow-lg z-10">
                          3
                        </div>
                        <div className="flex-1 pt-3">
                          <h3 className="text-2xl font-bold text-foreground mb-2">Основные разделы</h3>
                          <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-muted p-4 rounded-xl">
                              <p className="font-bold text-foreground flex items-center gap-2">
                                <Icon name="BookOpen" size={20} className="text-primary" />
                                Дневник настроения
                              </p>
                              <p className="text-sm text-muted-foreground mt-2">Отслеживание эмоций и состояния</p>
                            </div>
                            <div className="bg-muted p-4 rounded-xl">
                              <p className="font-bold text-foreground flex items-center gap-2">
                                <Icon name="ClipboardList" size={20} className="text-primary" />
                                Психологические тесты
                              </p>
                              <p className="text-sm text-muted-foreground mt-2">Определение состояния через ИИ</p>
                            </div>
                            <div className="bg-muted p-4 rounded-xl">
                              <p className="font-bold text-foreground flex items-center gap-2">
                                <Icon name="Newspaper" size={20} className="text-primary" />
                                Лента материалов
                              </p>
                              <p className="text-sm text-muted-foreground mt-2">Посты, советы, практики</p>
                            </div>
                            <div className="bg-muted p-4 rounded-xl">
                              <p className="font-bold text-foreground flex items-center gap-2">
                                <Icon name="Calendar" size={20} className="text-primary" />
                                Запись к психологу
                              </p>
                              <p className="text-sm text-muted-foreground mt-2">Консультация со специалистом</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg z-10">
                          4
                        </div>
                        <div className="flex-1 pt-3">
                          <h3 className="text-2xl font-bold text-foreground mb-2">Личный кабинет</h3>
                          <p className="text-lg text-muted-foreground">Профиль, статистика прогресса, история сессий, настройки</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSlide === 4 && (
            <div className="text-white space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold mb-8 text-center" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Экраны приложения
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/files/cc40e458-15b6-4399-8d22-b06582b8f25f.jpg" 
                        alt="Загрузочный экран"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-center">Загрузочный экран</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Первое впечатление</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-[9/16] bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl mb-4 flex items-center justify-center">
                      <Icon name="Sparkles" size={48} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-center">Старт</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Знакомство с функциями</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-[9/16] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mb-4 flex items-center justify-center">
                      <Icon name="UserPlus" size={48} className="text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground text-center">Регистрация</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Создание аккаунта</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-4 flex items-center justify-center">
                      <Icon name="Home" size={48} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-center">Главная</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Личный дашборд</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-[9/16] bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl mb-4 flex items-center justify-center">
                      <Icon name="BookOpen" size={48} className="text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground text-center">Дневник</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Записи настроения</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-[9/16] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mb-4 flex items-center justify-center">
                      <Icon name="User" size={48} className="text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-center">Профиль</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Личные данные</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSlide === 5 && (
            <div className="text-white space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold mb-8 text-center" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Ключевой функционал
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Icon name="Heart" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Медитации</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">Практики осознанности с управляемыми сессиями</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Дыхательные упражнения
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Визуализации
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                        <Icon name="BookOpen" size={32} className="text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Дневник</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">Отслеживание настроения и эмоций</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Ежедневные записи
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Статистика прогресса
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                        <Icon name="ClipboardList" size={32} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Тесты</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">Психологические тесты и диагностика</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Определение состояния
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Рекомендации по результатам
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-lg border-none shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Icon name="Newspaper" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Лента</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">Полезные материалы и советы</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Статьи от психологов
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        Истории успеха
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-primary to-secondary text-white border-none shadow-2xl">
                <CardContent className="p-10 text-center">
                  <Icon name="Target" size={64} className="mx-auto mb-6 opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">Миссия проекта</h3>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Сделать психологическую поддержку доступной каждому человеку в любое время и в любом месте, помогая людям становиться счастливее и увереннее в себе
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/60 text-sm flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
        <Icon name="ArrowLeft" size={16} />
        <span>Используйте стрелки или кнопки для навигации</span>
        <Icon name="ArrowRight" size={16} />
      </div>
    </div>
  );
};

export default Index;
