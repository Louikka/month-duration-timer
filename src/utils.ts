/* @__NO_SIDE_EFFECTS__ */
export function getCurrentTimeFormated(date: Date, options?: Intl.DateTimeFormatOptions): string
{
    return date.toLocaleTimeString([], options ?? {
        hour12 : true,
    });
}

/* @__NO_SIDE_EFFECTS__ */
export function getCurrentDateFormated(date: Date, options?: Intl.DateTimeFormatOptions): string
{
    return date.toLocaleDateString([], options ?? {
        day : 'numeric',
        month : 'long',
        year : 'numeric',
        weekday : 'long',
    });
}


/**
 * @returns float representation (between 0 and 1) of the time elapsed since beginning of the month.
 */
export function calculateTimeElapsedInMonth(date: Date): number
{
    const __msBeforeCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 0).getTime();

    let msPassedInThisMonth = date.getTime() - __msBeforeCurrentMonth;
    let msInFullMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1).getTime() - __msBeforeCurrentMonth;

    return msPassedInThisMonth / msInFullMonth;
}

/* @__NO_SIDE_EFFECTS__ */
export function convertFloatToPercents(n: number, toFixed = 0): number
{
    if (toFixed === Infinity)
    {
        return n * 100;
    }

    const __precision = 10 ** toFixed;

    return Math.floor(n * (100 * __precision)) / __precision;
}
