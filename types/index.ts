import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Email = {
  email: string;
  checkbox?: boolean;
};

export type Review = {
  id: number;
  name: string;
  src: StaticImport | string;
  rating: number;
  text: string;
};

export type SignIn = {
  email: string;
  password: string;
};

export type ItemLInk = {
  id: number;
  src: string;
  title: string;
};
