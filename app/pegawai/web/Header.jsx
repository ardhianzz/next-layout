'use client';

import Link from "next/link";
import { useState } from "react";

const Header = ({ menuHide }) => {
  return (
    <div className="fixed bg-blue-100 h-16 w-screen">
        <div className="flex justify-between content-between">
            <div className="flex justify-between bg-blue-200 w-64 h-16">
                <div className="h-full w-16 bg-blue-400 flex content-center justify-center">
                  <Link href={'/pegawai'} className="cursor-pointer mx-auto my-auto">
                    <div>home</div>
                  </Link>
                </div>
                <div className="bg-blue-300 my-auto m-3 p-1 rounded-lg cursor-pointer" onClick={menuHide}>hide menu</div>
            </div>
            <div className="bg-blue-200 w-64 h-16">Kiri</div>
        </div>
    </div>
  )
}

export default Header