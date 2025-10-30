import { cn } from '@/lib/utils';
import {
  TestimonialCard,
  TestimonialAuthor,
} from '@/components/ui/testimonial-card';

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        'bg-background text-foreground',
        'py-12 sm:py-16 md:py-24 lg:py-32 px-0',
        className
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-12 md:gap-16 text-center">
        <div className="flex flex-col items-center gap-3 sm:gap-6 md:gap-8 px-4">
          <h2 className="max-w-[720px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px] font-medium text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden touch-pan-y">
          <div className="group flex overflow-hidden p-2 [--gap:0.75rem] sm:[--gap:1rem] [gap:var(--gap)] flex-row [--duration:50s] sm:[--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  );
}
