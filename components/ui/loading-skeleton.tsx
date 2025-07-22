
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  lines?: number;
  avatar?: boolean;
}

const LoadingSkeleton = ({ className, lines = 3, avatar = false }: SkeletonProps) => {
  return (
    <div className={cn('space-y-3', className)}>
      {avatar && (
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-muted animate-pulse rounded-full" />
          <div className="space-y-2">
            <div className="h-4 bg-muted animate-pulse rounded w-32" />
            <div className="h-3 bg-muted animate-pulse rounded w-20" />
          </div>
        </div>
      )}
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-4 bg-muted animate-pulse rounded',
              i === lines - 1 && 'w-3/4',
              i === 0 && 'w-full',
              i > 0 && i < lines - 1 && 'w-5/6'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
