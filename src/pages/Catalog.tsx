import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface CatalogProps {
  onNavigate: (page: string, courseId?: string) => void;
}

const Catalog = ({ onNavigate }: CatalogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const allCourses = [
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
    {
      id: '4',
      title: 'Основы цифрового маркетинга',
      description: 'Изучите SEO, контент-маркетинг, таргетированную рекламу и аналитику',
      category: 'Маркетинг',
      level: 'Начальный',
      duration: '20 часов',
      rating: 4.6,
      students: 9800,
      price: 2490,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      id: '5',
      title: 'Мобильная разработка с React Native',
      description: 'Создавайте кроссплатформенные приложения для iOS и Android',
      category: 'Программирование',
      level: 'Продвинутый',
      duration: '45 часов',
      rating: 4.8,
      students: 6700,
      price: 5990,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    },
    {
      id: '6',
      title: 'Английский для IT-специалистов',
      description: 'Технический английский, собеседования и деловая переписка',
      category: 'Языки',
      level: 'Средний',
      duration: '30 часов',
      rating: 4.7,
      students: 11200,
      price: 3490,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop',
    },
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Каталог курсов</h1>
          <p className="text-lg text-muted-foreground">
            Найдите идеальный курс для достижения ваших целей
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="Программирование">Программирование</SelectItem>
                <SelectItem value="Дизайн">Дизайн</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Маркетинг">Маркетинг</SelectItem>
                <SelectItem value="Языки">Языки</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Уровень" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все уровни</SelectItem>
                <SelectItem value="Начальный">Начальный</SelectItem>
                <SelectItem value="Средний">Средний</SelectItem>
                <SelectItem value="Продвинутый">Продвинутый</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Найдено курсов: <span className="font-semibold text-foreground">{filteredCourses.length}</span>
          </p>
          {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="gap-2"
            >
              <Icon name="X" size={16} />
              Сбросить фильтры
            </Button>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onClick={() => onNavigate('course', course.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
