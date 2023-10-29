'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
//
// DIGUNAKAN PADA PAGE LOGIN 
//
import { useSession } from "@/utils/SessionContext";



const MainPage = () => {
  const router = useRouter();
  const { login } = useSession();

  const loginUser =  () => {
    let sessinUser = {
      user_unik_id: 8764823,
      nama: "User Pengguna",
      email: "user@email.com",
      hak_akses: 1,
    };
    login(sessinUser);
    router.push(process.env.NEXT_PUBLIC_APP+"/main");
  }

  const loginAdmin1 =  () => {
    let sessinUser = {
      user_unik_id: 234234,
      nama: "Admin Pengguna 1",
      email: "admin_1@email.com",
      hak_akses: 2,
    };
    login(sessinUser);
    router.push(process.env.NEXT_PUBLIC_APP+"/main");
  }

  const loginAdmin2 =  () => {
    let sessinUser = {
      user_unik_id: 2342365,
      nama: "Admin Pengguna 2",
      email: "admin_2@email.com",
      hak_akses: 3,
    };
    login(sessinUser);
    router.push(process.env.NEXT_PUBLIC_APP+"/main");
  }

  

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-slate-50'>
      <div className=''>
        <h1 className='text-3xl mb-12'>Hallo, silahkan pilih : </h1>
        <div className='block justify-center'>
          <div onClick={loginUser} className='bg-blue-800 cursor-pointer w-36 mx-auto my-2 p-2 rounded-md hover:bg-blue-400 text-center text-blue-50'>User</div>
          <div onClick={loginAdmin1} className='bg-blue-800 cursor-pointer w-36 mx-auto my-2 p-2 rounded-md hover:bg-blue-400 text-center text-blue-50'>Admin Level 1</div>
          <div onClick={loginAdmin2} className='bg-blue-800 cursor-pointer w-36 mx-auto my-2 p-2 rounded-md hover:bg-blue-400 text-center text-blue-50'>Admin Level 2</div>
        </div>
      </div>
    </div>
  )
}

export default MainPage