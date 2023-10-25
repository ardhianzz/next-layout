"use client";

import { useState } from "react";
import Modals from "../web/Modals";
import ModalCek2 from "../web/modals/ModalCek2";


const HrdPage = () => {


    const [modals, setModals] = useState(false);
    const modalsHide = () =>{
        setModals(!modals);
    }
  return (
   <>
    <Modals status={modals} hideModal={modalsHide}>
        <ModalCek2 />
    </Modals>
    <button className="p-2 m-2 bg-slate-300 rounded-lg" onClick={modalsHide}>HRD User</button>
   </>
  )
}

export default HrdPage