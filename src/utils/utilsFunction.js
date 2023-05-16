
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

// type = long || type = sort
export function getMonthName(month, type = "long"){
    const typeLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const typeSort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthName = "";
    const monthType = type === 'long' ? typeLong : typeSort;

    switch(month){
        case 1:
            monthName = monthType[0];
            break;
        case 2:
            monthName = monthType[1];
            break;
        case 3:
            monthName = monthType[2];
            break;

        case 4:
            monthName = monthType[3];
            break;

        case 5:
            monthName = monthType[4];
            break;

        case 6:
            monthName = monthType[5];
            break;

        case 7:
            monthName = monthType[6];
            break;

        case 8:
            monthName = monthType[7];
            break;

        case 9:
            monthName = monthType[8];
            break;

        case 10:
            monthName = monthType[9];
            break;

        case 11:
            monthName = monthType[10];
            break;

        case 12:
            monthName = monthType[11];
            break;
        default:
            break;
    }

    return monthName;
}

export function getCurrency(val){
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(val);
}

export function getDateFormat(){
    
}