import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSlide = () => {
  return (
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
  );
};

export default AboutSlide;
