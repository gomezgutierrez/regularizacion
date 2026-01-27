"use client";

import { useEffect, useState } from "react";

export function CaseCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        // Function to generate a stable random number based on the date
        const getDailyTarget = () => {
            const today = new Date();
            const dateStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

            // Simple hash function for the date string
            let hash = 0;
            for (let i = 0; i < dateStr.length; i++) {
                hash = (hash << 5) - hash + dateStr.charCodeAt(i);
                hash |= 0; // Convert to 32bit integer
            }

            // Normalize to 0-1 range (deterministic)
            const absHash = Math.abs(hash);
            const randomBase = (absHash % 1000) / 1000;

            // Target between 2000 and 3000
            return Math.floor(2000 + randomBase * 1000);
        };

        const calculateCurrentCount = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();

            // Config: Start at 09:00, End at 20:00
            const startHour = 9;
            const endHour = 20;

            if (hour < startHour) {
                return 0;
            }

            const target = getDailyTarget();

            if (hour >= endHour) {
                return target;
            }

            // Calculate progress
            const totalSecondsWindow = (endHour - startHour) * 3600;
            const currentSecondsPassed = ((hour - startHour) * 3600) + (minute * 60) + second;

            const progress = currentSecondsPassed / totalSecondsWindow;
            return Math.floor(progress * target);
        };

        // Initial set
        setCount(calculateCurrentCount());

        // Update every second for "live" feel
        const interval = setInterval(() => {
            setCount(calculateCurrentCount());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Avoid hydration mismatch by rendering nothing strictly on server, 
    // or a skeleton. Since "Más de X casos", we can default to empty or loading state.
    if (count === null) {
        return <span>...</span>;
    }

    return (
        <span>{count}</span>
    );
}
