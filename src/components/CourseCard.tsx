import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  progress?: number;
  onClick: () => void;
}

const CourseCard = ({
  title,
  description,
  category,
  level,
  duration,
  rating,
  students,
  price,
  image,
  progress,
  onClick,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {level}
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Icon name="Clock" size={14} />
            {duration}
          </span>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>

        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Прогресс</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {price === 0 ? 'Бесплатно' : `${price.toLocaleString()} ₽`}
        </div>
        <Button size="sm" className="gap-2">
          {progress !== undefined ? 'Продолжить' : 'Начать'}
          <Icon name="ArrowRight" size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
