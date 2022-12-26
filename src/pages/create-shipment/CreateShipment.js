import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import Modal from "./Modal";
import SenderForm from "./SenderForm";
import RecipientForm from "./RecipientForm";
import PackageForm from "./PackageForm";
import Addons from "./Addons";

const CreateShipment = () => {

    const [formStep, setFormStep] = useState(3);
    const methods = useForm({ mode: 'all' });
    const { watch, setValue, trigger, formState: { isValid }, reset } = methods;
    const [formData, setFormData] = useState(localStorage.getItem("formData"))

    const onSubmit = data => console.log(data);

    // useFormPersist("formData", {
    //     watch,
    //     setValue,
    //     storage: window.localStorage, // default window.sessionStorage
    // });

    const handleNext = () => {
        if (!isValid) {
            return trigger();
        }
        setFormStep(cur => cur + 1);
    }

    useEffect(() => {
        setFormData(localStorage.getItem("formData"));
        // console.log(formData);
    }, []);

    const handleNo = () => {
        localStorage.removeItem("formData");
        setFormData(null);
        reset();
    }

    const handleContinue = () => {
        const formData = JSON.parse(localStorage.getItem("formData"));
        setFormData(null);
        reset(formData);
    }

    // console.log(watch("sender"));

    return (
        <div className="bg-background-gray z-0 min-h-screen">
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="md:w-[80%] mx-auto flex justify-center">
                    <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
                        <FormProvider {...methods}>
                            {/* {formData && <Modal handleNo={handleNo} handleContinue={handleContinue} />} */}
                            {formStep === 1 && <SenderForm />}
                            {formStep === 2 && <RecipientForm />}
                            {formStep === 3 && <PackageForm />}
                            {formStep === 4 && <Addons />}
                        </FormProvider>
                    </div>
                </div>
            </form>

            <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">

                {
                    formStep > 1 && formStep < 5 ? (
                        <button onClick={() => setFormStep(formStep - 1)} type="button" id="back-button" className="pill-button button-hover border-light-purple text-light-purple w-[160px] md:w-[180px] h-[40px] disabled:cursor-not-allowed disabled:bg-gray-2 disabled:text-light-purple">Back</button>
                    ) : null
                }

                <button onClick={handleNext} type="button" id="next-button" className="pill-button button-hover bg-light-purple  text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent">Next</button>

                {
                    formStep === 5 ? (
                        <div>
                            <button type="button" id="checkout-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px]">Go to Checkout</button>
                            <div className="text-center">
                                <p id="add-to-cart" className="mt-4 underline text-center text-sm font-medium text-light-purple cursor-pointer select-none">Add to Cart</p>
                            </div>
                        </div>
                    ) : null
                }

            </div>

        </div>
    );
};

export default CreateShipment;
