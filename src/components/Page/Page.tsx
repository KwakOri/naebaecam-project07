import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

type PageProps = {} & PageVariantsProps;

type PageVariantsProps = VariantProps<typeof pageVariant>;

const pageVariant = cva("w-full mx-auto bg-gray-950", {
  variants: {
    width: {
      sm: "max-w-[600px]",
      md: "max-w-[1024px]",
      lg: "max-w-[1200px]",
    },
  },
  defaultVariants: {
    width: "md",
  },
});

const Page = ({ children, width }: PropsWithChildren<PageProps>) => {
  return <div className={pageVariant({ width })}>{children}</div>;
};

export default Page;
