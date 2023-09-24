function DateTime() {
    const date_time = new Date();

    var date = date_time.toLocaleDateString();
    var time = date_time.toLocaleTimeString();

    return [date, time];
}

module.exports.DateTime = DateTime;