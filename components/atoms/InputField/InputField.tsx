import React from "react";

interface InputFieldIF {
  type: string;
  value: string;
  name: string;
  placeholderText: string;
  onChangeTest: (value: string) => void;
}

const InputField = (props: InputFieldIF) => {
  const onChangeTest = (e: { target: { value: string } }) => {
    props.onChangeTest(e.target.value);
  };
  return (
    <input
      type={props.type}
      onChange={onChangeTest}
      value={props.value}
      name={props.name}
      placeholder={props.placeholderText}
      className={` text-base w-full bg-none border-b-2 border-gray-500 p-2 text-cyanblue placeholder-cyanblue focus:outline-none`}
    />
  );
};

export default InputField;
