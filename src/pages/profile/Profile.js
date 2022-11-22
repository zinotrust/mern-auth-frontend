import React, { useState } from "react";
import Card from "../../components/card/Card";
import profileImg from "../../assets/avatarr.png";
import "./Profile.scss";
import PageMenu from "../../components/pageMenu/PageMenu";

const initialState = {
  name: "Zino",
  email: "zino@gmail.com",
  phone: "",
  bio: "",
  photo: "",
  role: "",
  isVerified: false,
};

const Profile = () => {
  const [profile, setProfile] = useState(initialState);

  const handleImageChange = () => {};
  const handleIputChange = () => {};
  return (
    <>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Profile</h2>
          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              <>
                <div className="profile-photo">
                  <div>
                    <img src={profileImg} alt="Profileimg" />
                    <h3>Role: Subscriber</h3>
                  </div>
                </div>
                <form>
                  <p>
                    <label>Change Photo:</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleImageChange}
                    />
                  </p>
                  <p>
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleIputChange}
                    />
                  </p>
                  <p>
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleIputChange}
                      disabled
                    />
                  </p>
                  <p>
                    <label>Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleIputChange}
                    />
                  </p>
                  <p>
                    <label>Bio:</label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleIputChange}
                      cols="30"
                      rows="10"
                    ></textarea>
                  </p>
                  <button className="--btn --btn-primary --btn-block">
                    Update Profile
                  </button>
                </form>
              </>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
