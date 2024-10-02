import React from "react";

// @component template
import Input from "@/app/_lib/components/ui/input";
import LayoutTemplate from "@/app/form/component.template";

// @main component
export default function FormScreen(): JSX.Element {
  return (
    <React.Fragment>
      <LayoutTemplate info="How should we contact you? Type in your email address.">
        <Input label="email address" placeholder="Email adress" />
      </LayoutTemplate>
    </React.Fragment>
  );
}
