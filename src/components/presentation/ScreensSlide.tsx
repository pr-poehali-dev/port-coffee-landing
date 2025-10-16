import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ScreensSlide = () => {
  return (
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
  );
};

export default ScreensSlide;
