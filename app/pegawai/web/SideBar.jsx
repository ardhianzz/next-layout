import Link from "next/link"


const SideBar = ({menuStatus}) => {
  return (
    <>
        <div className={`bg-blue-800 h-full ${menuStatus ? 'w-0' : 'w-2/12'}`}>
          <Link href="/pegawai/user">
            <div className='bg-blue-700 cursor-pointer mt-1 mb-1'>USER</div>
          </Link>
          <Link href="/pegawai/hrd">
            <div className='bg-blue-700 cursor-pointer mt-1 mb-1'>HRD</div>
          </Link>
          <Link href="/pegawai/admin">
            <div className='bg-blue-700 cursor-pointer mt-1 mb-1'>ADMIN</div>
          </Link>
        </div>
    </>
  )
}

export default SideBar