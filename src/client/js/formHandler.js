function handleSubmit(event) {
  event.preventDefault();

  let url = document.getElementById("url").value;
  if (Client.checkURL(url)) {
    post("http://localhost:8081/add-url", { url }).then((data) => {
      console.log(data);
      document.getElementById(
        "text"
      ).innerHTML = `<span>Text:</span> ${data.sentence_list[0].text}`;
      document.getElementById(
        "agreement"
      ).innerHTML = `<span>Agreement:</span> ${data.agreement}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `<span>Subjectivity:</span> ${data.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `<span>Confidence:</span> ${data.confidence}`;
      document.getElementById(
        "irony"
      ).innerHTML = `<span>Irony:</span> ${data.irony}`;
      document.getElementById(
        "score_tag"
      ).innerHTML = `<span>Polarity:</span> ${data.score_tag}`;
    });
  } else {
    alert("invalid URL Please try again with a valid one");
  }
}

const post = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export { handleSubmit };
