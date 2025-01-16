import React from 'react';
import { PhoneIcon, ClipboardIcon, DocumentIcon, WrenchIcon, CheckCircleIcon, CreditCardIcon } from '@heroicons/react/24/outline';


const steps = [
  {
    title: 'Свяжитесь с нами любым удобным способом',
    description: 'Вы можете позвонить, написать или заполнить форму на сайте.',
    icon: <PhoneIcon strokeWidth={2} className="h-32 w-32 p-7 rounded-full bg-white text-blue-500" />,
  },
  {
    title: 'Выезд замерщика',
    description: 'Наш специалист приедет к вам для проведения замеров.',
    icon: <ClipboardIcon strokeWidth={2} className="h-32 w-32 p-7 rounded-full bg-white text-green-500" />,
  },
  {
    title: 'На основании замеров заключаем договор',
    description: 'Мы подготовим договор, основываясь на ваших требованиях.',
    icon: <DocumentIcon strokeWidth={2} className="h-32 w-32 p-7 rounded-full bg-white text-yellow-500" />,
  },
  {
    title: 'Установка',
    description: 'Наши мастера произведут установку в согласованные сроки.',
    icon: <WrenchIcon strokeWidth={2} className="h-32 w-32 p-7 rounded-full bg-white text-orange-500" />,
  },
  {
    title: 'Приём работы',
    description: 'Вы проверяете выполненные работы и даёте свои комментарии.',
    icon: <CheckCircleIcon strokeWidth={2} className="h-32 w-32 p-7 rounded-full bg-white text-purple-500" />,
  },
  {
    title: 'Оплата',
    description: 'После завершения работ вы производите оплату.',
    icon: <CreditCardIcon strokeWidth={2} className="h-32 w-32 p-7 rounded-full bg-white text-red-500" />,
  },
]

const CollaborationSteps = () => {
  return (
    <section  className="container mx-auto p-6 text-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Этапы сотрудничества с нами</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center shadow-md  p-4 m-2 w-full">
            <div className="mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg text-center font-semibold mb-2">{step.title}</h3>
            <p className=" text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaborationSteps;
