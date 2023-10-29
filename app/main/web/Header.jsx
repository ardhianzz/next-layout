'use client';

import Link from "next/link";
import { useSession } from "@/utils/SessionContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Header = ({ actionHidden }) => {
  const {user} = useSession();
  const handleMenuHide = () => {
    actionHidden();
    setLogo(! logo);
  }
  const [logo, setLogo] = useState(true);
  const router = useRouter();
  const { logout } = useSession();
  const [optMenu, setOptMenu] = useState(true);
  const showOptMenu =()=>{
    setOptMenu(!optMenu);
  }
  const logoutPage = () =>{
    logout();
    router.push(process.env.NEXT_PUBLIC_APP);
  }

  return (
    <div className="fixed bg-blue-900 h-16 w-screen drop-shadow-sm border-b-4 border-blue-800 pb-2">
        <div className="flex justify-between content-between">
            <div className="flex justify-between w-64 h-16">
                <div className={`h-full w-64 ${logo ? "flex": "hidden" } content-center justify-center`}>
                  <Link href={'/main'} className="cursor-pointer my-auto flex gap-4">
                    <Image src={'/image/logo.png'} width={70} height={23} alt="Logo" />
                    <span className="text-slate-100 my-auto">APP Name</span>
                  </Link>
                </div>
                <div className="bg-blue-300 my-auto m-3 p-1 cursor-pointer" onClick={handleMenuHide}>
                  <div className="bg-blue-300">
                    H
                  </div>
                </div>
            </div>
            <div className="flex w-96 h-16">
              <div className="text-right my-auto w-72 mr-2 overflow-hidden font-medium text-slate-100">
                {user?.nama}
              </div>
              <div className="my-auto">
                <div className="flex w-12 h-12 rounded-full bg-green-800 hover:bg-green-700 border-2 border-white cursor-pointer">
                  <div onClick={showOptMenu} className="mx-auto my-auto text-white">L</div>
                </div>
                <div className={`${optMenu ? 'hidden': 'absolute'} left-0 right-0 top-0 h-screen`} onClick={showOptMenu}>
                    <div className="flex mt-16 w-full justify-end content-end">
                      <div className="w-36 mr-16">
                        <div onClick={(e) => {e.stopPropagation(); alert("Profile")}} className="bg-slate-300 w-full text-slate-900 px-3 my-1 py-2 text-center hover:bg-slate-400 cursor-pointer">Profile</div>
                        <div onClick={(e) => {logoutPage(); e.stopPropagation();}} className="bg-red-900 w-full text-white px-3 my-1 py-2 text-center hover:bg-red-950 cursor-pointer">Logout</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header