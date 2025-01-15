import React from 'react';
import { PhoneIcon, ClipboardIcon, DocumentIcon, WrenchIcon, CheckCircleIcon, CreditCardIcon } from '@heroicons/react/24/outline';


const steps = [
  {
    title: 'Свяжитесь с нами любым удобным способом',
    description: 'Вы можете позвонить, написать или заполнить форму на сайте.',
    icon: <PhoneIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    title: 'Выезд замерщика',
    description: 'Наш специалист приедет к вам для проведения замеров.',
    icon: <ClipboardIcon className="h-6 w-6 text-green-500" />,
  },
  {
    title: 'На основании замеров заключаем договор',
    description: 'Мы подготовим договор, основываясь на ваших требованиях.',
    icon: <DocumentIcon className="h-6 w-6 text-yellow-500" />,
  },
  {
    title: 'Установка',
    description: 'Наши мастера произведут установку в согласованные сроки.',
    icon: <WrenchIcon className="h-6 w-6 text-orange-500" />,
  },
  {
    title: 'Приём работы',
    description: 'Вы проверяете выполненные работы и даёте свои комментарии.',
    icon: <CheckCircleIcon className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'Оплата',
    description: 'После завершения работ вы производите оплату.',
    icon: <CreditCardIcon className="h-6 w-6 text-red-500" />,
  },
]

const CollaborationSteps = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Этапы сотрудничества с нами</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-full md:w-1/3">
            <div className="mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationSteps;
