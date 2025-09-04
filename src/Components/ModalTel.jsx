import React from 'react';

const ModalTel = ({ onClose }) => {
    const phoneNumber = '+79099348209';
    const displayNumber = '+7 909 934-82-09';

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6 relative flex flex-col items-center">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-6 text-center">Связаться с нами</h2>
                <a
                    href={`tel:${phoneNumber}`}
                    className="text-[#193229] text-3xl font-bold mb-6 hover:text-emerald-800 hover:scale-105"
                >
                    {displayNumber}
                </a>
                <button
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                    className="px-6 py-2 bg-[#193229] text-white rounded hover:bg-emerald-800 hover:scale-105"
                >
                    Позвонить
                </button>
            </div>
        </div>
    );
};

export default ModalTel;
