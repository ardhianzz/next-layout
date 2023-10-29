"use client";
import { useEffect, useState } from "react";
import { useSession } from "@/utils/SessionContext";
import LoadingPage from "@/pages/LoadingPage";
import { useRouter } from "next/navigation";


const LoginMiddleware = ({children}) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {user} = useSession();
  
  if(typeof window !== 'undefined'){
    let userData = sessionStorage.getItem("_access");
    if(! userData){
      useEffect(() => {
        setLoading(false);
        router.push(process.env.NEXT_PUBLIC_APP);
      });
    }

    if(userData){
      useEffect(() => {
        if(user){
          setLoading(false);
          // router.push(process.env.NEXT_PUBLIC_APP+"/main");
        }
      });
    }
  }

  if(loading){
    return ( <LoadingPage /> )
  }else{
    return (
      <>
        {children}
      </>
    )
  }
}

export default LoginMiddleware