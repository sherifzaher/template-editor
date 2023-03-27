import {ChangeEvent, HTMLAttributes} from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement>{
  readonly label: string;
  readonly value: string;
  readonly onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly name: string;
  readonly type: "input" | "textarea";
}