import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form';


const SenderForm = () => {

    const { register, watch, formState: { errors }, setValue, clearErrors } = useFormContext();

    const [purpose, setPurpose] = useState(null);

    useEffect(() => {
        register("sender.purpose", {required: "Please pick a purpose"})
        setValue("sender.shippingForm", "Singapore");
        setValue("sender.countryCallCode", "+65");
    }, [register, setValue]);

    const handlePurpose = (purpose) => {
        setPurpose(purpose);
        setValue("sender.purpose", purpose);
        clearErrors('sender.purpose')
    }

    return (
        <div className="w-full">
            <div className="bg-white w-full md:rounded-xl ">
                <div className="w-[85%] md:w-[50%] mx-auto pt-6 pb-10 md:pt-8">
                    <div className="relative">
                        <div className='group'>
                            <div className="grid grid-cols-2">
                                <label htmlFor="senderFirstName" className="font-normal text-subheading-gray group-focus-within:text-dark-purple">Full Name</label>
                            </div>
                            <div className={`mt-1 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus  border-border-dark-gray shadow-border ${errors.sender?.firstName && 'border-rose-500'}`}>
                                <input type="text" id="senderFirstName" className="rounded-xl w-full h-full focus:outline-none pl-3" placeholder="Jane" {...register("sender.firstName", { required: 'Required' })} />
                                <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple" />
                                <input type="text" id="senderLastName" className="rounded-xl w-full h-full focus:outline-none pl-3" placeholder="Doe" {...register("sender.lastName")} />
                            </div>
                            {errors.sender?.firstName && <p className="min-h-[1rem] text-xs text-red-500 mt-0.5 ml-0.5 mb-5">Required</p>}
                        </div>
                        <p className="min-h-[1rem] text-xs text-subtext-gray mt-0.5 ml-0.5 mb-5">Person whom JustShip contacts for packing &amp; billing matters</p>
                    </div>
                    <div className="w-full flex flex-col group">
                        <label htmlFor="senderEmail" className="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">Sender's Email</label>
                        <div id="senderEmailcontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border">
                            <div className="relative flex items-center h-full z-[2] w-full">
                                <input className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxLength="80" id="senderEmail" type="email" {...register("sender.email")} />
                            </div>
                            <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[18px] inline-block absolute right-0 mr-2 w-[18px] group-focus-within:invisible stroke-dark-purple z-[2]">
                                <circle r="10" transform="matrix(1 0 0 -1 11 11)" strokeWidth="2"></circle>
                                <path d="M6 11.9375L9.04348 15L16 8" strokeWidth="2" strokeLinecap="round">
                                </path>
                            </svg>
                            <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                        </div>
                    </div>
                    <div className='group'>
                        <label htmlFor="shipping-from" className="font-normal text-subheading-gray ">Shipping From</label>
                        <input type="text" id="shipping-from" disabled className="mt-1 mb-6 relative rounded-xl border border-border-dark-gray flex group w-full h-10 pl-3 disabled:bg-gray-200 disabled:text-gray-500" value="Singapore" />
                    </div>
                    <div className="group">
                        <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" htmlFor="senderMobileNo">Sender's Mobile</label>
                        <div className={`flex h-10 mt-1 mb-6 relative rounded-xl border focus-within:border-light-purple focus-within:shadow-border-focus border-error-red shadow-border-error  ${errors.sender?.mobile && 'border-rose-500'}`}>
                            <div className="relative text-gray-4 text-sm">
                                <label htmlFor="country-call-code" hidden> country calling code</label>
                                <select id="country-call-code" name="country-call-code" className="absolute w-full h-full opacity-0 disabled:bg-gray-2 cursor-pointer" tabIndex="-1" {...register("sender.countryCallCode")}>
                                    <option value="" disabled></option>
                                    <option value="+93">Afghanistan +93</option>
                                    <option value="+355">Albania +355</option>
                                    <option value="+213">Algeria +213</option>
                                    <option value="+1684">American Samoa +1684</option>
                                    <option value="+376">Andorra +376</option>
                                    <option value="+244">Angola +244</option>
                                    <option value="+1264">Anguilla +1264</option>
                                    <option value="+1268">Antigua &amp; Barbuda +1268</option>
                                    <option value="+54">Argentina +54</option>
                                    <option value="+374">Armenia +374</option>
                                    <option value="+297">Aruba +297</option>
                                    <option value="+61">Australia +61</option>
                                    <option value="+43">Austria +43</option>
                                    <option value="+994">Azerbaijan +994</option>
                                    <option value="+1242">Bahamas +1242</option>
                                    <option value="+973">Bahrain +973</option>
                                    <option value="+880">Bangladesh +880</option>
                                    <option value="+1246">Barbados +1246</option>
                                    <option value="+375">Belarus +375</option>
                                    <option value="+32">Belgium +32</option>
                                    <option value="+501">Belize +501</option>
                                    <option value="+229">Benin +229</option>
                                    <option value="+1441">Bermuda +1441</option>
                                    <option value="+975">Bhutan +975</option>
                                    <option value="+591">Bolivia +591</option>
                                    <option value="+5997">Bonaire +5997</option>
                                    <option value="+387">Bosnia and Herzegovina +387</option>
                                    <option value="+267">Botswana +267</option>
                                    <option value="+55">Brazil +55</option>
                                    <option value="+673">Brunei +673</option>
                                    <option value="+359">Bulgaria +359</option>
                                    <option value="+226">Burkina Faso +226</option>
                                    <option value="+257">Burundi +257</option>
                                    <option value="+855">Cambodia +855</option>
                                    <option value="+237">Cameroon +237</option>
                                    <option value="+1">Canada +1</option>
                                    <option value="+238">Cape Verde +238</option>
                                    <option value="+1345">Cayman Islands +1345</option>
                                    <option value="+235">Chad +235</option>
                                    <option value="+56">Chile +56</option>
                                    <option value="+86">China +86</option>
                                    <option value="+57">Colombia +57</option>
                                    <option value="+242">Congo +242</option>
                                    <option value="+682">Cook Islands +682</option>
                                    <option value="+506">Costa Rica +506</option>
                                    <option value="+385">Croatia +385</option>
                                    <option value="+5999">Curacao +5999</option>
                                    <option value="+357">Cyprus +357</option>
                                    <option value="+420">Czech Republic +420</option>
                                    <option value="+243">Democratic Republic of the Congo +243</option>
                                    <option value="+45">Denmark +45</option>
                                    <option value="+253">Djibouti +253</option>
                                    <option value="+1767">Dominica +1767</option>
                                    <option value="+1849">Dominican Republic +1849</option>
                                    <option value="+670">East Timor +670</option>
                                    <option value="+593">Ecuador +593</option>
                                    <option value="+20">Egypt +20</option>
                                    <option value="+503">El Salvador +503</option>
                                    <option value="+291">Eritrea +291</option>
                                    <option value="+372">Estonia +372</option>
                                    <option value="+268">Eswatini +268</option>
                                    <option value="+251">Ethiopia +251</option>
                                    <option value="+298">Faroe Islands +298</option>
                                    <option value="+679">Fiji +679</option>
                                    <option value="+358">Finland +358</option>
                                    <option value="+33">France +33</option>
                                    <option value="+594">French Guiana +594</option>
                                    <option value="+689">French Polynesia +689</option>
                                    <option value="+241">Gabon +241</option>
                                    <option value="+220">Gambia +220</option>
                                    <option value="+995">Georgia +995</option>
                                    <option value="+49">Germany +49</option>
                                    <option value="+233">Ghana +233</option>
                                    <option value="+350">Gibraltar +350</option>
                                    <option value="+30">Greece +30</option>
                                    <option value="+299">Greenland +299</option>
                                    <option value="+1473">Grenada +1473</option>
                                    <option value="+590">Guadeloupe +590</option>
                                    <option value="+1671">Guam +1671</option>
                                    <option value="+502">Guatemala +502</option>
                                    <option value="+224">Guinea +224</option>
                                    <option value="+592">Guyana +592</option>
                                    <option value="+509">Haiti +509</option>
                                    <option value="+504">Honduras +504</option>
                                    <option value="+852">Hong Kong +852</option>
                                    <option value="+36">Hungary +36</option>
                                    <option value="+354">Iceland +354</option>
                                    <option value="+91">India +91</option>
                                    <option value="+62">Indonesia +62</option>
                                    <option value="+964">Iraq +964</option>
                                    <option value="+353">Ireland +353</option>
                                    <option value="+972">Israel +972</option>
                                    <option value="+39">Italy +39</option>
                                    <option value="+225">Ivory Coast / Cote d'Ivoire +225</option>
                                    <option value="+1876">Jamaica +1876</option>
                                    <option value="+81">Japan +81</option>
                                    <option value="+962">Jordan +962</option>
                                    <option value="+77">Kazakhstan +77</option>
                                    <option value="+254">Kenya +254</option>
                                    <option value="+965">Kuwait +965</option>
                                    <option value="+996">Kyrgyzstan +996</option>
                                    <option value="+856">Laos +856</option>
                                    <option value="+371">Latvia +371</option>
                                    <option value="+961">Lebanon +961</option>
                                    <option value="+266">Lesotho +266</option>
                                    <option value="+231">Liberia +231</option>
                                    <option value="+218">Libya +218</option>
                                    <option value="+423">Liechtenstein +423</option>
                                    <option value="+370">Lithuania +370</option>
                                    <option value="+352">Luxembourg +352</option>
                                    <option value="+853">Macau +853</option>
                                    <option value="+389">Macedonia +389</option>
                                    <option value="+261">Madagascar +261</option>
                                    <option value="+265">Malawi +265</option>
                                    <option value="+60">Malaysia +60</option>
                                    <option value="+960">Maldives +960</option>
                                    <option value="+223">Mali +223</option>
                                    <option value="+356">Malta +356</option>
                                    <option value="+692">Marshall Islands +692</option>
                                    <option value="+596">Martinique +596</option>
                                    <option value="+222">Mauritania +222</option>
                                    <option value="+230">Mauritius +230</option>
                                    <option value="+52">Mexico +52</option>
                                    <option value="+691">Micronesia +691</option>
                                    <option value="+373">Moldova +373</option>
                                    <option value="+377">Monaco +377</option>
                                    <option value="+976">Mongolia +976</option>
                                    <option value="+382">Montenegro +382</option>
                                    <option value="+1664">Montserrat +1664</option>
                                    <option value="+212">Morocco +212</option>
                                    <option value="+258">Mozambique +258</option>
                                    <option value="+264">Namibia +264</option>
                                    <option value="+977">Nepal +977</option>
                                    <option value="+31">Netherlands +31</option>
                                    <option value="+599">Netherlands Antilles +599</option>
                                    <option value="+687">New Caledonia +687</option>
                                    <option value="+64">New Zealand +64</option>
                                    <option value="+505">Nicaragua +505</option>
                                    <option value="+227">Niger +227</option>
                                    <option value="+234">Nigeria +234</option>
                                    <option value="+1670">Northern Mariana Islands +1670</option>
                                    <option value="+47">Norway +47</option>
                                    <option value="+968">Oman +968</option>
                                    <option value="+92">Pakistan +92</option>
                                    <option value="+680">Palau +680</option>
                                    <option value="+970">Palestine +970</option>
                                    <option value="+507">Panama +507</option>
                                    <option value="+675">Papua New Guinea +675</option>
                                    <option value="+595">Paraguay +595</option>
                                    <option value="+51">Peru +51</option>
                                    <option value="+63">Philippines +63</option>
                                    <option value="+48">Poland +48</option>
                                    <option value="+351">Portugal +351</option>
                                    <option value="+974">Qatar +974</option>
                                    <option value="+40">Romania +40</option>
                                    <option value="+7">Russia +7</option>
                                    <option value="+250">Rwanda +250</option>
                                    <option value="+1869">Saint Kitts and Nevis +1869</option>
                                    <option value="+1758">Saint Lucia +1758</option>
                                    <option value="+1721">Saint Maarten +1721</option>
                                    <option value="+590">Saint Martin +590</option>
                                    <option value="+1784">Saint Vincent and the Grenadines +1784</option>
                                    <option value="+685">Samoa +685</option>
                                    <option value="+966">Saudi Arabia +966</option>
                                    <option value="+221">Senegal +221</option>
                                    <option value="+381">Serbia +381</option>
                                    <option value="+248">Seychelles +248</option>
                                    <option value="+65">Singapore +65</option>
                                    <option value="+421">Slovakia +421</option>
                                    <option value="+386">Slovenia +386</option>
                                    <option value="+27">South Africa +27</option>
                                    <option value="+82">South Korea +82</option>
                                    <option value="+34">Spain +34</option>
                                    <option value="+94">Sri Lanka +94</option>
                                    <option value="+597">Suriname +597</option>
                                    <option value="+46">Sweden +46</option>
                                    <option value="+41">Switzerland +41</option>
                                    <option value="+963">Syrian Arab Republic +963</option>
                                    <option value="+886">Taiwan +886</option>
                                    <option value="+255">Tanzania, United Republic of Tanzania +255</option>
                                    <option value="+66">Thailand +66</option>
                                    <option value="+228">Togo +228</option>
                                    <option value="+676">Tonga +676</option>
                                    <option value="+1868">Trinidad and Tobago +1868</option>
                                    <option value="+216">Tunisia +216</option>
                                    <option value="+90">Turkey +90</option>
                                    <option value="+1649">Turks and Caicos Islands +1649</option>
                                    <option value="+256">Uganda +256</option>
                                    <option value="+380">Ukraine +380</option>
                                    <option value="+971">United Arab Emirates +971</option>
                                    <option value="+44">United Kingdom +44</option>
                                    <option value="+1">United States +1</option>
                                    <option value="+598">Uruguay +598</option>
                                    <option value="+998">Uzbekistan +998</option>
                                    <option value="+678">Vanuatu +678</option>
                                    <option value="+58">Venezuela +58</option>
                                    <option value="+84">Vietnam +84</option>
                                    <option value="+1284">Virgin Islands, British +1284</option>
                                    <option value="+1340">Virgin Islands, U.S. +1340</option>
                                    <option value="+681">Wallis and Futuna +681</option>
                                    <option value="+967">Yemen +967</option>
                                    <option value="+260">Zambia +260</option>
                                    <option value="+263">Zimbabwe +263</option>
                                </select>
                                <div className="h-full flex items-center min-w-[40px] px-3 justify-center" aria-hidden="true">
                                    {
                                        watch("sender.countryCallCode")
                                    }
                                </div>
                            </div>
                            <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple" />
                            <input type="tel" id="senderMobileNo" className="block w-full pl-3 pr-10 py-2.5 text-gray-4  disabled:bg-gray-2 text-sm rounded-xl focus:outline-none"
                                {...register("sender.mobile", { required: "Required", minLength: 8, maxLength: 8 })} />
                            {errors.sender?.mobile && <p className="min-h-[1rem] text-xs text-error-red absolute top-10 text-red-500 mt-0.5 ml-0.5 mb-5">Mobile number must be 8 digits</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 bg-white flex flex-col text-center w-full md:rounded-xl">
                <div className="flex flex-col bg-white md:rounded-xl py-6">
                    <p className="text-dark-purple font-semibold text-xl spacing-xs">What's your purpose<br className="md:hidden" /> of shipping?</p>
                    {errors.sender?.purpose && <p className="text-rose-500">{errors.sender.purpose?.message}</p>}
                    <p className="text-error-red mt-2 mb-4 h-4"></p>
                    <div className="w-[85%] md:w-full md:px-8 mx-auto">
                        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-x-6 place-items-center">
                            <button type="button" id="SOLD" className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${purpose === "Commercial B2B items" && 'bg-light-purple text-white'}`} onClick={() => handlePurpose("Commercial B2B items")}>
                                <p className="">Commercial</p>
                                <p className="">B2B items</p>
                            </button>
                            <button type="button" id="GIFT" className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${purpose === "Gift" && 'bg-light-purple text-white'}`} onClick={() => handlePurpose("Gift")}>
                                <p className="">Gift</p>
                            </button>
                            <button type="button" id="SAMPLE" className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${purpose === "Samples for a prospect" && 'bg-light-purple text-white'}`} onClick={() => handlePurpose("Samples for a prospect")}>
                                <p className="">Samples</p>
                                <p className="">for a prospect</p>
                            </button>
                            <button type="button" id="REPAIR_AND_RETURN" className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${purpose === "Defective items for repair &amp; return" && 'bg-light-purple text-white'}`} onClick={() => handlePurpose("Defective items for repair &amp; return")}>
                                <p className="">Defective items</p>
                                <p className="">for repair &amp; return</p>
                            </button>
                            <button type="button" id="NOT_SOLD" className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${purpose === "New goods for individual's use" && 'bg-light-purple text-white'}`} onClick={() => handlePurpose("New goods for individual's use")}>
                                <p className="">New goods</p>
                                <p className="">for individual's use</p>
                            </button>
                            <button type="button" id="PERSONAL_EFFECTS" className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${purpose === "Used Belongings" && 'bg-light-purple text-white'}`} onClick={() => handlePurpose("Used Belongings")}>
                                <p className="">Used Belongings</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SenderForm