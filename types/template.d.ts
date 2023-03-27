import {ChangeEvent} from "react";

interface TemplateProps {
  readonly title:string;
  readonly description: string;
  readonly image: string;
  readonly buttonTitle: string;
  readonly buttonLink: string;
  readonly onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}