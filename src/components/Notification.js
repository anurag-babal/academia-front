const Notification = (props) => {
  const { message, type } = props;
  if (message === null)
    return null;

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      {message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Notification;