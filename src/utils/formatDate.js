
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