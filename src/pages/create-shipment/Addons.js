import React from 'react'

const Addons = () => {
    return (
        <div class="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
            <div class="flex flex-col text-center w-full md:rounded-xl">
                <div class="flex flex-col bg-white md:rounded-xl pb-6 px-2">
                    <p class="text-dark-purple font-semibold text-xl my-4">Would you like to insure this shipment?</p>
                    <p class="text-center text-error-red mb-4 hidden">Please select an option</p>
                    <div class="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
                        <div class="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                            <div class="basis-1/2"><button type="button" id="noInsurance" class="form-input w-full h-[60px] 
                  bg-light-purple text-white border-transparent
                  ">No insurance</button></div>
                            <div class="basis-1/2"><button type="button" id="addInsurance" class="form-input w-full h-[60px] 
                  hover:bg-dark-purple group hover:text-white hover:border-transparent
                  ">Add insurance<br /><span class="font-semibold text-dark-purple group-hover:text-white">(+ SGD$ 0.12)</span></button></div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col bg-white md:rounded-xl mt-6 pb-6 px-2">
                    <p class="text-dark-purple font-semibold text-xl my-4">Who will pay for taxes and duties?</p>
                    <p class="text-center text-error-red mb-4 hidden">Please select an option</p>
                    <div class="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
                        <div class="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                            <div class="flex flex-col justify-center basis-1/2"><button type="button" id="receiverPayTax" class="form-input w-full h-[60px] place-self-center bg-light-purple text-white border-transparent">Post-paid, Receiver</button></div>
                            <div class="basis-1/2"><button type="button" id="senderPayTax" class="form-input w-full h-[60px] disabled:bg-disabled-purple disabled:text-white disabled:border-transparent hover:bg-dark-purple hover:text-white group hover:border-transparent">Pre-paid, Sender<br /><span class="font-semibold  text-dark-purple group-hover:text-white">(+SGD $67.27)</span></button></div>
                        </div>
                        <p class="mt-6 text-center text-xs font-semibold text-subtext-gray">Amount will be determined by the Customs and charged to the recipient.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addons