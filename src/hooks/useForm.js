/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 08 2020 00:40:16 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";

export const useForm = (initalState) => {
  const [inputs, setInputs] = React.useState(initalState);

  return [
    inputs,
    (e) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
