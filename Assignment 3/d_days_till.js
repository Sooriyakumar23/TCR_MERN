function DaysTill(christmas_date, mothers_date, birth_date) {
    const milliseconds = 1000 * 60 * 60 * 24;
    let current_date = new Date();

    let christmas_daystill = Math.ceil((new Date(christmas_date) - current_date)/milliseconds);
    let mothers_daystill = Math.ceil((new Date(mothers_date) - current_date)/milliseconds);
    let birth_daystill = Math.ceil((new Date(birth_date) - current_date)/milliseconds);

    return [christmas_daystill, mothers_daystill, birth_daystill];
}

module.exports.DaysTill = DaysTill;