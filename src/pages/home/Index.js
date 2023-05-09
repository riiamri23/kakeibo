import React, { useEffect, useState } from "react";
import {getDataBudget, getDataExpenses} from "../../services/budgetService";
import { getMonthName, getCurrency } from "../../utils/utilsFunction";

const BudgetCard = ({budget})=>{
  return (
    <div className="w-full mx-2 px-4 py-8 shadow-md">
          <div className="flex justify-between">
            <span>Budget</span>
            <span>{budget?.month}</span>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col space-y-2 text-gray-900">

            <div className="flex space-x-2 w-full">
              <div className="bg-green-200 rounded-md p-5 w-1/2 text-center text-sm">
                <span className="block font-bold">Budget</span>
                {budget?.budget}
              </div> 
              <div className="bg-red-200 rounded-md p-5 w-1/2 text-center text-sm">
                <span className="block font-bold">Used</span>
                {budget?.used}
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-5 w-full text-center text-lg">
              <span className="block font-bold">Remaining</span>
              {budget?.remaining}
            </div>
          </div>
      
    </div>
  );
}

const NavCard = ()=>{
  return (
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
        <svg width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_329_15)">
          <path d="M11.078 1.82514e-06C11.372 1.82514e-06 11.635 0.183002 11.734 0.457002L12.44 2.414C12.693 2.477 12.91 2.54 13.094 2.606C13.295 2.678 13.554 2.787 13.874 2.936L15.518 2.066C15.6522 1.99491 15.8058 1.96925 15.9558 1.99287C16.1058 2.01649 16.2442 2.08811 16.35 2.197L17.796 3.692C17.988 3.891 18.042 4.182 17.934 4.436L17.163 6.243C17.291 6.478 17.393 6.679 17.471 6.847C17.555 7.03 17.659 7.282 17.783 7.607L19.58 8.377C19.85 8.492 20.017 8.762 19.999 9.051L19.867 11.126C19.858 11.2608 19.8096 11.39 19.7278 11.4975C19.646 11.6051 19.5345 11.6863 19.407 11.731L17.705 12.336C17.656 12.571 17.605 12.772 17.551 12.942C17.4639 13.2045 17.3645 13.4628 17.253 13.716L18.108 15.606C18.1683 15.7388 18.1846 15.8874 18.1544 16.0301C18.1241 16.1728 18.049 16.3021 17.94 16.399L16.314 17.851C16.2069 17.9462 16.0733 18.0064 15.931 18.0236C15.7888 18.0408 15.6447 18.014 15.518 17.947L13.842 17.059C13.5798 17.1978 13.3093 17.3204 13.032 17.426L12.3 17.7L11.65 19.5C11.6018 19.6318 11.5149 19.746 11.4007 19.8276C11.2865 19.9091 11.1503 19.9542 11.01 19.957L9.11 20C8.96596 20.0038 8.82429 19.9628 8.70449 19.8828C8.58468 19.8027 8.49263 19.6875 8.441 19.553L7.675 17.526C7.41365 17.4367 7.15488 17.34 6.899 17.236C6.68972 17.1454 6.4836 17.0477 6.281 16.943L4.381 17.755C4.25581 17.8084 4.11779 17.8243 3.98374 17.8007C3.8497 17.777 3.72541 17.715 3.626 17.622L2.22 16.303C2.11532 16.2052 2.04403 16.077 2.01622 15.9365C1.9884 15.796 2.00547 15.6503 2.065 15.52L2.882 13.74C2.77334 13.5292 2.67261 13.3144 2.58 13.096C2.4719 12.8287 2.37186 12.5583 2.28 12.285L0.490001 11.74C0.344502 11.696 0.217596 11.6052 0.128991 11.4817C0.0403864 11.3582 -0.00495751 11.2089 1.25819e-06 11.057L0.0700013 9.136C0.0749838 9.01066 0.114138 8.88907 0.183229 8.78438C0.252321 8.67968 0.34872 8.59587 0.462001 8.542L2.34 7.64C2.427 7.321 2.503 7.073 2.57 6.892C2.66434 6.65025 2.76911 6.41269 2.884 6.18L2.07 4.46C2.00823 4.32938 1.98947 4.18254 2.01642 4.04059C2.04337 3.89864 2.11465 3.76889 2.22 3.67L3.624 2.344C3.72242 2.25117 3.84557 2.18876 3.97863 2.16428C4.11169 2.1398 4.24898 2.15429 4.374 2.206L6.272 2.99C6.482 2.85 6.672 2.737 6.844 2.646C7.049 2.537 7.323 2.423 7.668 2.3L8.328 0.459002C8.3768 0.32427 8.46599 0.207883 8.58339 0.125733C8.7008 0.0435827 8.84071 -0.000326251 8.984 1.82514e-06H11.078ZM10.588 1.377H9.475L8.87 3.071C8.83443 3.16978 8.77688 3.25918 8.70169 3.33246C8.62651 3.40574 8.53566 3.46097 8.436 3.494C8 3.639 7.685 3.764 7.501 3.861C7.306 3.964 7.057 4.121 6.761 4.331C6.66412 4.39899 6.55164 4.44142 6.434 4.45436C6.31635 4.46729 6.19734 4.45032 6.088 4.405L4.258 3.65L3.545 4.324L4.288 5.894C4.33248 5.98741 4.35506 6.08974 4.35402 6.1932C4.35298 6.29665 4.32835 6.3985 4.282 6.491C4.082 6.892 3.947 7.188 3.879 7.37C3.77472 7.67297 3.68463 7.98064 3.609 8.292C3.58388 8.38945 3.53774 8.48023 3.47382 8.55797C3.40991 8.6357 3.32976 8.69852 3.239 8.742L1.449 9.601L1.413 10.581L3.033 11.073C3.248 11.138 3.418 11.303 3.489 11.515C3.649 11.995 3.777 12.349 3.869 12.571C3.9909 12.8527 4.12571 13.1287 4.273 13.398C4.32283 13.4907 4.35048 13.5936 4.35378 13.6988C4.35708 13.8039 4.33593 13.9084 4.292 14.004L3.541 15.642L4.252 16.31L6.034 15.548C6.12999 15.507 6.23391 15.4879 6.33821 15.492C6.44251 15.4962 6.54458 15.5235 6.637 15.572C7.002 15.764 7.274 15.897 7.446 15.97C7.621 16.043 7.956 16.165 8.442 16.331C8.53848 16.3639 8.62651 16.4178 8.6998 16.4886C8.77309 16.5595 8.82984 16.6457 8.866 16.741L9.574 18.612L10.5 18.592L11.097 16.938C11.1311 16.8436 11.1854 16.7578 11.256 16.6865C11.3267 16.6152 11.412 16.5601 11.506 16.525L12.543 16.137C12.805 16.04 13.123 15.887 13.494 15.677C13.5967 15.6193 13.7122 15.5884 13.83 15.587C13.9477 15.5856 14.064 15.6138 14.168 15.669L15.745 16.504L16.632 15.713L15.856 14C15.8161 13.9121 15.7954 13.8167 15.7953 13.7201C15.7951 13.6236 15.8155 13.5281 15.855 13.44C16.037 13.033 16.16 12.726 16.222 12.53C16.283 12.338 16.346 12.061 16.407 11.705C16.428 11.5841 16.4808 11.4709 16.5601 11.3772C16.6394 11.2836 16.7422 11.2127 16.858 11.172L18.506 10.587L18.578 9.447L16.958 8.753C16.8718 8.71629 16.7939 8.66243 16.7291 8.5947C16.6642 8.52697 16.6139 8.44679 16.581 8.359C16.4655 8.04024 16.3394 7.7254 16.203 7.415C16.0739 7.14473 15.9337 6.87984 15.783 6.621C15.7308 6.52955 15.7004 6.42725 15.6944 6.32211C15.6883 6.21697 15.7067 6.11186 15.748 6.015L16.473 4.315L15.709 3.525L14.221 4.313C14.1239 4.36452 14.016 4.39254 13.906 4.3948C13.7961 4.39705 13.6872 4.37349 13.588 4.326C13.2722 4.16897 12.9491 4.02681 12.62 3.9C12.3393 3.80575 12.0531 3.72894 11.763 3.67C11.6479 3.64559 11.5409 3.59231 11.452 3.51517C11.3631 3.43802 11.2953 3.33955 11.255 3.229L10.587 1.376L10.588 1.377ZM10.024 5.641C12.459 5.641 14.434 7.594 14.434 10.002C14.434 12.41 12.459 14.362 10.024 14.362C7.588 14.362 5.614 12.41 5.614 10.002C5.614 7.594 7.588 5.642 10.024 5.642V5.641ZM10.024 7.019C8.357 7.019 7.006 8.354 7.006 10.002C7.006 11.65 8.357 12.986 10.024 12.986C11.69 12.986 13.041 11.65 13.041 10.002C13.041 8.354 11.691 7.019 10.024 7.019Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_329_15">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
        </svg>
          Setting
        </p>
      </div>
    </div>
  );
}

export default function Home() {

  const [dataExpense, setDataExpense] = useState({});
  const [dataBudget, setDataBudget] = useState({
    month: 'Month',
    budget: 0,
    used: 0,
    remaining: 0,
  });

  useEffect(()=>{
    // const fetchDataExpense = async ()=>{
    //   const response = await getDataBudget();
    //   console.log('response', response);

    //   setDataExpense(response);
    // }
    // console.log('hello');
    // fetchDataExpense();

    const fetchAllData = async ()=>{
      const responseExpenses = await getDataExpenses();
      const responseBudget = await getDataBudget(2);

      setDataExpense(responseExpenses);
      // setDataBudget(responseBudget);
      // set data buget
      
      const tempUsedBudget = responseExpenses?.data?.reduce((n, {value})=>{
        return n+value
      },0);

      // console.log('used', tempUsedBudget)
      setDataBudget({
        month: getMonthName(responseBudget?.data?.month),
        budget: getCurrency(responseBudget?.data?.value),
        used: getCurrency(tempUsedBudget),
        remaining: getCurrency(responseBudget?.data?.value-tempUsedBudget),
      });
    }


    // run function fetch
    fetchAllData();
  }, []);

  return (<><div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 space-y-6 px-5">
  <NavCard />
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
                    <h3 className="text-gray-800 font-semibold text-base">{getCurrency(val.value)}</h3>
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

