"use client"
import { authSchema } from "@/app/validationSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import Link from "next/link";
import ErrorMessage from "@/app/components/ErrorMessage"

type AuthData = z.infer<typeof authSchema>


const Form = () => {
    const [ error, setError ] = useState( '' )
    const [ mouseOver, setMouseOver ] = useState( false )
    const [ isSubmitting, setIsSubmitting ] = useState( false )
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AuthData>( {
        resolver: zodResolver( authSchema )
    } )

    const onSubmit = handleSubmit( async ( { email, name, message, phone } ) => {
        try {
            console.log( email, name, message, phone )

        } catch ( error ) {
            setIsSubmitting( false );
            setError( "Something Wrong happened" );
        }
    } )

    return (

        <form onSubmit={ onSubmit } className="space-y-5 flex flex-col items-end w-full">
            <div className="w-full flex justify-between items-center">
                <div className="w-[48%]" >
                    <input
                        type="text"
                        placeholder="الاسم"
                        { ...register( 'name', { required: 'يرجى كتابة الاسم' } ) }
                        className="text-secondary w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
                        aria-label="الاسم"
                    />
                    { errors.name && <ErrorMessage>{ errors.name.message }</ErrorMessage> }
                </div>
                <div className="w-[48%]">
                    <input
                        type="text"
                        placeholder="رقم الهاتف"
                        { ...register( 'phone', { required: 'يرجى كتابة رقم الهاتف' } ) }
                        className="text-secondary w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
                        aria-label="رقم الهاتف"
                    />
                    { errors.phone && <ErrorMessage>{ errors.phone.message }</ErrorMessage> }
                </div>

            </div>

            <div className="w-full">
                <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    { ...register( 'email', { required: 'Email is required' } ) }
                    className="text-secondary w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
                    aria-label="Email"
                />
                { errors.email && <ErrorMessage>{ errors.email.message }</ErrorMessage> }
            </div>

            <div className="w-full">
                <input
                    type="text"
                    placeholder="محتوى الرسالة"
                    { ...register( 'message', { required: 'يرجى كتابة الرسالة' } ) }
                    className="text-secondary w-full h-[15vh] px-4 py-2 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
                    aria-label="محتوى الرسالة"
                />
                { errors.message && <ErrorMessage>{ errors.message.message }</ErrorMessage> }

            </div>

            <button
                type="submit"
                disabled={ isSubmitting }
                className="w-[40%] py-4 bg-active hover:bg-primary  text-primary hover:text-secondary font-bold rounded-md transition-colors duration-300 disabled:opacity-50"
            >
                إرســــــــال
            </button>

        </form>
    );
};

export default Form;
