import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="font-bold text-slate-900 leading-tight">
        {text1}{" "}
        <span className="text-gray-700 font-semibold leading-tight">
          {text2}
        </span>
      </p>
    </div>
  );
};

export default Title;
