import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

type ChipVariantProps = VariantProps<typeof chipVariant>;

const chipVariant = cva(
  "text-center text-sm rounded-sm text-white min-w-8 px-1.5",
  {
    variants: {
      intent: {
        type: "bg-orange-400",
        feature: "bg-green-400",
      },
    },
  }
);

const Chip = ({ children, intent }: PropsWithChildren<ChipVariantProps>) => {
  return <div className={chipVariant({ intent })}>{children}</div>;
};

export default Chip;
