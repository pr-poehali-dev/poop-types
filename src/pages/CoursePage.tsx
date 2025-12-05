import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

interface CoursePageProps {
  courseId: string;
  onNavigate: (page: string) => void;
}

const CoursePage = ({ onNavigate }: CoursePageProps) => {
  const course = {
    title: 'Полный курс по веб-разработке',
    description: 'Изучите HTML, CSS, JavaScript и React с нуля до профессионального уровня. Создайте реальные проекты для портфолио.',
    category: 'Программирование',
    level: 'Начальный',
    duration: '40 часов',
    rating: 4.8,
    reviews: 1250,
    students: 12500,
    price: 3990,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
    instructor: {
      name: 'Алексей Иванов',
      role: 'Senior Frontend Developer',
      courses: 12,
      students: 45000,
    },
    curriculum: [
      {
        module: 'Введение в веб-разработку',
        lessons: [
          { title: 'Что такое веб-разработка?', duration: '15 мин' },
          { title: 'Настройка рабочего окружения', duration: '20 мин' },
          { title: 'Первая веб-страница', duration: '25 мин' },
        ]
      },
      {
        module: 'HTML и CSS основы',
        lessons: [
          { title: 'HTML элементы и структура', duration: '30 мин' },
          { title: 'CSS селекторы и стили', duration: '35 мин' },
          { title: 'Flexbox и Grid', duration: '40 мин' },
          { title: 'Адаптивный дизайн', duration: '45 мин' },
        ]
      },
      {
        module: 'JavaScript основы',
        lessons: [
          { title: 'Переменные и типы данных', duration: '30 мин' },
          { title: 'Функции и области видимости', duration: '40 мин' },
          { title: 'DOM манипуляции', duration: '50 мин' },
          { title: 'События и обработчики', duration: '45 мин' },
        ]
      },
      {
        module: 'React разработка',
        lessons: [
          { title: 'Введение в React', duration: '35 мин' },
          { title: 'Компоненты и props', duration: '40 мин' },
          { title: 'State и lifecycle', duration: '45 мин' },
          { title: 'Hooks: useState, useEffect', duration: '50 мин' },
          { title: 'Создание проекта', duration: '60 мин' },
        ]
      },
    ],
    features: [
      'Видеоуроки в HD качестве',
      'Практические задания после каждого урока',
      'Доступ к материалам навсегда',
      'Сертификат о прохождении',
      'Поддержка преподавателя',
      'Проекты для портфолио',
    ],
    reviews: [
      {
        name: 'Мария Петрова',
        rating: 5,
        date: '2 дня назад',
        text: 'Отличный курс! Очень понятное объяснение сложных тем. За 2 месяца научилась создавать свои веб-приложения.',
      },
      {
        name: 'Дмитрий Смирнов',
        rating: 5,
        date: '1 неделю назад',
        text: 'Лучший курс для начинающих. Преподаватель объясняет доступно, много практики.',
      },
    ],
  };

  return (
    <div className="min-h-screen py-20">
      <div className="relative h-96 mb-8 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              <Badge className="mb-4">{course.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
                {course.title}
              </h1>
              <p className="text-lg text-white/90 mb-6 animate-fade-in">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white/90 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span>({course.reviews} отзывов)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  <span>{course.students.toLocaleString()} студентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-white border-white">
                    {course.level}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">Описание</TabsTrigger>
                <TabsTrigger value="curriculum">Программа</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">О курсе</h2>
                    <p className="text-muted-foreground mb-6">
                      Этот курс подойдет как для новичков, так и для тех, кто хочет систематизировать свои знания.
                      Вы научитесь создавать современные веб-приложения, работать с React и собирать проекты для портфолио.
                    </p>

                    <h3 className="text-xl font-semibold mb-4">Что включено:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-muted rounded-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                          {course.instructor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{course.instructor.name}</h4>
                          <p className="text-sm text-muted-foreground">{course.instructor.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <span className="flex items-center gap-1">
                          <Icon name="BookOpen" size={16} />
                          {course.instructor.courses} курсов
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          {course.instructor.students.toLocaleString()} студентов
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Программа курса</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {course.curriculum.map((module, index) => (
                        <AccordionItem key={index} value={`module-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div>
                              <div className="font-semibold">{module.module}</div>
                              <div className="text-sm text-muted-foreground">
                                {module.lessons.length} уроков
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pl-4">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="flex items-center justify-between py-2 border-b last:border-0">
                                  <div className="flex items-center gap-3">
                                    <Icon name="PlayCircle" size={18} className="text-primary" />
                                    <span>{lesson.title}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Отзывы студентов</h2>
                    <div className="space-y-6">
                      {course.reviews.map((review, index) => (
                        <div key={index} className="pb-6 border-b last:border-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">{review.name}</div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex">
                                  {Array.from({ length: review.rating }).map((_, i) => (
                                    <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                                  ))}
                                </div>
                                <span>•</span>
                                <span>{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                  {course.price.toLocaleString()} ₽
                </div>

                <Button
                  size="lg"
                  className="w-full mb-4 gap-2"
                  onClick={() => onNavigate('dashboard')}
                >
                  Начать обучение
                  <Icon name="ArrowRight" size={20} />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full mb-6"
                >
                  Добавить в избранное
                  <Icon name="Heart" size={20} className="ml-2" />
                </Button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={18} className="text-muted-foreground" />
                    <span>Полный доступ на всё время</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Smartphone" size={18} className="text-muted-foreground" />
                    <span>Доступ с любого устройства</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={18} className="text-muted-foreground" />
                    <span>Сертификат о прохождении</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Download" size={18} className="text-muted-foreground" />
                    <span>Все материалы для скачивания</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
