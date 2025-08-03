"use client"
import { authSchema } from "@/app/validationSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import ErrorMessage from "@/app/components/ErrorMessage"
import axios from "axios";

type AuthData = z.infer<typeof authSchema>


const Form = () => {
    const [ error, setError ] = useState( '' )
    const [ isSubmitting, setIsSubmitting ] = useState( false )

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AuthData>( {
        resolver: zodResolver( authSchema )
    } )

    // const onSubmit = handleSubmit( async ( { email, name, message, phone } ) => {
    //     try {
    //         console.log( email, name, message, phone )

    //     }catch (error) {
    //         if (axios.isAxiosError(error)) {
    //             console.error('Axios Error:', error.response?.data || error.message);
    //             setError(error.response?.data?.message || 'Something went wrong');
    //         } else {
    //             console.error('Unexpected Error:', error);
    //             setError('An unexpected error occurred');
    //         }
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // } )

    const onSubmit = handleSubmit( async ( formData ) => {
        try {
            setIsSubmitting( true );
            setError( '' );

            await axios.post( '/api/contact', formData );

            alert( 'تم إرسال رسالتك بنجاح! شكراً لتواصلك.' );

        } catch ( error ) {
            if ( axios.isAxiosError( error ) ) {
                setError( error.response?.data?.message || 'حدث خطأ ما أثناء الإرسال' );
            } else {
                setError( 'حدث خطأ غير متوقع أثناء الإرسال' );
            }
        } finally {
            setIsSubmitting( false );
        }
    } );

    return (

        <form onSubmit={ onSubmit } className="space-y-2 xl:space-y-5 flex flex-col items-end w-full">
            <div className="w-full flex justify-between items-center flex-col lg:flex-row space-y-2">
                <div className="w-full lg:w-[48%]" >
                    <input
                        type="text"
                        placeholder="الاسم"
                        { ...register( 'name' ) }
                        className="text-secondary w-full py-4 px-4 lg:px-2 lg:py-2 xl:px-4 xl:py-4 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
                        aria-label="الاسم"
                    />
                    { errors.name && <ErrorMessage>{ errors.name.message }</ErrorMessage> }
                </div>
                <div className="w-full lg:w-[48%]">
                    <input
                        type="text"
                        placeholder="رقم الهاتف"
                        { ...register( 'phone', { required: 'يرجى كتابة رقم الهاتف' } ) }
                        className="text-secondary w-full py-4 px-4 lg:px-2 lg:py-2 xl:px-4 xl:py-4 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
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
                    className="text-secondary w-full py-4 px-4 lg:px-2 lg:py-2 xl:px-4 xl:py-4 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
                    aria-label="Email"
                />
                { errors.email && <ErrorMessage>{ errors.email.message }</ErrorMessage> }
            </div>

            <div className="w-full">
                <input
                    type="text"
                    placeholder="محتوى الرسالة"
                    { ...register( 'message', { required: 'يرجى كتابة الرسالة' } ) }
                    className="text-secondary w-full h-[15vh] py-4 px-4 lg:px-2 lg:py-2 xl:px-4 xl:py-4 border rounded-md focus:outline-none focus:ring-4 focus:ring-active mb-2"
                    aria-label="محتوى الرسالة"
                />
                { errors.message && <ErrorMessage>{ errors.message.message }</ErrorMessage> }

            </div>

            <button
                type="submit"
                disabled={ isSubmitting }
                className="
                    w-full lg:w-[40%] py-4 bg-active hover:bg-primary  text-primary hover:text-secondary 
                    hover:text-secondaryt font-bold rounded-md transition-colors duration-300 disabled:opacity-50
                "
            >
                إرســــــــال
            </button>
            { error && <ErrorMessage>{ error }</ErrorMessage> }

        </form>
    );
};

export default Form;
