import { memo, type ReactNode } from "react";

const InnerBack = ({ children }: { children: ReactNode }) => {
  return <section className="my-2 bg-white rounded p-2">{children}</section>;
};

export default memo(InnerBack);
