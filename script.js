
url = "https://www.boredapi.com/api/activity/";

async function getActivity() {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => setActivity(data))
    .catch((error) => alert("Reload the page..." + error));
}
function setActivity(e) {
  document.getElementsByClassName("Type")[0].innerHTML =
    e.type.charAt(0).toUpperCase() + e.type.slice(1);
  document.getElementsByClassName("card-text")[0].innerHTML = e.activity;
  let websiteLink = e.link;
  if (websiteLink.length !== 0) {
    document.getElementsByClassName("website")[0].href = websiteLink;
    document.getElementsByClassName("website")[0].style.display = "block";
  }
}
getActivity();