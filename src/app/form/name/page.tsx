"use client";
import React from "react";
import { useRouter } from "next/navigation";

// @component template & hooks
import Input from "@/app/_lib/components/ui/input";
import LayoutTemplate from "@/app/form/component.template";
import useSearchQuery from "@/app/_lib/hooks/useSearchQuery";

// @main component
export default function FormScreen(): JSX.Element {
  // @hooks
  const query = useSearchQuery();
  const router = useRouter();

  return (
    <React.Fragment>
      <LayoutTemplate info="Let’s start with the basics. Type in your first name.">
        <Input
          label="First Name"
          placeholder="First Name"
          onChange={(e) => {
            if (!e.target.value) return query.delete("first_name");
            query.set("first_name", e.target.value);
          }}
          onSubmit={() => {
            if (!query.get("first_name")) return;
            router.push("/form/email?name=" + query.get("first_name"));
          }}
        />
      </LayoutTemplate>
    </React.Fragment>
  );
}
