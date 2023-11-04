import Header from "../components/Header";
import React, {useState} from "react";
import axios from "axios";
import PageLayout from "@/containers/layout/PageLayout";
import Loader from "@/components/loader/Loader";
import {toast} from "react-toastify";
import {API_BASE_URL} from "@/constants";
import {useRouter} from "next/router";
import {json} from "stream/consumers";

type Props = {};

const Register = ({}: Props) => {
    const [email, setEmail] = useState("");
    const [last_name, setLastName] = useState<string>("");
    const [first_name, setFirstName] = useState<string>("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const [passwordError, setPasswordError] = useState<string>(''); // State for password error
    const [usageHistoryConsent, setUsageHistoryConsent] = useState(true); // Add usage history consent state
    const apiUrl = 'http://51.158.96.160:8000/api/registration/signup';

    const isPasswordValid = (password: string) => {
        // Check if the password meets the criteria (e.g., at least 10 characters with a combination of letters and numbers)
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e: any) => {
        setLoading(true);
        e.preventDefault();

        const userData = {first_name, last_name, email};
        localStorage.setItem("userData", JSON.stringify(userData));
        // Validate the password
        if (!isPasswordValid(password)) {
            setLoading(false);
            toast.error('Password must be at least 10 characters with a combination of letters and numbers.');
            setPasswordError('Password must be at least 10 characters with a combination of letters and numbers.');
            return; // Prevent further processing
        }

        try {
            const response = await axios.post(`${API_BASE_URL}registration/signup/`, {
                email,
                password,
                last_name,
                first_name,
                "has_consented_to_data_share": true,
                "has_consented_to_usage_history": true
            });

            if (response) {
                setLoading(false);
            }
            // Handle success
            toast.success(response.data.message);
            router.push("/verify");
            console.log("Registration successful:", response.data);
        } catch (error) {
            setLoading(false);
            // Handle error
            console.error('Registration failed:', error);
            //@ts-ignore
            toast.error(error?.message);
        }
    };

    return (
        <PageLayout>
            <Header/>
            <section className="flex items-center h-screen w-full overflow-y-hidden sm:py-2">
                <div className="container py-5 px-2">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-1 mx-5 sm:m-0 mt-0 sm:transition-none opacity-100 transition-all ease-in duration-500"
                        id="formDiv"
                    >
                        <div className="flex flex-col justify-center hidden sm:inline-block">
                            <img
                                src="/illustration.png"
                                className="w-30 h-30"
                                alt="Phone image"
                            />
                        </div>
                        <div className="sm:w-full bg-white shadow-xl rounded-3xl p-5 md:w-9/12">
                            <div className="flex items-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                                <div className="py-3 w-full">
                                    <h4 className="mb-4 text-lg text-center sm:text-3xl font-semibold ">
                                        SIGN UP
                                    </h4>
                                    <p className="text-xs sm:text-sm mb-2 text-center">
                                        Please Register to access customized search experience
                                    </p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="relative mb-4" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                                        id="firstName"
                                        placeholder="First Name"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />

                                </div>

                                <div className="relative mb-4" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear "
                                        id="firstName"
                                        placeholder="Last Name"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />

                                </div>
                                <div className="relative mb-4" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear "
                                        id="exampleFormControlInput3"
                                        placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div>

                                <div className="relative mb-4" data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear "
                                        id="exampleFormControlInput33"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </div>

                                <div className="mb-4 flex items-center justify-between flex-wrap">

                                    {/* Add the usage history consent checkbox */}
                                    <div className="mb-4 flex items-center">
                                        <input
                                            type="checkbox"
                                            id="usageHistoryConsent"
                                            checked={usageHistoryConsent}
                                            onChange={() => setUsageHistoryConsent(!usageHistoryConsent)}
                                            className="h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"

                                        />
                                        <label htmlFor="usageHistoryConsent" className="inline-block pl-[0.15rem] hover:cursor-pointer text-sm sm:text-lg">
                                            I consent to usage history.
                                        </label>
                                    </div>

                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                            type="checkbox"
                                            value=""
                                            id="TermsAgreementCheckBox"
                                            required
                                        />

                                        <label
                                            className="inline-block pl-[0.15rem] hover:cursor-pointer text-sm sm:text-lg"
                                            htmlFor="agreeCheckbox">
                                            I agree to the <a href="#termsPrivacyModal" data-toggle="modal">Terms &
                                            Privacy Policy</a>
                                        </label>

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="justify-center flex inline-block bg-primary w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    {loading ? <Loader/> : "Register"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Register;
