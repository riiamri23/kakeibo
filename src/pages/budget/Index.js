
import { NavCard } from "../../components/nav/Index";

export default function Budget(){
    return (<>
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 space-y-6 px-5">
        <NavCard />

        <div className="relative mx-auto w-full max-w-2xl flex flex-col justify-between md:flex-row md:space-x-5">
            <div className="w-full mx-2 px-4 py-8 shadow-md">
                <span>Budget</span>
                <hr className="my-4" />
                <div>
                    <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Period</label>
                    <div className="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Value</label>
                    <div className="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <hr className="my-4" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl flex flex-col justify-between md:flex-row md:space-x-5">
            <div className="w-full mx-2 px-4 py-8 shadow-md">
                <span>expenses</span>
                <hr className="my-4" />
            </div>
        </div>
    </div>
    </>);
}