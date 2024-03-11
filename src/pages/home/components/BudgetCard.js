

export const BudgetCard = ({budget})=>{
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
  