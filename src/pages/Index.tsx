import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const coffeeMenu = [
    { name: "Капитанский эспрессо", price: "180₽", desc: "Крепкий и насыщенный" },
    { name: "Морской капучино", price: "220₽", desc: "Нежный с пенкой-волной" },
    { name: "Латте \"Морской бриз\"", price: "250₽", desc: "С нотками ванили" },
    { name: "Раф \"Якорная стоянка\"", price: "270₽", desc: "Сливочная нежность" },
    { name: "Флэт уайт \"Штиль\"", price: "240₽", desc: "Сбалансированный вкус" },
    { name: "Американо \"Волна\"", price: "150₽", desc: "Классика в море кофе" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
              <Icon name="Anchor" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                Порт о кофе
              </h1>
              <p className="text-xs text-muted-foreground">Кофейня у причала</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-4 space-y-3 animate-fade-in">
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#menu" className="block text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#gallery" className="block text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-primary text-8xl">⚓</div>
          <div className="absolute top-40 right-20 text-secondary text-6xl">🌊</div>
          <div className="absolute bottom-20 left-1/4 text-accent text-7xl">⛵</div>
        </div>

        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ваш порт<br />в море кофе
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Бросьте якорь и насладитесь лучшим кофе<br />в атмосфере морских путешествий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
              <Icon name="Coffee" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
              <Icon name="MapPin" size={20} className="mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Почему мы?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Ship" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Морская атмосфера</h3>
                <p className="text-muted-foreground">
                  Уникальный интерьер в морском стиле переносит вас на борт корабля
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Coffee" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Качественный кофе</h3>
                <p className="text-muted-foreground">
                  Отборные зёрна из разных уголков мира и профессиональные бариста
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Уютная гавань</h3>
                <p className="text-muted-foreground">
                  Идеальное место для встреч, работы или уединённого отдыха
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Наше меню
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Каждый напиток — это путешествие</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coffeeMenu.map((item, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground flex-1">{item.name}</h3>
                    <span className="text-xl font-bold text-secondary">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon name="Coffee" size={16} className="text-primary" />
                    <span className="text-xs text-muted-foreground">Готовим с любовью</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Icon name="FileText" size={20} className="mr-2" />
              Полное меню (PDF)
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Галерея
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <Icon name={i % 4 === 0 ? "Anchor" : i % 3 === 0 ? "Ship" : i % 2 === 0 ? "Coffee" : "Waves"} size={48} className="text-primary/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Waves" size={64} className="mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Присоединяйтесь к нашей команде
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Каждая чашка кофе — это новое приключение.<br />
              Станьте частью нашей морской семьи!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Users" size={20} className="mr-2" />
                Программа лояльности
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Gift" size={20} className="mr-2" />
                Подарочные карты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Найдите нас
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Контакты</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Адрес</p>
                    <p className="text-muted-foreground">ул. Морская, 42<br />Санкт-Петербург, 190000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Часы работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 08:00 – 22:00<br />Сб-Вс: 09:00 – 23:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <p className="text-muted-foreground">+7 (812) 555-01-23</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@portocoffee.ru</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                  <Icon name="Phone" size={20} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Забронировать столик</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Имя</label>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Дата</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Время</label>
                    <input 
                      type="time" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Количество гостей</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>1 гость</option>
                    <option>2 гостя</option>
                    <option>3-4 гостя</option>
                    <option>5+ гостей</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Icon name="Check" size={20} className="mr-2" />
                  Забронировать
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Anchor" size={32} />
            <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Порт о кофе
            </h3>
          </div>
          <p className="text-white/80 mb-4">Ваш причал в море кофейных вкусов</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mb-4">
            <a href="#about" className="hover:text-white transition-colors">О нас</a>
            <a href="#menu" className="hover:text-white transition-colors">Меню</a>
            <a href="#gallery" className="hover:text-white transition-colors">Галерея</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </div>
          <p className="text-sm text-white/60">© 2024 Порт о кофе. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
