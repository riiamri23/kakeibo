
export function getFormattedDate(paramDate){
    // console.log('paramDate', paramDate);
    // console.log('regex', paramDate.match(/\d+/g));
    const date = new Date(Number(paramDate.match(/\d+/g)[0]),Number(paramDate.match(/\d+/g)[1]),Number(paramDate.match(/\d+/g)[2]));
    // console.log('date', date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // bulan dimulai dari 0, sehingga perlu ditambah 1
    const day = date.getDate();

    return `${day}-${month}-${year}`;
}

export function getMonthName(month){
    let monthName = "";
    switch(month){
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;

        case 4:
            monthName = "April";
            break;

        case 5:
            monthName = "May";
            break;

        case 6:
            monthName = "June";
            break;

        case 7:
            monthName = "July";
            break;

        case 8:
            monthName = "August";
            break;

        case 9:
            monthName = "September";
            break;

        case 10:
            monthName = "October";
            break;

        case 11:
            monthName = "November";
            break;

        case 12:
            monthName = "December";
            break;
        default:
            break;
    }
    console.log(monthName);

    return monthName;
}