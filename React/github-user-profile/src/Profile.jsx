import { useState } from "react";
import avatar from "./assets/avatar.png";
import location from "./assets/map-pin.svg";
import x from "./assets/x.jpg";
import office from "./assets/building-office-2.svg";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const handleSearch = (name) => {
    const url = `https://api.github.com/users/${name}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          alert("user not found");
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch(() => {
        setProfile(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      handleSearch(username);
    }
  };

  console.log(profile);

  return (
    <div className=" mx-auto w-96 my-20">
      {/* search */}
      <form
        onSubmit={handleSubmit}
        className="w-full border border-gray-600  flex mb-5 pl-5 shadow-lg"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter github username"
          className="w-full outline-none"
        />
        <button
          type="submit"
          className="border py-2 p-5 hover:bg-gray-700 text-white bg-gray-600"
        >
          {" "}
          Search{" "}
        </button>
      </form>
      {/* profile section */}
      <section className="border border-gray-600 shadow-lg">
        {/* user image and name */}
        <div className="flex items-center gap-4 ml-5 py-5">
          <img
            className="w-20 rounded-md"
            src={profile?.avatar_url ? profile?.avatar_url : avatar}
            alt="profile image"
          />
          <div>
            <p>{profile?.login ? profile?.login : "Username"}</p>
            <p> Join at {profile?.created_at ? profile?.created_at : "null"}</p>
          </div>
        </div>

        {/* repos and following */}
        <div className="flex justify-around items-center text-center py-4 bg-gray-200 rounded-md mx-5 my-2 ">
          <div>
            <p> Repos</p>
            <p> {profile?.public_repos ? profile?.public_repos : 0}</p>
          </div>
          <div>
            <p> Following </p>
            <p> {profile?.following ? profile?.following : 0}</p>
          </div>
          <div>
            <p> Followers </p>
            <p> {profile?.followers ? profile?.followers : 0}</p>
          </div>
        </div>
        {/* social link */}
        <div className="ml-6">
          <div className="flex py-1 gap-2">
            <img src={location} alt="my location" />
            <p> {profile?.location ? profile?.location : "Null"}</p>
          </div>

          <div className="flex py-1 gap-2">
            <img src={office} alt="office" />
            <p> {profile?.hireable ? profile?.hireable : "Null"}</p>
          </div>
          <div className="flex py-1 gap-2">
            <img src={x} alt="x account" className="w-6" />
            <p> {profile?.twitter ? profile?.twitter : "Null"}</p>
          </div>
        </div>
        <p className="text-center py-4 bg-gray-200  mt-3"> Thank You </p>
      </section>
    </div>
  );
};

export default Profile;
