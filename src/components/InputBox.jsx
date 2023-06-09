import React from "react";

const InputBox = ({ type, onChange, label, value, name }) => {
  return (
    <div className="relative">
      <input
        className="border-2 border-solid border-sec/30 font-nunito font-semibold text-xl rounded-lg w-full pl-16 py-7 max-sm:py-4 max-sm:pl-5 text-sec outline-none mb-10"
        onChange={onChange}
        type={type}
        value={value}
        name={name}
      />
      <p className="absolute top-[-12px] left-[52px] bg-white px-5 font-nunito font-semibold text-sm text-sec/70">
        {label}
      </p>
    </div>
  );
};

export default InputBox;
