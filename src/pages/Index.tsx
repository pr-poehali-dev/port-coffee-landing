import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<'home' | 'exercises' | 'journal' | 'profile'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">MindCare</h1>
          <p className="text-muted-foreground">Дизайн мобильного приложения</p>
        </div>

        <div className="bg-card rounded-[40px] shadow-2xl overflow-hidden border-8 border-foreground/10">
          <div className="bg-gradient-to-b from-primary/10 to-transparent p-6 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-muted-foreground">Добро пожаловать</p>
                <h2 className="text-2xl font-bold text-foreground">Анна</h2>
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="User" size={28} className="text-white" />
              </div>
            </div>

            {activeScreen === 'home' && (
              <div className="space-y-4 animate-fade-in">
                <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Heart" size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Настроение сегодня</h3>
                        <p className="text-sm text-muted-foreground mb-3">Как вы себя чувствуете?</p>
                        <div className="flex gap-2">
                          {['😊', '😌', '😐', '😔', '😢'].map((emoji, i) => (
                            <button key={i} className="w-10 h-10 rounded-full bg-accent/50 hover:bg-accent transition-colors text-lg">
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur border-none shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Ежедневная медитация</p>
                        <h3 className="font-semibold text-foreground mb-2">Дыхание спокойствия</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Clock" size={16} />
                          <span>10 минут</span>
                        </div>
                      </div>
                      <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90">
                        <Icon name="Play" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveScreen('exercises')}>
                    <CardContent className="p-5 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-secondary/20 flex items-center justify-center">
                        <Icon name="Sparkles" size={24} className="text-secondary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Упражнения</h3>
                      <p className="text-xs text-muted-foreground">24 практики</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveScreen('journal')}>
                    <CardContent className="p-5 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Icon name="BookOpen" size={24} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Дневник</h3>
                      <p className="text-xs text-muted-foreground">Ваши записи</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">Ваш прогресс</h3>
                      <span className="text-sm text-primary font-medium">7 дней</span>
                    </div>
                    <div className="flex gap-1.5 mb-2">
                      {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                        <div key={day} className="flex-1">
                          <div className={`h-16 rounded-lg ${day <= 5 ? 'bg-primary' : 'bg-accent/50'}`}></div>
                          <p className="text-xs text-center text-muted-foreground mt-1">
                            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][day - 1]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeScreen === 'exercises' && (
              <div className="space-y-4 animate-fade-in">
                <Button variant="ghost" onClick={() => setActiveScreen('home')} className="mb-2">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Назад
                </Button>

                <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name="Wind" size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Техника 4-7-8</h3>
                        <p className="text-sm text-muted-foreground mb-2">Дыхательное упражнение для снятия стресса</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            5 мин
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="TrendingUp" size={14} />
                            Легко
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                        <Icon name="Brain" size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Осознанность</h3>
                        <p className="text-sm text-muted-foreground mb-2">Практика присутствия в моменте</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            10 мин
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="TrendingUp" size={14} />
                            Средне
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center flex-shrink-0">
                        <Icon name="Smile" size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Благодарность</h3>
                        <p className="text-sm text-muted-foreground mb-2">Упражнение на позитивное мышление</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            7 мин
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="TrendingUp" size={14} />
                            Легко
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeScreen === 'journal' && (
              <div className="space-y-4 animate-fade-in">
                <Button variant="ghost" onClick={() => setActiveScreen('home')} className="mb-2">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Назад
                </Button>

                <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">Мои записи</h3>
                      <Button size="sm" className="rounded-full bg-primary">
                        <Icon name="Plus" size={18} />
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-accent/30 border border-primary/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Сегодня, 14:30</span>
                          <span className="text-lg">😊</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Сегодня был продуктивный день. Удалось завершить проект и даже прогуляться...
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-secondary/20 border border-secondary/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Вчера, 21:15</span>
                          <span className="text-lg">😌</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Вечерняя медитация помогла расслабиться после напряженного дня...
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">2 дня назад</span>
                          <span className="text-lg">😐</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Немного тревожный день, но дыхательные упражнения помогли...
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeScreen === 'profile' && (
              <div className="space-y-4 animate-fade-in">
                <Button variant="ghost" onClick={() => setActiveScreen('home')} className="mb-2">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Назад
                </Button>

                <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
                  <CardContent className="p-5 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">Анна Смирнова</h3>
                    <p className="text-sm text-muted-foreground mb-4">anna@example.com</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">42</p>
                        <p className="text-xs text-muted-foreground">Дней</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">156</p>
                        <p className="text-xs text-muted-foreground">Практик</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">28</p>
                        <p className="text-xs text-muted-foreground">Записей</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Settings" size={20} className="mr-3" />
                        Настройки
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Bell" size={20} className="mr-3" />
                        Уведомления
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="HelpCircle" size={20} className="mr-3" />
                        Помощь
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          <div className="bg-white border-t border-border/50 px-6 py-4">
            <div className="flex justify-around items-center">
              <button 
                onClick={() => setActiveScreen('home')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <Icon name="Home" size={24} />
                <span className="text-xs font-medium">Главная</span>
              </button>
              
              <button 
                onClick={() => setActiveScreen('exercises')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'exercises' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <Icon name="Sparkles" size={24} />
                <span className="text-xs font-medium">Практики</span>
              </button>
              
              <button 
                onClick={() => setActiveScreen('journal')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'journal' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <Icon name="BookOpen" size={24} />
                <span className="text-xs font-medium">Дневник</span>
              </button>
              
              <button 
                onClick={() => setActiveScreen('profile')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'profile' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <Icon name="User" size={24} />
                <span className="text-xs font-medium">Профиль</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Интерактивный прототип дизайна</p>
          <p className="text-xs mt-1">Нажимайте на кнопки для навигации</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
