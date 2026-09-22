"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  addTransitionType,
  startTransition,
  type ComponentProps,
  type MouseEvent,
} from "react";

type ViewTransitionLinkProps = ComponentProps<typeof Link> & {
  transitionTypes?: string[];
};

function resolveHref(href: ComponentProps<typeof Link>["href"]): string {
  if (typeof href === "string") {
    return href;
  }
  if (href && typeof href === "object" && "pathname" in href) {
    const pathname = href.pathname ?? "";
    const query =
      href.query && typeof href.query === "object"
        ? `?${new URLSearchParams(
            Object.entries(href.query).flatMap(([key, value]) => {
              if (value == null) return [];
              if (Array.isArray(value)) {
                return value.map((item) => [key, String(item)]);
              }
              return [[key, String(value)]];
            }),
          ).toString()}`
        : "";
    const hash = href.hash ? `#${href.hash}` : "";
    return `${pathname}${query}${hash}`;
  }
  return String(href);
}

export default function ViewTransitionLink({
  transitionTypes,
  href,
  onClick,
  replace,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      !transitionTypes?.length ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    const url = resolveHref(href);

    startTransition(() => {
      for (const type of transitionTypes) {
        addTransitionType(type);
      }
      if (replace) {
        router.replace(url);
      } else {
        router.push(url);
      }
    });
  };

  return <Link href={href} onClick={handleClick} replace={replace} {...props} />;
}
