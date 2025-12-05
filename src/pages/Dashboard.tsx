import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface DashboardProps {
  onNavigate: (page: string, courseId?: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const activeCourses = [
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
      progress: 65,
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
      progress: 30,
    },
  ];

  const completedCourses = [
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
      progress: 100,
      completedDate: '15.11.2024',
    },
  ];

  const lessons = [
    { id: 1, title: 'Что такое веб-разработка?', duration: '15 мин', completed: true, module: 'Введение' },
    { id: 2, title: 'Настройка рабочего окружения', duration: '20 мин', completed: true, module: 'Введение' },
    { id: 3, title: 'Первая веб-страница', duration: '25 мин', completed: true, module: 'Введение' },
    { id: 4, title: 'HTML элементы и структура', duration: '30 мин', completed: true, module: 'HTML и CSS' },
    { id: 5, title: 'CSS селекторы и стили', duration: '35 мин', completed: false, current: true, module: 'HTML и CSS' },
    { id: 6, title: 'Flexbox и Grid', duration: '40 мин', completed: false, module: 'HTML и CSS' },
    { id: 7, title: 'Адаптивный дизайн', duration: '45 мин', completed: false, module: 'HTML и CSS' },
  ];

  const stats = [
    { label: 'Активных курсов', value: activeCourses.length, icon: 'BookOpen', color: 'from-blue-500 to-blue-600' },
    { label: 'Завершено курсов', value: completedCourses.length, icon: 'GraduationCap', color: 'from-green-500 to-green-600' },
    { label: 'Часов обучения', value: 42, icon: 'Clock', color: 'from-purple-500 to-purple-600' },
    { label: 'Сертификатов', value: completedCourses.length, icon: 'Award', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Мое обучение</h1>
          <p className="text-lg text-muted-foreground">
            Продолжайте учиться и достигайте новых целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon name={stat.icon as any} className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 mb-6">
            <TabsTrigger value="active" className="gap-2">
              <Icon name="PlayCircle" size={18} />
              Активные курсы
            </TabsTrigger>
            <TabsTrigger value="completed" className="gap-2">
              <Icon name="CheckCircle2" size={18} />
              Завершенные
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {selectedCourse ? (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCourse(null)}
                    className="gap-2"
                  >
                    <Icon name="ArrowLeft" size={18} />
                    Назад к курсам
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Уроки курса</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`p-4 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                            lesson.current ? 'bg-primary/5 border-primary' : ''
                          } ${lesson.completed ? 'bg-muted/50' : ''}`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              lesson.completed
                                ? 'bg-green-500'
                                : lesson.current
                                ? 'bg-primary'
                                : 'bg-muted'
                            }`}>
                              <Icon
                                name={lesson.completed ? 'Check' : 'PlayCircle'}
                                className="text-white"
                                size={20}
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold">{lesson.title}</h4>
                                {lesson.current && (
                                  <Badge className="bg-primary">Текущий</Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span>{lesson.module}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Clock" size={14} />
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>
                            {lesson.current && (
                              <Button className="gap-2">
                                Продолжить
                                <Icon name="ArrowRight" size={16} />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {activeCourses.map((course) => (
                  <div key={course.id}>
                    <CourseCard
                      {...course}
                      onClick={() => setSelectedCourse(course.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <div key={course.id} className="relative">
                  <CourseCard
                    {...course}
                    onClick={() => onNavigate('course', course.id)}
                  />
                  <Card className="mt-4 border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon name="Award" className="text-green-600" size={20} />
                          <span className="font-semibold text-green-800">Сертификат получен</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-2 border-green-600 text-green-700 hover:bg-green-100"
                        >
                          <Icon name="Download" size={16} />
                          Скачать
                        </Button>
                      </div>
                      <p className="text-sm text-green-700 mt-2">
                        Завершено: {course.completedDate}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
