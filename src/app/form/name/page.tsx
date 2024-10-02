import React from "react";

// @component template
import Input from "@/app/_lib/components/ui/input";
import LayoutTemplate from "@/app/form/component.template";

// @main component
export default function FormScreen(): JSX.Element {
  return (
    <React.Fragment>
      <LayoutTemplate info="Let’s start with the basics. Type in your first name.">
        <Input label="First Name" placeholder="First Name" />
      </LayoutTemplate>
    </React.Fragment>
  );
}
