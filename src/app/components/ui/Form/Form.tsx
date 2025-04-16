'use client'
import { useForm } from "react-hook-form";
import {Dispatch, SetStateAction, useState} from "react";
import Image from "next/image";
import {PacmanLoader} from "react-spinners";
const Form = ({setShowModal, setError}: {setShowModal: Dispatch<SetStateAction<boolean>>, setError: Dispatch<SetStateAction<boolean>> }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields  },
        watch,
        reset,
        trigger
    } = useForm({ mode: 'onChange' });
    const onSubmit = async (data: any) => {
        const bodyElement = document.querySelector("body");
        setIsPending(true);
        reset();
        const dataToSend = {
            partner_user: {
                full_name: data.full_name,
                company_name: data.company_name,
                phone: data.phone,
                email: data.email,
                address: data.address,
                password: data.password,
                password_confirmation: data.password_confirmation,
                terms_accepted: data.terms_accepted
            }
        }
        const result = await fetch(`https://dashboard.dreamplayaffiliates.com/api/client/partner`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dataToSend),
        })

        if (result.status > 200 && result.status < 300) {
            setIsPending(false);
            setShowModal(true);
            //@ts-ignore
            bodyElement.style.overflow = "hidden";
        }
        else {
            setError(true)
            setShowModal(true)
            setIsPending(false);
        }
    };

    const password = watch('password');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-col gap-6 bg-[#12110E] border border-solid border-[#24221C] p-4 rounded-[16px] m:w-[50%]">
            <div className="input-wrapper">
                <label htmlFor="full_name">Full Name *</label>
                <input

                    id="full_name"
                    type="text"
                    placeholder="Enter Name"
                    className={`${touchedFields.full_name ? (errors.full_name ? 'invalid' : 'valid') : ''} mb-2`}
                    {...register('full_name', { required: 'Name is required', onBlur: async () => await trigger('full_name') })}
                />
                {
                    //@ts-ignore
                    errors.full_name && <span className="error text-[#f44]">{errors.full_name.message}</span>
                }
            </div>

            <div className="input-wrapper">
                <label htmlFor="company_name">Company Name *</label>
                <input
                    id="company_name"
                    type="text"
                    placeholder="Enter Company Name"
                    className={`${touchedFields.company_name ? (errors.company_name ? 'invalid' : 'valid') : ''} mb-2`}
                    {...register('company_name', { required: 'Company name is required', onBlur: async () => await trigger('company_name') })}
                />
                {
                    //@ts-ignore
                    errors.company_name && <span className="error text-[#f44]">{errors.company_name.message}</span>
                }
            </div>

            <div className="input-wrapper">
                <label htmlFor="phone">Phone *</label>
                <input
                    id="phone"
                    type="text"
                    placeholder="Enter Phone"
                    className={`${touchedFields.phone ? (errors.phone ? 'invalid' : 'valid') : ''} mb-2`}
                    {...register('phone', { required: 'Phone is required', pattern: {
                        value: /^\d+$/, message: 'Invalid phone number'
                        }, onBlur: async () => await trigger('phone') })}
                />
                {
                    //@ts-ignore
                    errors.phone && <span className="error text-[#f44]">{errors.phone.message}</span>
                }
            </div>

            <div className="input-wrapper">
                <label htmlFor="email">Email *</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    className={`${touchedFields.email ? (errors.email ? 'invalid' : 'valid') : ''} mb-2`}
                    {...register('email', { required: 'Email is required',pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email address',
                        }, onBlur: async () => await trigger('email') })}
                />
                {
                    //@ts-ignore
                    errors.email && <span className="error text-[#f44]">{errors.email.message}</span>
                }
            </div>

            <div className="input-wrapper">
                <label htmlFor="address">Messenger *</label>
                <input
                    id="address"
                    type="text"
                    placeholder="Enter Messenger"
                    className={`${touchedFields.address ? (errors.address ? 'invalid' : 'valid') : ''} mb-2`}
                    {...register('address', { required: 'Messenger is required', onBlur: async () => await trigger('address') })}
                />
                {
                    //@ts-ignore
                    errors.address && <span className="error text-[#f44]">{errors.address.message}</span>
                }
            </div>

            <div className="input-wrapper relative">
                <label htmlFor="password">Password *</label>
                <input
                    id="password"
                    type={`${showPassword ? 'text' : 'password'}`}
                    placeholder="Enter password"
                    className={`${touchedFields.password ? (errors.password ? 'invalid' : 'valid') : ''} mb-2`}
                    {...register('password', { required: 'password is required',minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters'
                        }, onBlur: async () => await trigger('password') })}
                />
                <Image src={`${showPassword ? '/icons/closeEye.svg' : '/icons/eye.svg'}`} width={20} height={20} alt={`icon`} className="absolute top-[30px] right-[35px] " onClick={() => setShowPassword(!showPassword)} />
                <Image src={`${errors.password ? '/icons/invalid.svg' : '/icons/valid.svg'}`} width={16} height={12} alt={`icon`} className={`absolute top-[30px] right-2`} />
                {
                    //@ts-ignore
                    errors.password && <span className="error text-[#f44]">{errors.password.message}</span>
                }
            </div>

            <div className="input-wrapper relative">
                <label htmlFor="password_confirmation">Confirm Password *</label>
                <input
                    id="password_confirmation"
                    type={`${showPassword ? 'text' : 'password'}`}
                    placeholder="Enter password"
                    className={`${touchedFields.password_confirmation ? (errors.password_confirmation ? 'invalid' : 'valid') : ''} mb-2`}
                    {...register('password_confirmation', { required: 'Password is required',
                        validate: (value) => value === password || 'Passwords do not match',
                        onBlur: async () => await trigger('password_confirmation')

                    })}
                />
                <Image src={`${showPassword ? '/icons/closeEye.svg' : '/icons/eye.svg'}`} width={20} height={20} alt={`icon`} className="absolute top-[30px] right-[35px] " onClick={() => setShowPassword(!showPassword)} />
                <Image src={`${errors.password_confirmation ? '/icons/invalid.svg' : '/icons/valid.svg'}`} width={16} height={12} alt={`icon`} className={`absolute top-[30px] right-2`} />
                {
                    //@ts-ignore
                    errors.password_confirmation && <span className="error text-[#f44]">{errors.password_confirmation.message}</span>
                }
            </div>

            <div>
                <label className="custom-checkbox">
                    <input type="checkbox" {...register('terms_accepted', { required: 'Terms accept is required' })} />
                    <span className="checkmark"></span>
                    I have read and accept the Terms and Conditions
                </label>
                {
                    //@ts-ignore
                    errors.terms_accepted && <span className="error text-[#f44]">{errors.terms_accepted.message}</span>
                }
            </div>
            <button type="submit" className={`text-white max-w-[261px] flex gap-5 items-center justify-between pl-4 rounded-[100px] ml-auto ${isPending && 'pr-20'}`}>
                <PacmanLoader loading={isPending} color="#EFC653" />
                {!isPending
                && <><span className={`text-[#EFC653]`}>Register</span><span className={`p-[28px] bg-[#EFC653] rounded-[50%] `}><Image src={`/images/arrow.png`} alt={'arrow'} width={15} height={15} /></span></>
                }
            </button>
        </form>
    );
};

export default Form;
