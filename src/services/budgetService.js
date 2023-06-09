import {spreadsheetLink} from '../constants/constants.js';
// import { getMonthName } from '../utils/utilsFunction.js';

function getFormattedJson(json){

    const headings = json.table.cols.map(item=>item.label).filter(val=>!!val);

    const data = json.table.rows.map((item,i)=>{
        let row = {};

        headings.forEach((label, idx)=>{
            row[label] = item?.c?.[idx]?.v;
        });

        return row;
    })

    return {header: headings, data: data};

}

export async function getDataExpenses(){
    const response = await fetch(spreadsheetLink('expenses')),
    result = await response.text(),
    json =  JSON.parse(result.replace(/.*google.visualization.Query.setResponse\({(.*?)}\);?/s, '{$1}'));

    return getFormattedJson(json);
}

export async function getDataBudget(month){
    const response = await fetch(spreadsheetLink('budget')),
    result = await response.text(),
    json = JSON.parse(result.replace(/.*google.visualization.Query.setResponse\({(.*?)}\);?/s, '{$1}'));
    let data = getFormattedJson(json);
    if(month !== '') data.data = data.data.find(val => val.month === month);

    // data.data = data?.data?.map((val)=>{
    //     return {...val, month: getMonthName(val.month)}
    // });
    return data;
}

export async function getDataBills(){
    const response = await fetch(spreadsheetLink('bills')),
    result = await response.text(),
    json = JSON.parse(result.replace(/.*google.visualization.Query.setResponse\({(.*?)}\);?/s, '{$1}'));
    let data = getFormattedJson(json);
    

    return data;
}