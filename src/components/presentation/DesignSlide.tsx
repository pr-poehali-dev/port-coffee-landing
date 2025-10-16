import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DesignSlide = () => {
  return (
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
  );
};

export default DesignSlide;
