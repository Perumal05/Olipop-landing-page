'use client';
import { Icons } from '@/components/icons';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isVisible: boolean;
  progress: number;
}

export default function LoadingScreen({
  isVisible,
  progress,
}: LoadingScreenProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="w-48 text-center text-primary">
        <Icons.OlipopLogo className="w-full h-auto mb-8" />
        <Progress value={progress} className="h-2" />
        <p className="mt-4 text-sm text-muted-foreground">
          Loading {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
