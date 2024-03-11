import React, { useEffect, useState } from "react";
import {getDataBills, getDataBudget, getDataExpenses} from "../../services/budgetService";
import { getMonthName, getCurrency } from "../../utils/utilsFunction";
import { NavCard } from "../../components/nav/Index";
import { BudgetCard } from "./components/BudgetCard";
import { BillsCard } from "./components/BillsCard";
import { ExpensesCard } from "./components/ExpensesCard";


export default function Home() {

  const [dataExpense, setDataExpense] = useState({});
  const [dataBills, setDataBills] = useState({});
  const [dataBudget, setDataBudget] = useState({
    month: 'Month',
    budget: 0,
    used: 0,
    remaining: 0,
  });

  useEffect(()=>{

    const fetchAllData = async ()=>{
      const responseExpenses = await getDataExpenses();
      const responseBudget = await getDataBudget(2);
      const responseBills = await getDataBills();

      setDataExpense(responseExpenses);
      setDataBills(responseBills);

      // set data buget
      const usedBudget = responseExpenses?.data?.reduce((n, {value})=>{
        return n+value
      },0) + responseBills?.data?.reduce((n, {value})=>{
        return n+value
      },0);
      const remainingBudget = responseBudget?.data?.value-usedBudget;

      // console.log('used', tempUsedBudget)
      setDataBudget({
        month: getMonthName(responseBudget?.data?.month),
        budget: getCurrency(responseBudget?.data?.value),
        used: getCurrency(usedBudget),
        remaining: getCurrency(remainingBudget),
      });
    }


    // run function fetch
    fetchAllData();
  }, []);

  return (<>
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 space-y-6 px-5">
    <NavCard />
    <div className="relative mx-auto w-full max-w-2xl flex flex-col justify-between md:flex-row md:space-x-5">
      <div className="flex flex-col w-full mb-5 md:w-1/2">
        <BudgetCard budget={dataBudget} />
        <BillsCard dataBills={dataBills} />
      </div>

      <ExpensesCard dataExpense={dataExpense} />
    </div>
  </div>
</>);
}

