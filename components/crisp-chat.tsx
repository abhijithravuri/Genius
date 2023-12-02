"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("cc3fba1b-beb3-4acb-8310-76b0d7c71a23");
  }, []);

  return null;
};
