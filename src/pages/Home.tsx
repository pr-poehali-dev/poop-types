import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import Icon from "@/components/ui/icon";

interface HomeProps {
  onNavigate: (page: string, courseId?: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const featuredCourses = [
    {
      id: '1',
      title: 'Полный курс по веб-разработке',
      description: 'Изучите HTML, CSS, JavaScript и React с нуля до профессионального уровня',
      category: 'Программирование',
      level: 'Начальный',
      duration: '40 часов',
      rating: 4.8,
      students: 12500,
      price: 3990,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    },
    {
      id: '2',
      title: 'Дизайн интерфейсов: от идеи до прототипа',
      description: 'Научитесь создавать современные UI/UX дизайны в Figma',
      category: 'Дизайн',
      level: 'Средний',
      duration: '25 часов',
      rating: 4.9,
      students: 8200,
      price: 2990,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
    {
      id: '3',
      title: 'Python для анализа данных',
      description: 'Освойте Python, pandas и машинное обучение для работы с данными',
      category: 'Data Science',
      level: 'Средний',
      duration: '35 часов',
      rating: 4.7,
      students: 15300,
      price: 4990,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    },
  ];

  const categories = [
    { name: 'Программирование', icon: 'Code', count: 156 },
    { name: 'Дизайн', icon: 'Palette', count: 89 },
    { name: 'Бизнес', icon: 'Briefcase', count: 124 },
    { name: 'Маркетинг', icon: 'TrendingUp', count: 78 },
    { name: 'Data Science', icon: 'Database', count: 67 },
    { name: 'Языки', icon: 'Languages', count: 92 },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Учись в своём темпе
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Тысячи курсов от лучших экспертов. Начни прямо сейчас и получи сертификат после завершения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 text-lg px-8"
                onClick={() => onNavigate('catalog')}
              >
                Выбрать курс
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg px-8"
              >
                Узнать больше
                <Icon name="PlayCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Популярные категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onNavigate('catalog')}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon name={category.icon as any} className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} курсов</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Популярные курсы
            </h2>
            <Button variant="ghost" className="gap-2" onClick={() => onNavigate('catalog')}>
              Смотреть все
              <Icon name="ArrowRight" size={18} />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onClick={() => onNavigate('course', course.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-slide-up">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-muted-foreground">Курсов</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <p className="text-muted-foreground">Студентов</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-muted-foreground">Довольных учеников</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
