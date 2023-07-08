import React from "react";
import { SignIn } from "./SignIn";

const AccountFallBack = () => {
  return (
    <div className="flex flex-col h-full justify-around border p-5 w-[600px]">
      <div className="text-lg">
        <h1 className="text-lg">Account</h1>
        <p>
          To place your order now, log in to your existing account or sign up
        </p>
      </div>
      <div className="flex flex-col items-center h-[300px] justify-around">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-400 text-lg">Have an account already?</p>
          <button className="border p-2 w-[80px] text-lg font-semibold rounded-lg">
            Log IN
          </button>
        </div>
        <div>Or</div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-600 text-lg">New to Zappy?</p>
          <button className="border p-2 w-[80px] text-lg font-semibold rounded-lg bg-black text-white">
            Sign UP
          </button>
        </div>
      </div>
      <SignIn />
    </div>
  );
};

export default AccountFallBack;
