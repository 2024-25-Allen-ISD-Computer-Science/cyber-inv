// TimerComp.tsx
import dynamic from 'next/dynamic';

// Dynamically import the CountdownTimer component with no SSR
const CountdownTimer = dynamic(() => import('./Timer'), { ssr: false });

export default function TimerComp() {
  return <CountdownTimer />;
}
