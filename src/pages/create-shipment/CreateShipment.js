import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import Modal from "./Modal";
import SenderForm from "./SenderForm";
import RecipientForm from "./RecipientForm";
// import PackageForm from "./PackageForm";
import PackageForm from "./PackageForm";
import Addons from "./Addons";
import ReviewForm from "./ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../store/formSlice";

const CreateShipment = () => {

    const [formStep, setFormStep] = useState(1);
    const form = useSelector(state => state.form);
    const methods = useForm({ defaultValues: form, mode: 'all' });
    const { watch, setValue, trigger, formState: { isValid }, reset } = methods;
    const [formData, setFormData] = useState(localStorage.getItem("formData"))
    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        dispatch(setForm(data))
    };

    // useFormPersist("formData", {
    //     watch,
    //     setValue,
    //     storage: window.localStorage, // default window.sessionStorage
    // });

    const handleNext = () => {
        if (!isValid) {
            return trigger();
        } else {
            setFormStep(formStep + 1);
        }
    }

    const handleBack = () => {
        setFormStep(cur => cur - 1);
    }

    useEffect(() => {
        setFormData(localStorage.getItem("formData"));
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
                            {formStep === 5 && <ReviewForm />}
                        </FormProvider>
                    </div>
                </div>

                <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">

                    {
                        formStep > 1 && formStep <= 5 ? (
                            <button onClick={handleBack} type="button" id="back-button" className="pill-button button-hover border-light-purple text-light-purple w-[160px] md:w-[180px] h-[40px] disabled:cursor-not-allowed disabled:bg-gray-2 disabled:text-light-purple">Back</button>
                        ) : null
                    }

                    {
                        formStep !== 5 && <button onClick={handleNext} type="button" id="next-button" className="pill-button button-hover bg-light-purple  text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent">Next</button>
                    }

                    {
                        formStep === 5 ? (
                            <div>
                                <button type="submit" id="checkout-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px]">Go to Checkout</button>
                                <div className="text-center">
                                    <p id="add-to-cart" className="mt-4 underline text-center text-sm font-medium text-light-purple cursor-pointer select-none">Add to Cart</p>
                                </div>
                            </div>
                        ) : null
                    }

                </div>
            </form>

        </div>
    );
};

export default CreateShipment;
