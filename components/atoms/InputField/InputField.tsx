import React from "react";

interface InputFieldIF {
  type:string,
  value: string,
  name: string,
  placeholderText: string,
  onChangeTest: ( value: string )=> void
}

const InputField = (props: InputFieldIF) => {
  const onChangeTest = (e: {target: { value: string }}) => {
    props.onChangeTest(e.target.value);
  };
  return (
    <input
      type={props.type}
      onChange={onChangeTest}
      value={props.value}
      name={props.name}
      placeholder={props.placeholderText}
      className={` text-lg w-full bg-lightGrey pl-10 py-6 font-medium text-cyanblue placeholder-cyanblue focus:outline-none`}
    />
  );
};

export default InputField;
