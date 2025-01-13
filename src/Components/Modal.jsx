import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Modal = ({ onClose }) => {
    const { register, control, handleSubmit, formState: { errors }, trigger, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4 text-center">Связаться с нами</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Имя</label>
                        <input
                            type="text"
                            {...register('name', {
                                required: true,
                                minLength: 3,
                                maxLength: 30,
                                pattern: /^[A-Za-zА-Яа-яЁё\s]+$/i
                            })}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            onBlur={() => trigger('name')}
                        />
                        {errors.name && errors.name.type === "required" && <span className="text-red-500">Имя обязательно для заполнения</span>}
                        {errors.name && errors.name.type === "minLength" && <span className="text-red-500">Имя должно содержать не менее 3 символов</span>}
                        {errors.name && errors.name.type === "maxLength" && <span className="text-red-500">Имя должно содержать не более 30 символов</span>}
                        {errors.name && errors.name.type === "pattern" && <span className="text-red-500">Имя не должно содержать цифры</span>}
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Телефон</label>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, pattern: /^\+?[1-9]\d{1,14}$/ }}
                            render={({ field }) => (
                                <PhoneInput
                                    country={'ru'}
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={() => trigger('phone')}
                                    containerStyle={{ width: '100%' }}
                                    inputStyle={{ width: '100%' }}
                                    inputProps={{ name: 'phone' }}
                                />
                            )}
                        />
                        {errors.phone && <span className="text-red-500">Телефон должен быть в международном формате</span>}
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
