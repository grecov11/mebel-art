import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {logo2, logo_bottom} from '../assets';
import { navigation } from "../constants/index.js";
import Modal from './Modal';

const setActive = ({ isActive }) => isActive ? 'active-link' : 'nav-link';
const setActiveMobile = ({ isActive }) => isActive ? 'active-mobile' : 'nav-mobile';
const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [catalogOpen, setCatalogOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
        setCatalogOpen(false);
    };

    const toggleCatalog = () => {
        setCatalogOpen(!catalogOpen);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#193229]/80">
                <div className="mx-auto max-w-7xl px-1 md:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className={classNames("block h-6 w-6", { hidden: isOpen })} />
                                <XMarkIcon aria-hidden="true" className={classNames("hidden h-6 w-6", { block: isOpen })} />
                            </button>
                            <span className="hidden md:block text-xl text-gray-100 px-5">Меню</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center">
                            {/* logo */}
                            <Link to="/" className="hidden md:block flex flex-shrink-0 items-center">
                                <img
                                    alt="Арт Груп - мебель по индивидуальному заказу"
                                    src={logo2}
                                    className="h-14 w-auto"
                                />
                            </Link>
                            <Link to="/" className=" md:hidden flex flex-shrink-0 items-center">
                                <img
                                    alt="Арт Груп - мебель по индивидуальному заказу"
                                    src={logo_bottom}
                                    className="h-14 w-auto"
                                />
                            </Link>
                            {/* logo */}
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
                            Связаться с нами
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="absolute top-15 w-full md:pl-[15%] h-auto px-2 pb-3 pt-2 z-50 bg-stone-950/60">
                        <NavLink to="/" className={setActiveMobile} onClick={handleLinkClick}>
                            Главная
                        </NavLink>
                        <button
                            onClick={toggleCatalog}
                            className="text-gray-300 flex justify-between max-w-44 hover:bg-gray-700 hover:text-white hover:scale-105 hover:text-center block rounded-md px-5 py-2 text-lg font-medium whitespace-nowrap"
                        >
                            {catalogOpen ? (
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                </span>

                            ) : (
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </span>

                            )}
                            <span className="p-x-8">Каталог</span>
                        </button>
                        {catalogOpen && (
                            <div className="pl-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.href}
                                        to={item.href}
                                        className={setActiveMobile}
                                        onClick={handleLinkClick}  // Добавляем обработчик события
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                        <NavLink to="/about" className={setActiveMobile} onClick={handleLinkClick}>
                            О компании
                        </NavLink>
                        <NavLink to="/portfolio" className={setActiveMobile} onClick={handleLinkClick}>
                            Выполненные работы
                        </NavLink>
                    </div>
                )}
            </nav>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default Navbar1;
