/* eslint-disable @next/next/no-img-element */
import React, { ComponentProps, CSSProperties } from "react";

interface ProfileProps extends ComponentProps<"a"> {
  src: string;
  href: string;
}
export default function Profile({ children,href, src, ...props }: ProfileProps) {
    const profileStyle:CSSProperties = {
        position:"relative"
    }
    return (
    <a href={href} {...props} style={profileStyle}>
      <img className="rounded-full object-cover" width={200} src={src} alt="UserProfile" />
      <div>{children}</div>
    </a>
  );
}
