'use client';
import { useState } from "react";
import Modals from "./web/Modals";
import ModalPegawai from "./web/modals/ModalPegawai";



const HomePage = () => {
    const [modals, setModals] = useState(false);
    const modalsHide = () =>{
      setModals(!modals);
    }

  return (
    <>
    <div>Contoh ISI Pegawai</div>
    <button className="p-2 m-2 bg-slate-300 rounded-lg" onClick={modalsHide}>Modal Pegawai</button>
    <Modals status={modals} hideModal={modalsHide}>
        <ModalPegawai />
    </Modals>
    </>
  )
}

export default HomePage