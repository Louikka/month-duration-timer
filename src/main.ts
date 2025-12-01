import './styles/styles.scss';

import {
    calculateTimeElapsedInMonth,
    convertFloatToPercents,
    getCurrentDateFormated,
    getCurrentTimeFormated,
} from './utils';



updateDateTime();

setInterval(() =>
{
    updateDateTime();
}, 1000);



function updateDateTime()
{
    const d = new Date();

    const __passed = calculateTimeElapsedInMonth(d);

    // set local time
    document.querySelectorAll<HTMLElement>('.current-local-time').forEach((e) =>
    {
        e.innerText = getCurrentTimeFormated(d);
    });


    // set local date
    document.querySelectorAll<HTMLElement>('.current-local-date').forEach((e) =>
    {
        e.innerText = getCurrentDateFormated(d);
    });

    // set current month
    document.querySelectorAll<HTMLElement>('.current-month').forEach((e) =>
    {
        e.innerText = getCurrentDateFormated(d, { month : 'long', });
    });


    // set month duration in percents
    document.querySelectorAll<HTMLElement>('.month-duration-passed-in-percents').forEach((e) =>
    {
        e.innerText = `${ convertFloatToPercents(__passed, 1) }%`;
    });

    // set month duration in progress/meter elements
    document.querySelectorAll<HTMLProgressElement>('progress.month-duration-passed-meter').forEach((e) =>
    {
        e.value = __passed;
    });
    document.querySelectorAll<HTMLMeterElement>('meter.month-duration-passed-meter').forEach((e) =>
    {
        e.value = __passed;
    });
}
