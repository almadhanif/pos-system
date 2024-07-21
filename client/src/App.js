import React from 'react';
import './index.css';
import logo from './images/widatech_logo.jpg';
import { FaHome } from 'react-icons/fa';
import { FaFileInvoice } from 'react-icons/fa';
// import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <aside className="absolute left-0 top-0 z-9999 flex w-72.5 flex-col overflow-y-hidden  dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full w-16 h-screen p-5 space-y-5 overflow-hidden transition-all duration-200 ease-in-out bg-white border-r-2 hover:w-52 group">
        <div className="flex items-center ">
          <img src={logo} width={80} height={80} alt="company logo" />
          <div className="flex ml-3 text-lg font-medium text-black transition-all duration-100 ease-in-out delay-75 opacity-0 group-hover:opacity-100">
            Wida <span className="text-slate-500 ">Tech</span>
          </div>
        </div>
        <hr className="border-[1px] border-gray-200" />
        <div className="flex items-center ">
          <div className="flex items-center ml-1 text-lg text-black transition-all duration-200 ease-in-out">
            <FaHome />
            <p className="flex ml-3 text-base font-medium text-gray-500 transition-all duration-100 ease-in-out delay-75 opacity-0 hover:text-black group-hover:opacity-100">
              Dashboard
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center ml-1 text-lg text-black transition-all duration-200 ease-in-out">
            <FaFileInvoice />
            <p className="flex ml-3 text-base font-medium text-gray-500 transition-all duration-100 ease-in-out delay-75 opacity-0 hover:text-black group-hover:opacity-100">
              Invoice
            </p>
          </div>
        </div>
      </aside>
      {/* <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <header className="sticky top-0 flex w-full bg-white z-999 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
          <div className="flex items-center justify-between flex-grow px-4 py-4 shadow-2 md:px-5 ">
            <div className="flex items-center justify-between">
              <h1 className="justify-start">Dashboard</h1>
            </div>
          </div>
        </header>
        <main>
          <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-4">
            <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
              <div className="rounded-lg border border-stroke bg-white px-7.5 py-6 shadow-default ">
                <h2>ini teks</h2>
              </div>
              <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default ">
                <InvoiceForm />
              </div>
            </div>
          </div>
        </main>
      </div> */}
    </div>
  );
}

export default App;
