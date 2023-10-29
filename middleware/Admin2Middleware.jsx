"use client";
import { useEffect, useState } from "react";
import { useSession } from "@/utils/SessionContext";
import { useRouter } from "next/navigation";
import Page403 from "@/pages/Page403";
import LoadingPage from "@/pages/LoadingPage";

const Admin2Middleware = ({children}) => {
  const [akses, setAkses] = useState(false);
  const router = useRouter();
  const {user} = useSession();
  const [loading, setLoading] = useState(true);
  
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
        setLoading(false);
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
        { loading ? <LoadingPage /> :  <Page403 />}
      </>
    )
  }
}

export default Admin2Middleware