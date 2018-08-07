'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function dateBeautifier (Component) {
    return class extends React.Component {
        calculateDate() {
            const date = this.props.date.split(' ');
            const whole = date[0].split('-').concat(date[1].split(':')).map((elem, index) => {
                elem = Number(elem);
                if (index === 1) elem -= 1;
                return elem;
            })
            const [year,month,day,hour,minutes,seconds] = whole;
            const videoDate = new Date(year,month,day,hour,minutes,seconds);
            const currentDate = new Date();
            const minutesDifference = Math.ceil((currentDate.getTime() - videoDate.getTime()) / 1000 / 60);
            return returnRenderDate(minutesDifference);

            function returnRenderDate(difference) {
                let timeName, differenceToRender;
                if (difference < 60) {
                    timeName = 'минут';
                    differenceToRender = difference;
                } else if (difference < 1440) {
                    differenceToRender = Math.ceil(difference / 60);
                    if (differenceToRender === 1 || differenceToRender === 21) timeName = 'час';
                    else if (differenceToRender === 2 || differenceToRender === 3 || differenceToRender === 4 || differenceToRender == 22 || differenceToRender == 23) timeName='часа';
                    else timeName = 'часов';
                } else {
                    differenceToRender = Math.ceil(difference / 60 / 24);
                    const lastDigit = Number(differenceToRender.toString().slice(-1));
                    if (lastDigit === 1) timeName = 'день';
                    else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) timeName = 'дня';
                    else timeName = 'дней'
                }
                return `${differenceToRender} ${timeName} назад`
            }
        }

        render () {
            const dateToRender = this.calculateDate();
            return <Component date={dateToRender} />
        }
    }
}