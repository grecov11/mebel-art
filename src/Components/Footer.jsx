import React, {useMemo} from 'react'
import { logo_bottom } from "../assets/index.js";



const Footer = () => {
//   const [catalogOpen, setCatalogOpen] = useState(false);
  const setActiveMobile = ({ isActive }) => isActive ? 'active-footer' : 'nav-footer'

  const currentYear = useMemo(() => new Date().getFullYear(), []);
//
//   const toggleCatalog = () => {
//         setCatalogOpen(!catalogOpen);
//     };

  return (
    <footer id="contacts" className="bg-stone-950  mx-auto w-full h-full relative text-white py-8">
      <div className="max-w-screen-2xl mx-auto w-full h-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">

            <ul className="flex flex-col items-center md:items-start">
              <li>
                <a href="/" className="flex flex-shrink-0 items-center">
                    <img
                        alt="Арт Груп - мебель по индивидуальному заказу"
                        src={logo_bottom}
                        className="h-auto w-40 ml[20px]"
                    />
                </a>
              </li>
              {/*<li>*/}
              {/*  <h2 className="text-gray-300 max-w-60  hover:text-white hover:scale-105  block  px-5 py-1 text-base font-medium">Какой-нибудь текст</h2>*/}
              {/*</li>*/}
            </ul>


            <div className="mt-5 flex flex-row  justify-center md:justify-normal ">

                {/*VK icon*/}
                <div className="hover:scale-105">
                  <a href="https://vk.com/mebel_art_group" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <linearGradient id="Byy22pnmlYaI5cW_~l8WCa_6P1pA3HJabYU_gr1" x1="18.188" x2="29.446" y1="6.001" y2="40.865" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33bef0"></stop><stop offset="1" stopColor="#0a85d9"></stop></linearGradient><path fill="url(#Byy22pnmlYaI5cW_~l8WCa_6P1pA3HJabYU_gr1)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8	C42,6.895,41.105,6,40,6z"></path><path d="M36.937,17.041c0.046-0.151,0.068-0.291,0.062-0.416C36.984,16.263,36.735,16,36.149,16h-4.154	c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.72,3.684-2.122,4.449c-0.61,0.641-1.005,1.361-1.335,1.361c-0.177,0-0.394,0.175-0.394-0.412	v-5.185C27,16.32,26.827,16,26.268,16h-6.649C19.212,16,19,16.32,19,16.641c0,0.667,0.898,2.827,1,4.696v0.895	c0,0.636,0.101,1.24-0.137,1.24c-0.29,0-1.304-2.242-2.161-6.404C17.448,16.294,17.194,16,16.533,16H11.89	C11.127,16,11,16.374,11,16.774c0,1.612,0.844,6.292,4.119,10.774c2.375,3.25,6.26,5.452,9.03,5.452c1.237,0,2.85-0.02,2.85-1.88	c0-1.86-0.02-2.835,0.164-2.835c0.238,0,0.35,0.109,1.85,1.859C30.744,32.161,31.167,33,32.159,33h3.87	c0.608,0,0.957-0.255,0.971-0.75c0-1.275-0.374-2.013-2.25-4.763c-0.615-0.743-1.75-1.996-1.75-2.5	C33,24.42,36.189,20.111,36.937,17.041z" opacity=".05"></path><path d="M36.437,17.541c0.046-0.151,0.068-0.291,0.062-0.416c-0.015-0.362-0.264-0.625-0.85-0.625h-3.386	c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.676,3.522-2.818,5.012c-0.61,0.641-0.962,0.993-1.292,0.993	c-0.177,0-0.509-0.019-0.509-0.606v-5.185c0-0.694-0.173-1.014-0.732-1.014h-5.649c-0.407,0-0.619,0.32-0.619,0.641	c0,0.667,0.898,1.827,1,3.696v2.259c0,0.758-0.026,1.14-0.31,1.14c-0.59,0-1.973-2.621-2.988-6.668	c-0.254-0.774-0.508-1.068-1.169-1.068H12.39c-0.763,0-0.89,0.374-0.89,0.774c0,1.167,0.722,5.455,3.997,9.937	c2.375,3.25,5.882,5.289,8.652,5.289c1.457,0,2.35-0.221,2.35-1.487v-2.182c0.001-0.801,0.082-1.189,0.441-1.189	c0.31,0,0.754,0.179,2.254,1.929c1.73,2.018,2.099,2.928,3.091,2.928h3.244c0.608,0,0.957-0.255,0.971-0.75	c0-0.986-0.687-2.236-2.25-4.257c-0.615-0.743-1.75-1.927-1.75-2.5C32.5,24.42,35.345,21.06,36.437,17.541z" opacity=".07"></path><path fill="#fff" d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618	c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199	v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623	c0,0.88-0.153,1.04-0.483,1.04c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17H12.89C12.127,17,12,17.374,12,17.774	c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094v-2.972	C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618c0.608,0,0.957-0.255,0.971-0.75	c0.003-0.126-0.015-0.267-0.056-0.424C35.75,30.25,34.86,28.842,33.75,27.5c-0.615-0.743-1.222-1.479-1.501-1.879	C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607C32.223,24.393,35.607,19.642,35.937,18.041z"></path>
                    </svg>
                  </a>
                </div>

                {/*Telegram icon*/}
                <div className="hover:scale-105">
                  <a href="https://t.me/ARTgroup_AN" target="_blank">
                    <svg width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"/>
                    <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#37BBFE"/>
                    <stop offset="1" stopColor="#007DBB"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </a>
                </div>

                {/*Whatsapp icon*/}
                <div className="hover:scale-105">
                  <a href="https://wa.me/79099348209" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                      <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
                      <path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path>
                      <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
                      <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>

              </div>

          </div>
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Контакты</h3>

            <ul>
              <li className="mt-1 hover:scale-105">
                <a href="tel:+79099348209" className="text-base font-semibold hover:underline ">+7 909 934-82-09</a>
              </li>
              <li className="mt-1 hover:scale-105">
                <a href="mailto:info@mebel-artgroup.ru" className="text-base font-semibold hover:underline ">info@mebel-artgroup.ru</a>
              </li>
              {/*<li className="mt-1 hover:scale-105">*/}
              {/*  <span className="text-base font-semibold hover:underline ">Адрес: Если <br/>будет</span>*/}
              {/*</li>*/}
            </ul>



            {/*<button*/}
            {/*    onClick={toggleCatalog}*/}
            {/*    className="text-gray-300 flex justify-between max-w-44 hover:bg-gray-700 hover:text-white hover:scale-105 hover:text-center block rounded-md px-5 py-2 text-lg font-medium whitespace-nowrap"*/}
            {/*>*/}
            {/*    {catalogOpen ? (*/}
            {/*        <span>*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">*/}
            {/*                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />*/}
            {/*            </svg>*/}
            {/*        </span>*/}

            {/*    ) : (*/}
            {/*        <span>*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">*/}
            {/*                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />*/}
            {/*            </svg>*/}
            {/*        </span>*/}

            {/*    )}*/}
            {/*    <span className="p-x-8">Каталог</span>*/}
            {/*</button>*/}
            {/*{catalogOpen && (*/}
            {/*  <ul className="flex flex-col items-center md:items-start">*/}

            {/*  {navigation.map((item) => (*/}

            {/*          <li key={item.href}>*/}
            {/*            <NavLink*/}
            {/*              to={item.href}*/}
            {/*              className={setActiveMobile}*/}
            {/*          >*/}
            {/*              {item.name}*/}
            {/*            </NavLink>*/}
            {/*          </li>*/}
            {/*      ))}*/}
            {/*</ul>*/}
            {/*)}*/}


          </div>
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">О компании</h3>
            <ul className="flex flex-col items-center md:items-start">
              <li>
                <a href="/about" className={setActiveMobile}>О компании</a>
              </li>
              <li>
                <a href="/portfolio" className={setActiveMobile}>Портфолио</a>
              </li>
              <li>
                <a href="/privacy-policy" className={setActiveMobile}>Политика конфиденциальности</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="container mx-auto text-center mt-4">
          <p>© 2024-{currentYear} ART-GROUP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
