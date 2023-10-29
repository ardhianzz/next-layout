'use client';
const Modals = ({children, status, hideModal}) => {

const modalsHide = () =>{
    hideModal(!status);
  }
  return (
    <div className={`absolute z-50 bg-slate-800 bg-opacity-75 top-0 bottom-0 left-0 right-0 ${status ? '': 'hidden'}`}>
        <div className="block w-96 mx-auto mt-48">
            <div className="w-full h-64">    
              <div className="absolute w-96 ">
                <div className="flex justify-end">
                  <button className=" bg-red-500 w-8 h-8 rounded-full drop-shadow-lg" onClick={modalsHide}>X</button>
                </div>
              </div>
              <div className="h-full mr-4 pt-3">
                <div className="w-full h-full bg-slate-50 rounded-md">
                  {children}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modals