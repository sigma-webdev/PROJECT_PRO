const avatar = document.getElementById("avatar");
const username = document.getElementById("username");
const repos = document.getElementById("repos");
const following = document.getElementById("following");
const follower = document.getElementById("followers");
const place = document.getElementById("location");
const office = document.getElementById("office");
const twitter = document.getElementById("x");
const join = document.getElementById("join");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  const name = formData.get("username");

  const url = `https://api.github.com/users/${name}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        alert("user not found");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      join.textContent = `Join at ${data.created_at}`;
      avatar.src = `${data?.avatar_url}`;
      username.textContent = data?.login;
      repos.textContent = data?.public_repos;
      following.textContent = data?.following;
      follower.textContent = data?.followers;
      place.textContent = data.location ? data.location : "Not available";
      office.textContent = data.company ? data.company : "Not available";
      twitter.textContent = data.twitter_username
        ? data.twitter_username
        : "Not available";
    })
    .catch((err) => {
      alert(err);
    });
});
