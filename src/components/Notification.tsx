import { FC } from "react";

interface NotificationProps {
  message: string;
  type: string;
}

const Notification: FC<NotificationProps> = (props) => {
  if (props.message === null)
    return null;

  return (
    <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
      {props.message}
      <button type="button" className="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Notification;