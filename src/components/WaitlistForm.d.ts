declare module "@/components/WaitlistForm" {
  import { FC } from "react";
  
  interface WaitlistFormProps {
    className?: string;
  }

  const WaitlistForm: FC<WaitlistFormProps>;
  
  export default WaitlistForm;
}
