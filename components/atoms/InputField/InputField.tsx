import React from "react";

const InputField = (props: any) => {
  const onChangeTest = (e: any) => {
    props.onChangeTest(e.target.value);
  };
  return (
    <input
      type={props.type}
      onChange={onChangeTest}
      value={props.value}
      name={props.name}
      placeholder={props.placeholderText}
      className={` text-lg w-full bg-lightGrey pl-10 py-6 font-medium placeholder-cyanblue focus:outline-none`}
    />
  );
};

export default InputField;
