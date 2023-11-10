import React, { ComponentProps } from "react";

import { Textarea as TextAreaUI } from "./ui/textarea";

type Props = ComponentProps<typeof TextAreaUI> & {
  action?: () => React.ReactNode;
};

export function Textarea(props: Props) {
  const hasValue = !!String(props.value);

  return (
    <div className="flex flex-col w-full relative">
      {props.action && (
        <div className="w-full flex justify-end absolute">{props.action()}</div>
      )}

      <TextAreaUI
        data-hasOutput={hasValue}
        className="resize-none h-52 disabled:opacity-100 data-[hasOutput=true]:disabled:cursor-text py-8 px-4"
        {...props}
      />
    </div>
  );
}
