import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RiEyeLine, RiEyeOffLine, RiErrorWarningFill } from "react-icons/ri";
import "./index.css";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";
import services from "../services";
import UserUtils from "../utils/UserUtils";
import ApplicationLogo from "../components/ApplicationLogo";
import { useToast } from "../hooks/useToast";
import LoginValidationScheme from "../helpers/LoginValidationScheme";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  const navigate = useNavigate();
  const { add } = useToast();
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidationScheme),
  });

  function sendLoginDetails(data) {
    setLoading(true);

    services.authentication
      .login(data)
      .then((response) => {
        UserUtils.logged(response, navigate);
      })
      .catch((error) => {
        add({
          icon: <RiErrorWarningFill />,
          type: "error",
          message: (
            <div className="text-center">
              <h5 className="rounded-sm text-xs text-white">
                {error.response.data.error}
              </h5>
            </div>
          ),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="login__page">
      {/* 
			Dark Mode Toggle
			*/}

      <div className="flex justify-end">
        <DarkModeToggle />
      </div>

      <div className="login__content">
        <img
          src="/src/assets/img/login_bg.svg"
          className="absolute top-0 left-0 w-full h-full object-cover dark:brightness-75"
        />
        <form
          onSubmit={handleSubmit(sendLoginDetails)}
          className="relative gap-y-5 p-8 rounded-lg grid bg-lightBlurColor dark:bg-blackBlurColor  w-[400px] justify-self-center sm:w-[386px] sm:justify-self-center md:w-[456px] md:justify-self-center lg:justify-self-center lg:mr-14 lg:gap-y-4 lg:p-5"
        >
          <div>
            {/* Dicord logo*/}
            <ApplicationLogo height={40} width={180} color={"#7289da"} />
            <p className="login__description dark:text-white flex justify-center items-center">
              Welcome! Please login to your account.
            </p>
          </div>
          <div>
            <div className="login__inputs">
              <div>
                <label htmlFor="" className="login__label dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="login__input"
                  placeholder="Enter your email"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="" className="login__label dark:text-white">
                  Password
                </label>
                <div className="login__box">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="login__input"
                    placeholder="Enter your password"
                    {...register("password")}
                  />
                  {showPassword ? (
                    <RiEyeLine
                      onClick={() => setShowPassword(!showPassword)}
                      className="login__eye"
                    />
                  ) : (
                    <RiEyeOffLine
                      onClick={() => setShowPassword(!showPassword)}
                      className="login__eye"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex col-gap-2 items-center">
              <input type="checkbox" className="login__check-input" />
              <label htmlFor="" className="login__check-label dark:text-white">
                Remember me
              </label>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <button className="login__button">
                {loading ? (
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white inline justify-center items-center justify-self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            {errors.email || errors.password ? (
              <p className="text-red-500 text-xs flex justify-center items-center">
                {errors.email?.message || errors.password?.message}
              </p>
            ) : (
              ""
            )}
            <Link
              to="/forgot-password"
              className=" text-sm flex gap-1 font-medium text-firstColor hover:underline"
            >
              Forgot Password?
            </Link>

            <div className="text-center mt-4">
              <p className="text-sm font-medium text-black dark:text-gray">
                Dont have an account?
              </p>
              <Link
                to="/register"
                className="text-sm font-medium text-firstColor hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
