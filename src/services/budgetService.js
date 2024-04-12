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

export async function saveDataBudget(data= {}){
    console.log('testing');
    const response = await fetch('https://script.google.com/macros/s/AKfycbxKbSJBSt03HzwSvbKJFh5WN9g1FKNLAB9WFkT36tIGHR8FAQSW2zIhx0VNt1gYSHk2/exec?path=Budget&action=write&Month=1&Year=2024&Value=2000&Created_date=2024-03-21&Created_by=amri&Modified_date=2024-04-12&Modified_by=amri'),
    result = await response.text();
    console.log(result);
    
    return result;
}