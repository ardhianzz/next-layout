import Link from "next/link"


const SideBar = ({menuStatus}) => {
  return (
    <>
        <div className={`bg-blue-800 h-full ${menuStatus ? 'w-0' : 'w-2/12'}`}>
          <Link href="/main/user">
            <div className='bg-blue-700 cursor-pointer mt-1 mb-1'>USER</div>
          </Link>
          <Link href="/main/adminLevel1">
            <div className='bg-blue-700 cursor-pointer mt-1 mb-1'>Admin Level 1</div>
          </Link>
          <Link href="/main/adminLevel2">
            <div className='bg-blue-700 cursor-pointer mt-1 mb-1'>Admin Level 2</div>
          </Link>
        </div>
    </>
  )
}

export default SideBar