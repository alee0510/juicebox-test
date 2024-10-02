"use client";
import React from "react";
import { useRouter } from "next/navigation";

// @component template & hooks
import useSearchQuery from "@/app/_lib/hooks/useSearchQuery";
import Input from "@/app/_lib/components/ui/input";
import LayoutTemplate from "@/app/form/component.template";

// @main component
export default function FormScreen(): JSX.Element {
  // @hooks
  const query = useSearchQuery();
  const router = useRouter();

  return (
    <React.Fragment>
      <LayoutTemplate info="How should we contact you? Type in your email address.">
        <Input
          label="email address"
          placeholder="Email adress"
          onChange={(e) => {
            if (!e.target.value) return query.delete("email");
            query.set("email", e.target.value);
          }}
          onSubmit={() => {
            if (!query.get("email")) return;
            router.push("/result?name=" + query.get("name") + "&email=" + query.get("email"));
          }}
        />
      </LayoutTemplate>
    </React.Fragment>
  );
}
