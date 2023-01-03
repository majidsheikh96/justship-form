import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        sender: {
            first_name: "", last_name: "", email: "", shipping_from: "", country_call_code: "+65", mobile: "", purpose: ""
        },
        recipient: {
            name: "", email: "", country: "", mobile: "", address: "", postal_code: "", city: "", state: ""
        },
        packages: [
            {
                packing: "No Need Packing",
                box: {
                    size: "Own Box", length: "", width: "", height: "", weight: 0,
                    items: [
                        {
                            quantity: "", description: "", category: "", value: "", weight: ""
                        }
                    ]
                },
                items_total_value: 0
            }
        ],
        addons: {
            insurance: { insured: false, value: 0 },
            taxes_and_duties: { payer: "receiver", value: 0 }
        },
        total_cost: 0
    },
    reducers: {
        setForm: (state, action) => {
            state = action.payload;
        },
        updateInsurance: (state, action) => {
            state.addons.insurance = action.payload
        },
        updateTaxAndDuties: (state, action) => {
            state.addons.taxes_and_duties = action.payload
        },
        updateTotalCost: (state, action) => {
            state.total_cost = action.payload
        }
    }
});

export const { setForm, updateInsurance, updateTaxAndDuties, updateTotalCost } = formSlice.actions;

export default formSlice;
