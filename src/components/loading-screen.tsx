'use client';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
      <div className="w-56 text-center text-primary">
        {/* Logo Removed */}
        <div className="h-[46px] mb-8"></div>
        <Progress value={progress} className="h-2" />
        <p className="mt-4 text-sm text-muted-foreground">
          Loading {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
