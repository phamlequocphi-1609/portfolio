"use client";

import React, { memo, useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Typography from "../ui/typography";

dayjs.extend(utc);
dayjs.extend(timezone);

export interface LiveClockProps extends React.HTMLAttributes<HTMLSpanElement> {
  timeZone?: string;
  format?: "12h" | "24h";
  showSuffix?: boolean;
  suffix?: string;
  variant?: React.ComponentProps<typeof Typography>["variant"];
}

export const LiveClock = memo(function LiveClock({
  timeZone = "Asia/Ho_Chi_Minh",
  format = "24h",
  showSuffix = true,
  suffix = "GMT+7",
  className = "",
  variant,
  style,
  ...props
}: LiveClockProps) {
  const [time, setTime] = useState<string>("");

  const updateTime = useCallback(() => {
    const formatString = format === "12h" ? "hh:mm:ss A" : "HH:mm:ss";
    setTime(dayjs().tz(timeZone).format(formatString));
  }, [timeZone, format]);

  useEffect(() => {
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  if (!time) {
    return (
      <Typography
        tag="span"
        variant={variant}
        style={style}
        className={`inline-block opacity-0 ${className}`.trim()}
      >
        --:--:--
      </Typography>
    );
  }

  return (
    <Typography
      tag="span"
      variant={variant}
      style={style}
      className={`inline-flex items-center gap-1.5 font-mono ${className}`.trim()}
      {...props}
    >
      <Typography tag="span">{time}</Typography>
      {showSuffix && suffix && (
        <Typography tag="span" className="text-[11px] opacity-75">
          {suffix}
        </Typography>
      )}
    </Typography>
  );
});

export const LiveClockWrapper = LiveClock;
