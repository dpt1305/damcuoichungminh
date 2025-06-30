'use client';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

type Props = {
  to: string;
};

function CountdownClock({ to }: Props) {
  return <FlipClockCountdown to={to} />;
}

export default CountdownClock;
