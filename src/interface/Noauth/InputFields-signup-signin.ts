import { ChangeEvent } from "react";

export interface fieldData {
    id: string;
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    helperText?: String | undefined;
    errors?: boolean | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  