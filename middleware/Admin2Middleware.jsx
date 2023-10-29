"use client";
import { useEffect, useState } from "react";
import { useSession } from "@/utils/SessionContext";
import { useRouter } from "next/navigation";


const Admin2Middleware = ({children}) => {
  const [akses, setAkses] = useState(false);
  const router = useRouter();
  const {user} = useSession();
  
  if(typeof window !== 'undefined'){
    let userData = sessionStorage.getItem("_access");
    
    if(! userData){
      useEffect(() => {
        router.push(process.env.NEXT_PUBLIC_APP);
      });
    }

    if(userData){
      useEffect(() => {
        let userAkses = user.hak_akses;
        if(userAkses === 3){
          setAkses(true);
        }
      });
    }
  }

  if(akses){
    return ( 
    <>
      {children}
    </> 
    )
  }else{
    return (
      <>
        AKSES DIBATASI
      </>
    )
  }
}

export default Admin2Middleware