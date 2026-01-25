import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  naira: number | string;
  usd: number | string;
  period?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PriceDisplay({
  naira,
  usd,
  period,
  size = "md",
  className,
}: PriceDisplayProps) {
  const formatNaira = (value: number | string) => {
    if (typeof value === "string") return value;
    return `₦${value.toLocaleString()}`;
  };

  const formatUsd = (value: number | string) => {
    if (typeof value === "string") return value;
    return `$${value.toLocaleString()}`;
  };

  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
  };

  return (
    <div className={cn("font-bold text-foreground", className)}>
      <span className={sizeClasses[size]}>{formatNaira(naira)}</span>
      <span className="text-muted-foreground text-base ml-2">
        ({formatUsd(usd)})
      </span>
      {period && (
        <span className="text-muted-foreground text-base font-normal">
          {period}
        </span>
      )}
    </div>
  );
}
