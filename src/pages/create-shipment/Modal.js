import React from 'react'

const Modal = ({ handleNo, handleContinue }) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-bg-purple sm:mx-0 sm:h-10 sm:w-10">
                                    <svg className="h-6 w-6 text-light-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Continue where you left off?</h3>
                                    <div className="mt-2 text-sm text-gray-500">You have entered some data in the form. Do you want to continue from where you left off?</div>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleContinue} className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full min-w-[95px] inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-light-purple text-base font-medium text-white hover:bg-dark-purple focus:outline-none sm:text-sm disabled:bg-disabled-purple sm:w-auto sm:ml-3">Continue</button>
                            <button onClick={handleNo} type="reset" className="mt-3 w-full min-w-[95px] inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-2">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal