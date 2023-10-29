'use client';

import Link from "next/link"
import { useState } from "react";
import Header from "./web/Header";
import Footer from "./web/Footer";
import SideBar from "./web/SideBar";
import LoginMiddleware from "@/middleware/LoginMiddleware";

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);

  const menuHide = () =>{
    setMenu(!menu);
  }

  return (
    <>  
      <LoginMiddleware>
        <Header actionHidden={menuHide} />
        <div className="bg-slate-100 h-screen pt-16">
            <div className="flex h-full w-full">
                <SideBar menuStatus={menu} />
                <div className="h-full w-full bg-amber-50">
                    {children}
                </div>
            </div>
        </div>
        <Footer />
      </LoginMiddleware>
    </>
  )
}
