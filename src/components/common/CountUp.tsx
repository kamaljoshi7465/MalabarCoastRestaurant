import { useEffect, useState } from "react";

type CountUpProps = {
  value: string;
  active: boolean;
  duration?: number;
};

export default function CountUp({
  value,
  active,
  duration = 2000,
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState("0");

  const getTargetValue = () => {
    if (value.includes("M")) return 1_000_000;
    if (value.includes("K")) return Number(value.replace(/\D/g, "")) * 1000;

    return Number(value.replace(/\D/g, ""));
  };

  const target = getTargetValue();

  const formatNumber = (num: number) => {
    if (target >= 1_000_000) {
      if (num < 1000) {
        return `${num}+`;
      }

      if (num < 1_000_000) {
        return `${Math.floor(num / 1000)}K+`;
      }

      return "1M+";
    }

    const suffix = value.replace(/[0-9]/g, "");

    return `${Math.floor(num)}${suffix}`;
  };

  useEffect(() => {
    if (!active) {
      setDisplayValue("0");
      return;
    }

    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const current = progress * target;

      setDisplayValue(formatNumber(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, target, duration, value]);

  return <>{displayValue}</>;
}