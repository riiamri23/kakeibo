import {spreadsheetLink} from '../constants/constants.js';


export async function getDataExpenses(){
    const response = await fetch(spreadsheetLink('expenses')),
    result = await response.text(),
    json =  JSON.parse(result.replace(/.*google.visualization.Query.setResponse\({(.*?)}\);?/s, '{$1}'));

    const headings = json.table.cols.map(item=>item.label).filter(val=>!!val);
    // console.log(headings);
    // console.log(json);

    const data = json.table.rows.map((item,i)=>{
        let row = {};

        headings.forEach((label, idx)=>{
            row[label] = item?.c?.[idx]?.v;
        });

        return row;
    })

    return {header: headings, data: data};
}