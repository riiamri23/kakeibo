import React, { useEffect, useState } from "react";
import {getDataBudget, getDataExpenses} from "../../services/budgetService";
import { getMonthName } from "../../utils/utilsFunction";

const BudgetCard = ({budget})=>{
  return (
    <div className="w-full mx-2 px-4 py-8 shadow-md">
          <div className="flex justify-between">
            <span>Budget</span>
            <span>{budget?.data?.month ? getMonthName(budget?.data?.month) : 'Month'}</span>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col space-y-2 text-gray-900">

            <div className="flex space-x-2 w-full">
              <div className="bg-green-200 rounded-md p-5 w-1/2 text-center text-sm">
                <span className="block font-bold">Budget</span>
                Rp. 4.000.000
              </div> 
              <div className="bg-red-200 rounded-md p-5 w-1/2 text-center text-sm">
                <span className="block font-bold">Used</span>
                Rp. 1.000.000
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-5 w-full text-center text-lg">
              <span className="block font-bold">Remaining</span>
              {budget?.data?.value ? budget?.data?.value : 0}
            </div>
          </div>
      
    </div>
  );
}

export default function Home() {

  const [dataExpense, setDataExpense] = useState({});
  const [dataBudget, setDataBudget] = useState({});

  useEffect(()=>{
    // const fetchDataExpense = async ()=>{
    //   const response = await getDataBudget();
    //   console.log('response', response);

    //   setDataExpense(response);
    // }
    // console.log('hello');
    // fetchDataExpense();

    const fetchDataExpense = async ()=>{
      const response = await getDataExpenses();
      console.log(response);
      setDataExpense(response);
    }

    const fetchDataBudget = async ()=>{
      const response = await getDataBudget(2);
      console.log('budget', response);
      setDataBudget(response);
    }

    // run function fetch
    fetchDataExpense();
    fetchDataBudget();
  }, []);

  return (<><div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 space-y-6 px-5">
  <div className="relative bg-white p-6 shadow-xl mx-auto w-full max-w-2xl rounded-2xl border-dashed border-2 border-gray-500">
    <div className="mx-auto flex w-full max-w-md flex-row justify-around">
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z"/></svg>
        Home
      </p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12 40q-3.3 0-5.65-2.35Q4 35.3 4 32V16q0-3.3 2.35-5.65Q8.7 8 12 8h24q3.3 0 5.65 2.35Q44 12.7 44 16v16q0 3.3-2.35 5.65Q39.3 40 36 40Zm0-23.5h24q1.45 0 2.725.45Q40 17.4 41 18.25V16q0-2.1-1.45-3.55Q38.1 11 36 11H12q-2.1 0-3.55 1.45Q7 13.9 7 16v2.25q1-.85 2.275-1.3Q10.55 16.5 12 16.5Zm-4.85 6.8L31 29.05q.35.1.725.025.375-.075.625-.325l8-6.7q-.65-1.15-1.8-1.85-1.15-.7-2.55-.7H12q-1.75 0-3.1 1.075T7.15 23.3Z"/></svg>
        Budget
      </p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12 28.05h15.65v-3H12Zm0-6.5h24v-3H12Zm0-6.5h24v-3H12ZM4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z"/></svg>
        Message
      </p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"/></svg>
        Account
      </p>
    </div>
  </div>
  <div className="relative mx-auto w-full max-w-2xl flex flex-col justify-between md:flex-row md:space-x-5">
    <div className="flex flex-col w-full mb-5 md:w-1/2">
      <BudgetCard budget={dataBudget} />
      <div className="w-full mx-2 px-4 py-8 shadow-md">
        <div className="flex justify-between">
          <span>Bills</span>
          <span>1 Due</span>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col">
          <span className="flex items-center justify-between">
            <span className="flex space-x-3">
              <span className="bg-gray-700 w-10 flex flex-col justify-center items-center rounded-md">
                <span className="text-white">Nov</span>
                <span className="bg-white w-8 text-center my-1 rounded-sm">25</span>
              </span>
              <span className="justify-self-start">
                <h3 className="text-gray-800 font-semibold text-base">Netflix</h3>
                <p className="text-gray-600 text-sm">Rp. 70.000</p>
              </span>
            </span>
            <span className="bg-green-600 w-3 h-3 rounded-full"></span>
          </span>

          <div className="self-center">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 32.055 32.055" style={{enableBackground:'new 0 0 32.055 32.055;'}} xmlSpace="preserve" width="30px" height="30px"><g>
              <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
          </div>
        </div>
      </div>
      {/* <div className="w-full mx-2 px-4 py-8 shadow-md">
        <div className="flex justify-between">
          <span>Account</span>
          <span>Healthy</span>
        </div>
      </div> */}

    </div>

    <div className="flex flex-col w-full md:w-1/2">
      <div className="w-full mx-2 px-4 py-8 shadow-md">

        <span>Expenses</span>
        <hr className="my-4" />
        <div className="space-y-5 flex flex-col">
          {/* Tag for expenses */}
          {
            dataExpense 
            &&
            dataExpense?.data?.length > 0 ?
              dataExpense?.data?.map((val, label)=>(
                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-3">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xmlSpace="preserve">
        
                        <defs>
                        </defs>
                        <g style={{stroke: 'none', strokeWidth: '0', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'none', fillRule: 'nonzero', opacity: '1'}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                          <path d="M 79.242 26.448 v 59.355 c 0 2.318 -1.879 4.198 -4.198 4.198 H 14.956 c -2.318 0 -4.198 -1.879 -4.198 -4.198 V 26.448 C 34.002 20.714 56.846 20.495 79.242 26.448 z" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(64,89,107)', fillRule: 'nonzero', opacity: '1'}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 86.288 10.071 H 56.909 h -1.984 H 3.712 c -1.796 0 -3.252 1.456 -3.252 3.252 v 9.873 c 0 1.796 1.456 3.252 3.252 3.252 h 51.007 h 1.488 h 30.081 c 1.796 0 3.252 -1.456 3.252 -3.252 v -9.873 C 89.539 11.527 88.084 10.071 86.288 10.071 z" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <polyline points="45,28.63 35.29,38.34 35.26,30.11 27.04,30.08 35.6,21.52 54.4,21.52 62.96,30.08 54.74,30.11 54.71,38.34 45,28.63 " style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform="  matrix(1 0 0 1 0 0) "/>
                          <path d="M 47.961 8.86 C 55.764 4.468 65.301 1.712 75.943 0 l -1.98 6.506 l 6.157 5.223 c -8.103 0.196 -16.565 2.097 -25.291 5.243" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 42.04 8.861 C 34.237 4.468 24.699 1.712 14.057 0 l 1.98 6.506 l -6.157 5.223 c 8.073 0.195 16.503 2.083 25.194 5.208" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <circle cx="45.004999999999995" cy="18.335" r="9.925" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(231,78,58)', fillRule: 'nonzero', opacity: 1}} transform="  matrix(1 0 0 1 0 0) "/>
                          <path d="M 37.339 48.251 c -0.095 0 -0.189 0.002 -0.284 0.005 c -2.124 0.074 -4.043 0.961 -5.403 2.498 c -2.924 3.303 -1.819 10.031 2.572 15.651 c 2.126 2.721 7.303 7.117 10.775 9.188 c 3.473 -2.072 8.65 -6.468 10.775 -9.188 c 4.391 -5.62 5.496 -12.349 2.572 -15.651 c -1.36 -1.537 -3.28 -2.425 -5.404 -2.498 c -2.543 -0.083 -5.117 1.016 -7.242 3.105 L 45 52.051 l -0.701 -0.689 C 42.252 49.349 39.791 48.251 37.339 48.251 z" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        </g>
                      </svg>
                    </span>
                    <span>
                      <h3 className="text-gray-800 font-semibold text-base">{val.label}</h3>
                      <p className="text-gray-600 text-sm">23 Nov 10:00 am</p>
                    </span>
                  </span>
                  <span>
                    <h3 className="text-gray-800 font-semibold text-base">{val.value}</h3>
                    <p className="text-gray-600 text-sm">{val.from}</p>
                  </span>
                </div>))
            
            : <></>
          }
          {/* <div className="flex justify-between items-center">
            <span className="flex items-center space-x-3">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xmlSpace="preserve">

                  <defs>
                  </defs>
                  <g style={{stroke: 'none', strokeWidth: '0', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'none', fillRule: 'nonzero', opacity: '1'}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 79.242 26.448 v 59.355 c 0 2.318 -1.879 4.198 -4.198 4.198 H 14.956 c -2.318 0 -4.198 -1.879 -4.198 -4.198 V 26.448 C 34.002 20.714 56.846 20.495 79.242 26.448 z" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(64,89,107)', fillRule: 'nonzero', opacity: '1'}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 86.288 10.071 H 56.909 h -1.984 H 3.712 c -1.796 0 -3.252 1.456 -3.252 3.252 v 9.873 c 0 1.796 1.456 3.252 3.252 3.252 h 51.007 h 1.488 h 30.081 c 1.796 0 3.252 -1.456 3.252 -3.252 v -9.873 C 89.539 11.527 88.084 10.071 86.288 10.071 z" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <polyline points="45,28.63 35.29,38.34 35.26,30.11 27.04,30.08 35.6,21.52 54.4,21.52 62.96,30.08 54.74,30.11 54.71,38.34 45,28.63 " style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 47.961 8.86 C 55.764 4.468 65.301 1.712 75.943 0 l -1.98 6.506 l 6.157 5.223 c -8.103 0.196 -16.565 2.097 -25.291 5.243" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 42.04 8.861 C 34.237 4.468 24.699 1.712 14.057 0 l 1.98 6.506 l -6.157 5.223 c 8.073 0.195 16.503 2.083 25.194 5.208" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <circle cx="45.004999999999995" cy="18.335" r="9.925" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(231,78,58)', fillRule: 'nonzero', opacity: 1}} transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 37.339 48.251 c -0.095 0 -0.189 0.002 -0.284 0.005 c -2.124 0.074 -4.043 0.961 -5.403 2.498 c -2.924 3.303 -1.819 10.031 2.572 15.651 c 2.126 2.721 7.303 7.117 10.775 9.188 c 3.473 -2.072 8.65 -6.468 10.775 -9.188 c 4.391 -5.62 5.496 -12.349 2.572 -15.651 c -1.36 -1.537 -3.28 -2.425 -5.404 -2.498 c -2.543 -0.083 -5.117 1.016 -7.242 3.105 L 45 52.051 l -0.701 -0.689 C 42.252 49.349 39.791 48.251 37.339 48.251 z" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(55,79,96)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                  </g>
                </svg>
              </span>
              <span>
                <h3 className="text-gray-800 font-semibold text-base">Beli Makan</h3>
                <p className="text-gray-600 text-sm">23 Nov 10:00 am</p>
              </span>
            </span>
            <span>
              <h3 className="text-gray-800 font-semibold text-base">Rp. 20.000</h3>
              <p className="text-gray-600 text-sm">Cash</p>
            </span>
          </div> */}

          <div className="self-center">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 32.055 32.055" style={{enableBackground:'new 0 0 32.055 32.055;'}} xmlSpace="preserve" width="30px" height="30px"><g>
              <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
          </div>
        </div>

      </div>


    </div>
  </div>
</div>
    </>);
}

