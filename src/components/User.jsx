function User() {
  return (
    <div className="pro">
      <img src="./user.jpeg" />
      <div className="des">
        <div className="inside-div flex items-center justify-between">
          <span>
            <img
              className="user-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdwTxtPZ-1mO69NbxWSUiHJoi0K4VUT5_7A&s"
            />
          </span>
          <span id="name">Andrei Symonds</span>
        </div>
        <h5>Im Pro web Developer, all are noob infront of me</h5>
        <div className="star">
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
        </div>
        <h4>$78</h4>
      </div>
    </div>
  );
}

export default User;
