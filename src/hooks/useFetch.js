/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 08 2020 00:29:12 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState({ data: null, loadingData: true });

  useEffect(() => {
    setResponse(state => ({
      data: state.data,
      loadingData: true,
    }));

    fetch(url).then((x) =>
      x.text().then((y) => {
        setResponse({
          data: y,
          loadingData: false,
        });
      })
    );
  }, [url, setResponse]);

  return response;
};
