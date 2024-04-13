import DateOptionClassInterface from "../interfaces/DateOption";

class DateOption implements DateOptionClassInterface {
    private date: Date;

    constructor(date: number) {
        const today = new Date();
        today.setMonth(date);

        // set the date
        this.date = today;
    }

    parseToString = (): string => {
        return this.date.toISOString();
    }

    parseToDate = (): Date => {
        return this.date;
    }

    parseToMonth = (): number => {
        return this.date.getMonth() + 1;
    }

    parseToReadable = (): string => {
        const month = this.date.getMonth() + 1;

        switch (month) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return 'Which month is this?';
        }
    }
}

export default DateOption;
