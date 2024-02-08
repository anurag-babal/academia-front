import { FC, useEffect, useState } from "react";

export const Alert: FC<any> = (props) => {
  // export function Alert(props: any) {
  const [isVisible, setIsVisible] = useState(true);
  const { message } = props;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Set timeout for 10 seconds

    // Optional cleanup function to prevent memory leaks
    // return () => clearTimeout(timeoutId);
  }, []);

  return (
    isVisible && (
      <div className="alert alert-danger" role="alert" >
        {message}
      </div >
    )
  );
}