'use client';

import Link from "next/link";
import { useSession } from "@/utils/SessionContext";
import { useRouter } from "next/navigation";

const Header = ({ actionHidden }) => {
  const handleMenuHide = () => {
    actionHidden();
  }
  const router = useRouter();
  const { logout } = useSession();
  const logoutPage = () =>{
    logout();
    router.push(process.env.NEXT_PUBLIC_APP);
  }

  return (
    <div className="fixed bg-blue-900 h-16 w-screen">
        <div className="flex justify-between content-between">
            <div className="flex justify-between bg-blue-200 w-64 h-16">
                <div className="h-full w-16 bg-blue-400 flex content-center justify-center">
                  <Link href={'/main'} className="cursor-pointer mx-auto my-auto">
                    <div>home</div>
                  </Link>
                </div>
                <div className="bg-blue-300 my-auto m-3 p-1 rounded-lg cursor-pointer" onClick={handleMenuHide}>hide menu</div>
            </div>
            <div className="bg-blue-200 w-64 h-16">
              <div onClick={logoutPage} className="bg-red-900 mx-auto mt-4 text-white px-3 py-2 w-24 text-center rounded-3xl hover:bg-red-950 cursor-pointer">Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Header