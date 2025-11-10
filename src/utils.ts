export function getCurrentTimeFormated(fmt: '12-hour' | '24-hour' | null, options?: Intl.DateTimeFormatOptions): string
{
    return new Date().toLocaleTimeString([], options ?? {
        hour12 : (fmt === '12-hour'),
    });
}

export function getCurrentDateFormated(options?: Intl.DateTimeFormatOptions): string
{
    return new Date().toLocaleDateString([], options ?? {
        day : 'numeric',
        month : 'long',
        year : 'numeric',
        weekday : 'long',
    });
}


export function calculateMonthDurationPassed(date: Date): number
{
    const __msBeforeCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 0).getTime();

    let msPassedInThisMonth = date.getTime() - __msBeforeCurrentMonth;
    let msInFullMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime() - __msBeforeCurrentMonth;

    return msPassedInThisMonth / msInFullMonth;
}

export function convertFloatToPercents(n: number, toFixed = 0)
{
    const __precision = 10 ** toFixed;

    return Math.floor(n * (100 * __precision)) / __precision;
}
