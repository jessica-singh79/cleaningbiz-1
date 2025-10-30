import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div';

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        'flex flex-col rounded-lg border-t',
        'bg-gradient-to-b from-muted/50 to-muted/10',
        'p-4 sm:p-6 text-start',
        'hover:from-muted/60 hover:to-muted/20',
        'w-[280px] sm:w-[320px]',
        'transition-colors duration-300',
        'touch-manipulation',
        className
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm sm:text-md font-semibold leading-none">{author.name}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{author.handle}</p>
        </div>
      </div>
      <p className="mt-3 sm:mt-4 text-sm sm:text-md text-muted-foreground leading-relaxed">{text}</p>
    </Card>
  );
}
