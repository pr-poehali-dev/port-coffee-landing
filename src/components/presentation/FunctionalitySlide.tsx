import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FunctionalitySlide = () => {
  return (
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
  );
};

export default FunctionalitySlide;
