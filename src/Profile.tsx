import { useState } from "react";

const Profile = () => {
  const [userId, setUserId] = useState();
  const [nickname, setNickname] = useState();
  const [profileImage, SetProfileImage] = useState();

  return (
    <div>
      <h2>{userId}</h2>
      <h2>{nickname}</h2>
      <img src={profileImage}></img>
    </div>
  );
};

export default Profile;
