import './styles/styles.scss';

import {
    calculateMonthDurationPassed,
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
    // set local time
    document.querySelectorAll<HTMLElement>('.current-local-time').forEach((e) =>
    {
        e.innerText = getCurrentTimeFormated('12-hour');
    });


    // set local date
    document.querySelectorAll<HTMLElement>('.current-local-date').forEach((e) =>
    {
        e.innerText = getCurrentDateFormated();
    });

    // set current month
    document.querySelectorAll<HTMLElement>('.current-month').forEach((e) =>
    {
        e.innerText = getCurrentDateFormated({ month : 'long', });
    });


    // set month duration in percents
    document.querySelectorAll<HTMLElement>('.month-duration-passed-in-percents').forEach((e) =>
    {
        e.innerText = `${ convertFloatToPercents(calculateMonthDurationPassed(new Date), 1) }%`;
    });

    // set month duration in progress/meter elements
    document.querySelectorAll<HTMLProgressElement>('progress.month-duration-passed-meter').forEach((e) =>
    {
        e.value = calculateMonthDurationPassed(new Date);
    });
    document.querySelectorAll<HTMLMeterElement>('meter.month-duration-passed-meter').forEach((e) =>
    {
        e.value = calculateMonthDurationPassed(new Date);
    });
}
