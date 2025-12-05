import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentScene, setCurrentScene] = useState(0);

  const story = [
    {
      id: 0,
      title: "Утро Раиля",
      text: "Это Раиль. Ему 7 лет, и он очень любит горячий какао по утрам.",
      image: "https://cdn.poehali.dev/projects/e49bc78f-2b85-4ed4-8883-7f71d63db72f/files/ef795a21-6586-4517-a4a9-8c931940fc75.jpg",
      emoji: "☀️"
    },
    {
      id: 1,
      title: "Любимая чашка",
      text: "У Раиля была особенная чашка — синяя, с ракетами. Мама подарила её на день рождения.",
      image: "https://cdn.poehali.dev/projects/e49bc78f-2b85-4ed4-8883-7f71d63db72f/files/073aa8a6-99ff-4a63-8247-608ebecd74c2.jpg",
      emoji: "🚀"
    },
    {
      id: 2,
      title: "Что-то пошло не так...",
      text: "Раиль налил горячий какао и понёс чашку к столу. Но вдруг...",
      image: "https://cdn.poehali.dev/projects/e49bc78f-2b85-4ed4-8883-7f71d63db72f/files/b733f6c3-43ca-4f6e-8bcf-88f7b24790f2.jpg",
      emoji: "😰"
    },
    {
      id: 3,
      title: "БАХ!",
      text: "Чашка выскользнула из рук! Время словно замедлилось...",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&h=600&fit=crop",
      emoji: "💥"
    },
    {
      id: 4,
      title: "Разбилась...",
      text: "Чашка упала на пол и разбилась на множество осколков. Какао разлилось повсюду.",
      image: "https://images.unsplash.com/photo-1563306406-e66174fa3787?w=800&h=600&fit=crop",
      emoji: "😢"
    },
    {
      id: 5,
      title: "Мама пришла на помощь",
      text: "Раиль расстроился, но мама его обняла: 'Ничего страшного! Главное, что ты не обжёгся!'",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=600&fit=crop",
      emoji: "🤗"
    },
    {
      id: 6,
      title: "Урок на будущее",
      text: "Раиль узнал важное: чашки могут разбиться, но любовь мамы — навсегда. И теперь он носит чашки аккуратнее!",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop",
      emoji: "💖"
    }
  ];

  const currentStory = story[currentScene];
  const progress = ((currentScene + 1) / story.length) * 100;

  const nextScene = () => {
    if (currentScene < story.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const resetStory = () => {
    setCurrentScene(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            История о том, как Раиль уронил чашку
          </h1>
          <p className="text-lg text-muted-foreground">
            Детская история о маленькой неприятности и большой любви
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Сцена {currentScene + 1} из {story.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl animate-scale-in">
          <div className="relative h-96 overflow-hidden">
            <img 
              src={currentStory.image}
              alt={currentStory.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="text-6xl mb-4 animate-bounce">{currentStory.emoji}</div>
              <h2 className="text-4xl font-bold mb-2">{currentStory.title}</h2>
            </div>
          </div>

          <CardContent className="p-8">
            <p className="text-xl leading-relaxed text-center mb-8">
              {currentStory.text}
            </p>

            <div className="flex justify-between items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prevScene}
                disabled={currentScene === 0}
                className="gap-2"
              >
                <Icon name="ChevronLeft" size={20} />
                Назад
              </Button>

              {currentScene === story.length - 1 ? (
                <Button
                  size="lg"
                  onClick={resetStory}
                  className="gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                >
                  <Icon name="RotateCcw" size={20} />
                  Начать сначала
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={nextScene}
                  className="gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                >
                  Далее
                  <Icon name="ChevronRight" size={20} />
                </Button>
              )}

              <Button
                variant="ghost"
                size="lg"
                onClick={resetStory}
                className="gap-2"
              >
                <Icon name="Home" size={20} />
                В начало
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-7 gap-2">
          {story.map((scene, index) => (
            <button
              key={scene.id}
              onClick={() => setCurrentScene(index)}
              className={`p-4 rounded-lg border-2 transition-all hover:scale-110 ${
                currentScene === index
                  ? 'border-purple-500 bg-purple-100 shadow-lg'
                  : currentScene > index
                  ? 'border-green-300 bg-green-50'
                  : 'border-gray-200 bg-white opacity-60'
              }`}
            >
              <div className="text-3xl mb-1">{scene.emoji}</div>
              <div className="text-xs font-medium">{index + 1}</div>
            </button>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💡</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Мораль истории</h3>
                <p className="text-muted-foreground">
                  Даже когда случаются неприятности, самое главное — это любовь и поддержка близких.
                  Вещи можно заменить, а вот доброе сердце и забота бесценны!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;