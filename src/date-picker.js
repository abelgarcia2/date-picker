import { datePickerTemplate } from "./assets/date-picker-template";

export default class DatePickerElement extends HTMLElement {
    static N_DAYS = 7;
    static N_WEEKS = 6;
    static DATETIME_FORMAT = new Intl.DateTimeFormat(undefined, { month: "long", weekday: "short" });
    
    currentDate = new Date();
    markedDate = new Date();
    dates = (() => {
        let dates = new Array(DatePickerElement.N_WEEKS);
        for (let i = 0; i < dates.length; i++) {
            dates[i] = new Array(DatePickerElement.N_DAYS);
        }
        return dates;
    })();

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(datePickerTemplate.content.cloneNode(true));

        this.querySelector = this.shadowRoot.querySelector.bind(this.shadowRoot);

        this.currentDate = new Date();
        this.currentDate.setHours(0);
        this.currentDate.setMinutes(0)
        this.currentDate.setSeconds(0);
        this.currentDate.setMilliseconds(0);

        this.markedDate.setTime(this.currentDate.getTime());
    }

    getSelectedDate() {
        return this.markedDate;
    }

    connectedCallback() {
        this.populateDayNames()
        this.populateMonthSelector();
        this.populateYearSelector();
        this.onDateChanged();
        this.setListeners();
    }

    populateMonthSelector() {
        let monthSelector = this.querySelector('#monthSelector');
        for (let month = 0; month < 12; month++) {
            let date = new Date(this.currentDate.getFullYear(), month);
            let monthName = DatePickerElement.DATETIME_FORMAT.formatToParts(date).filter(
                (part) => part.type == "month"
            ).shift().value;

            let option = document.createElement('option');
            option.textContent = monthName;
            option.setAttribute('value', month);
            if (month == this.currentDate.getMonth()) {
                monthSelector.value = this.currentDate.getMonth();
            }
            monthSelector.appendChild(option);
        }
    }

    populateYearSelector() {
        let yearSelector = this.querySelector('#yearSelector');
        for (let year = 1926; year < 2099; year++) {
            let option = document.createElement('option');
            option.textContent = year;
            yearSelector.appendChild(option);
        }
    }

    populateDayNames() {
        let dayNamesRow = this.querySelector('.day-names');
        let date = new Date(2024, 3, 1); // random monday
        for (let day = 0; day < 7; day++) {
            let dayName = DatePickerElement.DATETIME_FORMAT.formatToParts(date).filter(
                (part) => part.type == "weekday"
            ).shift().value;
            date.setDate(date.getDay() + 1);
            let th = dayNamesRow.cells[day];
            th.textContent = dayName;
        }
    }

    populateCalendar() {
        let initialDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth());

        let dayOfWeek = initialDate.getDay() == 0 ? 6 : initialDate.getDay() - 1;
        this.dates[0][dayOfWeek] = new Date(initialDate);
        this.placeDate(0, dayOfWeek, initialDate);

        let date = new Date(initialDate);
        for (let day = dayOfWeek - 1; day >= 0; day--) {
            date.setDate(date.getDate() - 1);
            this.dates[0][day] = new Date(date);
            this.placeDate(0, day, date);
        }

        for (let week = 0; week < this.dates.length; week++) {
            for (let day = week == 0 ? dayOfWeek + 1 : 0; day < this.dates[week].length; day++) {
                initialDate.setDate(initialDate.getDate() + 1);
                this.dates[week][day] = new Date(initialDate);
                this.placeDate(week, day, initialDate);
            }
        }
    }

    placeDate(week, day, date) {
        let tbody = this.querySelector('tbody')
        let tr = tbody.children[week]
        let td = tr.children[day];

        date.getTime() == this.markedDate.getTime()
            ? td.classList.add('marked')
            : td.classList.remove('marked');

        date.getMonth() != this.currentDate.getMonth()
            ? td.classList.add('disabled')
            : td.classList.remove('disabled');

        td.textContent = date.getDate();
    }

    update_title() {
        this.querySelector('#monthSelector').value = this.currentDate.getMonth();
        this.querySelector('#yearSelector').value = this.currentDate.getFullYear();
    }

    onDateChanged() {
        this.update_title();
        this.populateCalendar();
    }

    setListeners() {
        this.querySelector('#monthSelector').addEventListener('change', (event) => {
            let month = event.target.value;
            this.currentDate.setMonth(month);
            this.onDateChanged();
        });

        this.querySelector('#yearSelector').addEventListener('keydown', (event) => {
            let isNumber = /^[0-9]$/.test(event.key);

            if (event.target.value.length >= 4 && event.key != "Backspace") {
                event.preventDefault();
            }
            if (!isNumber && event.key != "Backspace") {
                event.preventDefault();
            }
        });

        this.querySelector('#yearSelector').addEventListener('change', (event) => {
            let year = event.target.value;
            this.currentDate.setFullYear(year);
            this.onDateChanged();
        })

        this.querySelector('#previousMonth').addEventListener('click', () => {
            if (this.currentDate.getMonth() == 0) {
                this.currentDate.setMonth(11);
                this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
            } else {
                this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            }
            this.onDateChanged();
        });

        this.querySelector('#nextMonth').addEventListener('click', () => {
            if (this.currentDate.getMonth() == 11) {
                this.currentDate.setMonth(0);
                this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
            } else {
                this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            }
            this.onDateChanged();
        });

        this.shadowRoot.querySelectorAll('.day').forEach(dayCell => {
            dayCell.addEventListener('click', (event) => {
                const deleteCurrentMarkedDay = () =>
                    this.querySelector('.marked')?.classList.remove('marked')


                let td = event.target;
                let dayOfWeek = td.cellIndex;
                let week = td.parentElement.sectionRowIndex;

                deleteCurrentMarkedDay();
                this.markedDate = this.dates[week][dayOfWeek];

                if (this.markedDate.getMonth() != this.currentDate.getMonth()) {
                    this.currentDate.setMonth(this.markedDate.getMonth());
                    this.currentDate.setFullYear(this.markedDate.getFullYear());
                    this.onDateChanged();
                } else {
                    td.classList.add("marked");
                }
            });
        })
    }
}