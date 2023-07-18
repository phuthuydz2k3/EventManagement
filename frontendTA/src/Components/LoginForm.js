import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import Design from './img/download.svg';
import Design2 from './img/download1.svg';
import Alert from './Alert'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let role = useRef('');
    const form = document.getElementById("form");
    const [pValue, setPValue] = useState("Choose a role by click in the according button on the screen.");
    const [strongValue, setStrongValue] = useState("You need to choose your role");
    const [alertDisplay, setAlertDisplay] = useState(false);

    const handleAlertDisplay = (p, strong) => {
        setPValue(p);
        setStrongValue(strong)
        setAlertDisplay(!alertDisplay);
    }

    useEffect(() => {
        const card1 = document.getElementById("card1");
        const card2 = document.getElementById("card2");
        const switch1 = document.getElementById("switch1");
        const switch2 = document.getElementById("switch2");
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");
        const text1 = document.getElementById("text1");
        const text2 = document.getElementById("text2");

        const handleButton1Click = () => {
            card1.classList.add("open");
            card2.classList.add("open");
            card2.style.display = "none";
            switch1.style.display = "block";
            button1.style.display = "none";
            button2.style.display = "none";
            text1.style.display = "block";
            text2.style.display = "block";
            role.current = "employee"
        };

        const handleButton2Click = () => {
            card2.classList.add("open");
            card1.classList.add("open");
            card1.style.display = "none"
            switch2.style.display = "block";
            switch1.style.display = "block";
            button1.style.display = "none";
            button2.style.display = "none";
            text1.style.display = "block";
            text2.style.display = "block";
            role.current = "manager"
        };

        const handleSwitch1Click = () => {
            card1.style.display = "none";
            card2.style.display = "block";
            switch2.style.display = "block";
            role.current = "employee"
        };


        const handleSwitch2Click = () => {
            card2.style.display = "none";
            card1.style.display = "block";
            switch1.style.display = "block";
            role.current = "manager"
        }

        button1.addEventListener("click", handleButton1Click);
        button2.addEventListener("click", handleButton2Click);
        switch1.addEventListener("click", handleSwitch1Click);
        switch2.addEventListener("click", handleSwitch2Click)

        return () => {
            button1.removeEventListener("click", handleButton1Click);
            button2.removeEventListener("click", handleButton2Click);
            switch1.removeEventListener("click", handleSwitch1Click);
            switch2.removeEventListener("click", handleSwitch2Click)
        };
    }, []);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (role.current === '') {
            handleAlertDisplay("Choose a role by click in the according button on the screen.",
                "You need to choose your role!");
            form.classList.add('disabled-overlay');
            document.body.addEventListener('click', () => {
                form.classList.remove('disabled-overlay');
                setAlertDisplay(false);
            })
        } else {
            try {
                const { success, sessionToken, error } = await login(
                username,
                password,
                role.current
                );
      
            if (success) {
                // Login successful
                // Set user session or token (e.g., save to local storage or cookies)
                // Here, we're using a mock session token for simplicity
                localStorage.setItem('sessionToken', sessionToken);
      
                // Redirect to the protected page based on the user role
                if (role.current === 'manager') {
                    navigate('/manager/home');
                } else if (role.current === 'employee') {
                    navigate('/employee/home');
                }
            } else {
                handleAlertDisplay("Please enter the username and password again.",
                    "Incorrect username and password!");
                form.classList.add('disabled-overlay');
                document.body.addEventListener('click', () => {
                    form.classList.remove('disabled-overlay');
                    setAlertDisplay(false);
                })
            }
          } catch (error) {
            console.error('An error occurred during login:', error);
          }
        }
    };

    return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {alertDisplay && <Alert p={pValue} strong={strongValue}/>}
        <div className="form" id="form">
            <div className="cards">
                <div href="" className="card group relative block h-64 sm:h-80 lg:h-96" id="card1">
                    <div
                        id="dash1"
                        className="relative flex h-full transform items-end shadow-lg rounded-lg"
                    >
                        <div
                            id="info1"
                            className="absolute p-4 group-hover:relative sm:p-6 lg:p-8"
                        >
                            <p className="relative transition hover:scale-110 focus:outline-none focus:ring" id="switch1">Switch to Employee</p>
                            <img src={Design2} alt="SVG Image"/>
                            <div id="button1"
                                 className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                            >
                              <span
                                  className="absolute inset-0 border border-blue-600 group-active:border-blue-500 rounded-lg"
                              ></span>
                                <span
                                    className="block border border-blue-600 bg-blue-600 rounded-lg px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                >
                                Sign in as Manager
                              </span>
                            </div>
                            <p className="relative" id="text1">Manager</p>
                        </div>
                    </div>
                </div>
                <div href="" className="card group relative block h-64 sm:h-80 lg:h-96" id="card2">
                    <div
                        id="dash2"
                        className="dash relative flex h-full transform items-end shadow-lg rounded-lg"
                    >
                        <div
                            id="info2"
                            className="absolute p-4 group-hover:relative sm:p-6 lg:p-8"
                        >
                            <p className="relative transition hover:scale-110 focus:outline-none focus:ring" id="switch2">Switch to Manager</p>
                            <img src={Design} />
                            <div id="button2"
                                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                            >
                              <span
                                  className="absolute inset-0 border border-blue-600 group-active:border-blue-500 rounded-lg"
                              ></span>
                                <span
                                    className="block border border-blue-600 bg-blue-600 rounded-lg px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                >
                                Sign in as Employee
                              </span>
                            </div>
                            <p className="relative" id="text2">Employee</p>
                        </div>
                    </div>
                </div>
            </div>

            <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                onSubmit={handleSubmit}
            >
                <p className="text-center text-lg font-medium">Sign in to your account</p>

                <div>
                    <label htmlFor="name" className="sr-only">Username</label>

                    <div className="relative">
                        <input
                            type="name"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            value={username} onChange={handleUsernameChange} placeholder="Username"
                            required
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                        </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            value={password} onChange={handlePasswordChange} placeholder="Password"
                            required
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
                >
                    Sign in
                </button>
            </form>
        </div>
    </div>
    );
};

export default LoginForm;
