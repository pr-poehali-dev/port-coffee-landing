import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Anchor" size={32} className="text-secondary" />
            <span className="text-2xl font-bold text-primary-foreground">Порт о кофе</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">О нас</a>
            <a href="#menu" className="text-primary-foreground hover:text-secondary transition-colors">Меню</a>
            <a href="#gallery" className="text-primary-foreground hover:text-secondary transition-colors">Галерея</a>
            <a href="#contacts" className="text-primary-foreground hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button variant="secondary" className="hidden md:flex">
            Забронировать стол
          </Button>
        </nav>
      </header>

      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.7)), url('https://cdn.poehali.dev/projects/905da8c8-7d71-4021-8973-e6535c25edd3/files/fefe1ba2-8ae5-4303-81a7-759d815fa586.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Icon name="Ship" size={64} className="text-secondary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Порт о кофе
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Кофейня с морской душой. Каждая чашка — путешествие к новым горизонтам
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="text-lg">
              <Icon name="Coffee" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Icon name="MapPin" size={20} className="mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Compass" size={40} className="text-primary" />
                <h2 className="text-4xl font-bold text-primary">О нас</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Порт о кофе" — это не просто кофейня, это место, где встречаются любители кофе и романтики морских путешествий. Мы создали атмосферу старинного портового кафе, где каждый гость чувствует себя путешественником, а каждая чашка кофе — это билет в новое приключение.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наши бариста — настоящие капитаны кофейного дела, которые с любовью готовят напитки из отборных зёрен со всех концов света.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4">
                  <Icon name="Award" size={32} className="text-secondary mx-auto mb-2" />
                  <p className="font-semibold text-primary">5+ лет</p>
                  <p className="text-sm text-muted-foreground">на рынке</p>
                </div>
                <div className="text-center p-4">
                  <Icon name="Users" size={32} className="text-secondary mx-auto mb-2" />
                  <p className="font-semibold text-primary">10000+</p>
                  <p className="text-sm text-muted-foreground">гостей</p>
                </div>
                <div className="text-center p-4">
                  <Icon name="Star" size={32} className="text-secondary mx-auto mb-2" />
                  <p className="font-semibold text-primary">4.9</p>
                  <p className="text-sm text-muted-foreground">рейтинг</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/905da8c8-7d71-4021-8973-e6535c25edd3/files/56dc3136-790b-4f4e-a200-e455126d66e6.jpg" 
                alt="Интерьер кофейни" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Icon name="Coffee" size={40} className="text-primary" />
              <h2 className="text-4xl font-bold text-primary">Наше меню</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Кофе из лучших уголков мира, приготовленный с душой морского путешественника
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Эспрессо "Маяк"</h3>
                    <p className="text-sm text-muted-foreground">Классический крепкий эспрессо</p>
                  </div>
                  <Icon name="Waves" size={32} className="text-secondary" />
                </div>
                <p className="text-2xl font-bold text-primary">180₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Капучино "Парус"</h3>
                    <p className="text-sm text-muted-foreground">Нежный капучино с пенкой</p>
                  </div>
                  <Icon name="Wind" size={32} className="text-secondary" />
                </div>
                <p className="text-2xl font-bold text-primary">240₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Латте "Горизонт"</h3>
                    <p className="text-sm text-muted-foreground">Мягкий латте с карамелью</p>
                  </div>
                  <Icon name="Sunrise" size={32} className="text-secondary" />
                </div>
                <p className="text-2xl font-bold text-primary">260₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Флэт Уайт "Штиль"</h3>
                    <p className="text-sm text-muted-foreground">Идеальный баланс кофе и молока</p>
                  </div>
                  <Icon name="Sparkles" size={32} className="text-secondary" />
                </div>
                <p className="text-2xl font-bold text-primary">280₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Раф "Морской бриз"</h3>
                    <p className="text-sm text-muted-foreground">Авторский раф с лавандой</p>
                  </div>
                  <Icon name="CloudRain" size={32} className="text-secondary" />
                </div>
                <p className="text-2xl font-bold text-primary">300₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Американо "Семь морей"</h3>
                    <p className="text-sm text-muted-foreground">Крепкий американо</p>
                  </div>
                  <Icon name="Droplets" size={32} className="text-secondary" />
                </div>
                <p className="text-2xl font-bold text-primary">200₽</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="default">
              Полное меню с десертами
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Icon name="Image" size={40} className="text-primary" />
              <h2 className="text-4xl font-bold text-primary">Атмосфера</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Окунитесь в уютную атмосферу нашей кофейни
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/905da8c8-7d71-4021-8973-e6535c25edd3/files/56dc3136-790b-4f4e-a200-e455126d66e6.jpg" 
                alt="Интерьер" 
                className="rounded-lg shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/905da8c8-7d71-4021-8973-e6535c25edd3/files/9fcc9fc7-bf03-4d1c-8f94-e5c8cfd5b770.jpg" 
                alt="Латте арт" 
                className="rounded-lg shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:col-span-2 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/905da8c8-7d71-4021-8973-e6535c25edd3/files/fefe1ba2-8ae5-4303-81a7-759d815fa586.jpg" 
                alt="Вид на море" 
                className="rounded-lg shadow-lg w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Icon name="MapPin" size={40} className="text-secondary" />
              <h2 className="text-4xl font-bold">Контакты</h2>
            </div>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Мы ждём вас каждый день с 8:00 до 23:00
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-primary-foreground/80">г. Владивосток,<br />ул. Портовая, 12</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p className="text-primary-foreground/80">+7 (423) 555-77-88</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-primary-foreground/80">hello@portocoffee.ru</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="secondary">
              <Icon name="Instagram" size={20} className="mr-2" />
              Мы в Instagram
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Icon name="Anchor" size={24} />
            <span className="text-xl font-bold">Порт о кофе</span>
          </div>
          <p className="text-white/80">© 2024 Порт о кофе. Все права защищены.</p>
          <p className="text-white/60 mt-2 text-sm">Кофе с морской душой ⚓</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
