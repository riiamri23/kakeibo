
import { getMonthName, getCurrency, getFormattedDate } from "../../../utils/utilsFunction";

export const BillsCard = ({dataBills})=>{
    const txtDue_s = dataBills && dataBills?.data?.length > 0 ? dataBills?.data?.length > 1 ? `${dataBills?.data?.length} Dues` : `${dataBills?.data?.length} Due` : "";
    return (
      <div className="w-full mx-2 px-4 py-8 shadow-md">
        <div className="flex justify-between">
          <span>Bills</span>
          <span>{txtDue_s}</span>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col">
          {/* tag for Bills */}
          {
            dataBills && dataBills?.data?.length > 0 ?
            dataBills?.data?.map((val, label)=>{
              const dateBill = getFormattedDate(val?.date)?.split("-");
              const day = dateBill[0] ?? 0;
              const month = dateBill[1] ?? 0;
              return (
              <div className="mb-3">
                <span className="flex items-center justify-between">
                  <span className="flex space-x-3">
                    <span className="bg-gray-700 w-10 flex flex-col justify-center items-center rounded-md">
                      <span className="text-white">{getMonthName(parseInt(month), "sort")}</span>
                      <span className="bg-white w-8 text-center my-1 rounded-sm">{day}</span>
                    </span>
                    <span className="justify-self-start">
                      <h3 className="text-gray-800 font-semibold text-base">{val.label}</h3>
                      <p className="text-gray-600 text-sm">{getCurrency(val.value)}</p>
                    </span>
                  </span>
                  <span className="bg-green-600 w-3 h-3 rounded-full"></span>
                </span>
              </div>
            )})
            : <></>
          }
          
  
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
    );
  }