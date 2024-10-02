"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

// @types
type Query = {
  set: (key: string, value: string) => void;
  get: (key: string) => string | null;
  delete: (key: string) => void;
  forEach: (callbackfn: (value: string, key: string) => void) => void;
  keys: () => IterableIterator<string>;
  values: () => IterableIterator<string>;
  entries: () => IterableIterator<[string, string]>;
};

export default function useSearchQuery(): Query {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // @build new query
  const query = new URLSearchParams(searchParams);

  // @return
  return {
    set: (key: string, value: string): void => {
      query.set(key, value);
      router.replace(`${pathname}?${query.toString()}`, { scroll: false });
    },
    get: (key: string): string | null => {
      return query.get(key);
    },
    delete: (key: string): void => {
      query.delete(key);
      router.replace(`${pathname}?${query.toString()}`);
    },
    forEach: (callbackfn: (value: string, key: string) => void): void => {
      query.forEach(callbackfn);
    },
    keys: (): IterableIterator<string> => {
      return query.keys();
    },
    values: (): IterableIterator<string> => {
      return query.values();
    },
    entries: (): IterableIterator<[string, string]> => {
      return query.entries();
    },
  };
}
