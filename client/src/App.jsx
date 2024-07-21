import React from 'react';
import './index.css';
import logo from './images/widatech_logo.jpg';
import { FaHome } from 'react-icons/fa';
import { FaFileInvoice } from 'react-icons/fa';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import TransitionsModal from './components/Modal';
import DataGridDemo from './components/DataGridDemo';

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
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <header className="sticky top-0 flex w-full bg-white z-999 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"></header>
        <main>
          <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="">
                  Manage and monitoring your sales with one page
                </p>
              </div>
              <div className="flex space-x-6">
                <TransitionsModal />
                <div className="h-10 w-36 bg-slate-300 rounded-xl">
                  <button className="flex items-center p-2 mx-auto space-x-1 ">
                    <HiOutlineDocumentReport />
                    <p className="text-sm font-medium">Financial Report</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-3 gap-4 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
              <div className="bg-white border rounded-lg border-stroke shadow-default ">
                <h3 className="p-2 text-lg font-medium">Graph</h3>
              </div>
              <div className="bg-white border rounded-lg border-stroke shadow-default ">
                <h3 className="p-2 text-lg font-medium">Invoices Data</h3>
                <DataGridDemo />
              </div>
              <div className="bg-white border rounded-lg border-stroke shadow-default ">
                <h3>ini teks</h3>
              </div>
              <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default "></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
