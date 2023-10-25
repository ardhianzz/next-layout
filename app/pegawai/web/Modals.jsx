'use client';

import { useState } from "react";

const Modals = ({children, status, hideModal}) => {

const modalsHide = () =>{
    hideModal(!status);
  }
  return (
    <div className={`absolute z-50 bg-slate-950 top-0 bottom-0 left-0 right-0 ${status ? '': 'hidden'}`}>
        <div className="block w-96 h-64 bg-slate-200 mx-auto mt-36">
            <button className="bg-red-500 m-2 p-2 rounded-full" onClick={modalsHide}>X</button>
            <div className=" bg-stone-100 h-full">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modals