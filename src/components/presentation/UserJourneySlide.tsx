import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const UserJourneySlide = () => {
  return (
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
  );
};

export default UserJourneySlide;
