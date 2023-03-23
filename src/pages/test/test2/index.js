import React, { useState, useEffect } from 'react';
function getFormattedDate(paramDate){
    console.log('paramDate', paramDate);
    console.log('regex', paramDate.match(/\d+/g));
    const date = new Date(Number(paramDate.match(/\d+/g)[0]),Number(paramDate.match(/\d+/g)[1]),Number(paramDate.match(/\d+/g)[2]));
    console.log('date', date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // bulan dimulai dari 0, sehingga perlu ditambah 1
    const day = date.getDate();

    return `${day}-${month}-${year}`;
}
async function getData(){

    const spreadsheetId = '1J-pkY_Jtv63v9USbCNHRJj6iVyGDp9mg9bS42eRR4-Y',

    response = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`),
    result = await response.text(),
    json = JSON.parse(result.replace(/.*google.visualization.Query.setResponse\({(.*?)}\);?/s, '{$1}'));
        // console.log(json);

    // `table.cols` element contains headings
    // we will use them to build our data array
    const headings = json.table.cols.map(item => item.label).filter(val=>!!val);

    console.log(headings);

    // data of each row is associated to the headings
    let data = json.table.rows.map(item => {
        // console.log(item);
        let row = {};
        // item.c.forEach((cell, idx) => {
        //     console.log('index', idx);
        //     console.log('headings', headings[idx]);
        //     console.log('cell', cell);
        //     if(cell) row[headings[idx]] = cell?.v;
        // });
        headings.forEach((label, idx) => {
            if(typeof item?.c?.[idx]?.v === 'string' && item?.c?.[idx]?.v?.match(/Date/)) item.c[idx].v = getFormattedDate(item?.c?.[idx]?.v);
            row[label] = item?.c?.[idx]?.v;
        });
        return row;
    });
    console.log(data);

    // filtering and sorting
    // data = data.filter(item => item.Publish === true);
    // data.sort((a, b) => a.CategoryOrder > b.CategoryOrder);

    // console.log(data);

    /*
        Fields:
        -------------------
        Category
        Name
        Description
        Price
        Publish
        CategoryOrder
        CategoryTranslation
    */

    // aggregating data by category
    // data = [...new Set(data.map(item => item.CategoryOrder))].map(categoryIndex => {
    //     return data.filter(item => item.CategoryOrder === categoryIndex);
    // });

    return {header: headings, data:data};
}

const InputForm = ({label, type = 'text'})=>{
    return (<div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={label} type={type} placeholder={label.charAt(0).toUpperCase() + label.slice(1)} />
    </div>);
}

export default function Test2() {

    const [response, setResponse] = useState({});
    const [modalShow, setModalShow] = useState({isShow: false, flag: '', data: {}});
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await getData();
            setResponse(res);
        }

        fetchData();
    },[]);

    return (
        <section>
            <table>
                {
                    response 
                    ? 
                    <>
                        <thead>
                            {
                            response?.header?.length > 0
                                ?<tr>
                                    <th key="action" className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer"><a href={() => false} onClick={()=>setModalShow({isShow: true, flag: 'add', data: {}})}>Add</a>
                                </th>
                                {
                                    response?.header?.map((val, idx)=>{
                                        return <th key={idx} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">{val}</th>
                                    })
                                }</tr>
                                : <></> 
                            }
                        </thead> 
                        <tbody>
                            {
                                response?.data?.length > 0
                                    ? response?.data?.map((val, idx)=>{
                                        return <tr key={`label${idx}`}>
                                            <td key={`edit${idx}`} className="px-6 py-4 whitespace-nowrap cursor-pointer"><a href={() => false} onClick={()=>setModalShow({isShow: true, flag: 'edit', data: val})}>Edit</a> | <a href={() => false} onClick={()=>setModalShow({isShow: true, flag: 'delete', data: val})}>Delete</a></td>
                                            {Object.keys(val).map((val2, idx2)=>{
                                                return <td key={`${val2}${idx2}`} className="px-6 py-4 whitespace-nowrap">{val?.[val2]}</td>
                                            })}
                                        </tr>
                                    })
                                    : <></>
                            }

                        </tbody>
                    </>
                    : <>Loading..</>
                }
                
            </table>
            {modalShow.isShow && <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            {modalShow?.flag === 'add' || modalShow?.flag === 'edit' 
                                ? response?.header?.length > 0 && <>
                                    {response?.header?.map((val, idx)=>{
                                        if(val === 'createdby' || val === 'created_date') return null;
                                        return <InputForm label={val} key={idx} />;
                                    })}
                                </>
                                : <>Are you Sure want to Delete?</>
                            }
                        </div>
                        <div className="bg-gray-200 px-4 py-3 text-right">
                            <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={()=>setModalShow({isShow: false, flag: '', data: {}})}><i className="fas fa-times"></i> Cancel</button>
                            <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i> Submit</button>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    );
}