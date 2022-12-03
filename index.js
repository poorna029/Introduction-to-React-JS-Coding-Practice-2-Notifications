const Notification = (props) => {
  //  Write your code here.
  const { url, text, notification } = props;

  let { class1 } = props;
  console.log(class1);

  let { head_class } = props;
  head_class = head_class + " head";
  console.log(head_class);
  class1 = class1 + " notification_item";

  return (
    <div class="bg">
      <h1 class="head">{text}</h1>
      <div class={class1}>
        <img src={url} class="image_size" alt="notifications-output" />
        <p class="text">{notification}</p>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Notifications"
      notification="Information Message"
      class1="bl"
    />
    ,
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      class1="gr"
      notification="Success Message"
      head_class="d"
    />
    ,
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      class1="wa"
      notification="Warning message"
    />
    ,
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      class1="er"
      notification="Error message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
