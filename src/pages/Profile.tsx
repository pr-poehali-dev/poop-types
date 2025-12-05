import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const user = {
    name: 'Анна Смирнова',
    email: 'anna.smirnova@example.com',
    registeredDate: '15 сентября 2024',
    totalCourses: 3,
    completedCourses: 1,
    certificates: 1,
    totalHours: 42,
  };

  const achievements = [
    { name: 'Первый шаг', description: 'Начали первый курс', icon: 'Rocket', earned: true },
    { name: 'Упорство', description: 'Учились 7 дней подряд', icon: 'Flame', earned: true },
    { name: 'Эксперт', description: 'Завершили первый курс', icon: 'Award', earned: true },
    { name: 'Марафонец', description: 'Учились 30 дней подряд', icon: 'Trophy', earned: false },
    { name: 'Коллекционер', description: 'Получите 5 сертификатов', icon: 'Star', earned: false },
    { name: 'Гуру', description: 'Завершите 10 курсов', icon: 'Crown', earned: false },
  ];

  const skills = [
    { name: 'HTML/CSS', progress: 85 },
    { name: 'JavaScript', progress: 70 },
    { name: 'React', progress: 60 },
    { name: 'Python', progress: 90 },
    { name: 'Figma', progress: 45 },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Профиль</h1>
          <p className="text-lg text-muted-foreground">
            Управляйте своим аккаунтом и отслеживайте прогресс
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Личная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{user.name}</h3>
                    <p className="text-muted-foreground">Зарегистрирован: {user.registeredDate}</p>
                    <Button variant="outline" size="sm" className="mt-2 gap-2">
                      <Icon name="Camera" size={16} />
                      Изменить фото
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                </div>

                <Button className="gap-2">
                  <Icon name="Save" size={18} />
                  Сохранить изменения
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.name}
                      className={`p-4 rounded-lg border transition-all ${
                        achievement.earned
                          ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20'
                          : 'bg-muted/30 opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          achievement.earned
                            ? 'bg-gradient-to-br from-primary to-secondary'
                            : 'bg-muted'
                        }`}>
                          <Icon
                            name={achievement.icon as any}
                            className={achievement.earned ? 'text-white' : 'text-muted-foreground'}
                            size={24}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{achievement.name}</h4>
                            {achievement.earned && (
                              <Icon name="CheckCircle2" size={16} className="text-green-600" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Навыки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Статистика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Icon name="BookOpen" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{user.totalCourses}</div>
                      <div className="text-sm text-muted-foreground">Всего курсов</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{user.completedCourses}</div>
                      <div className="text-sm text-muted-foreground">Завершено</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                      <Icon name="Clock" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{user.totalHours}</div>
                      <div className="text-sm text-muted-foreground">Часов обучения</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                      <Icon name="Award" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{user.certificates}</div>
                      <div className="text-sm text-muted-foreground">Сертификатов</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Уровень</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold mb-2">
                    5
                  </div>
                  <Badge className="mb-2">Новичок</Badge>
                  <p className="text-sm text-muted-foreground">
                    До следующего уровня
                  </p>
                </div>
                <Progress value={60} className="h-2 mb-2" />
                <p className="text-xs text-center text-muted-foreground">
                  600 / 1000 баллов опыта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
