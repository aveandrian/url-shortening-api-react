import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "../styles/LinkShortener.css";
import SuggestedLink from "./SuggestedLink";
import axios from "axios";

export default function LinkShortener() {
  const [linkInput, setLinkInput] = useState("");
  const [error, setError] = useState(null);
  const [shortLinksList, setShortLinksList] = useState(null);
  const TOKEN = "jyIhoMzE4jvhhmlnaOgrs2jRTRGf4yoraYeRlHDhaoRRpDtWi8YGX6WlEKz7";

  useEffect(() => {
    let savedLinks = window.localStorage.getItem("shortenedLinks");
    if (JSON.parse(savedLinks)) {
      setShortLinksList(JSON.parse(savedLinks));
    } else setShortLinksList([]);
  }, []);

  useEffect(() => {
    if (shortLinksList)
      window.localStorage.setItem(
        "shortenedLinks",
        JSON.stringify(shortLinksList)
      );
  }, [shortLinksList]);

  function handleChange(e) {
    setError(null);
    setLinkInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (linkInput == "" || !isValidURL(linkInput))
      return setError("Please add a valid link");

    try {
      const { data } = await axios.post(
        `https://api.tinyurl.com/create?api_token=${TOKEN}`,
        {
          url: linkInput,
        }
      );
      setShortLinksList((prev) => [
        ...prev,
        {
          id: nanoid(),
          fullLink: linkInput,
          shortLink: data.data.tiny_url,
        },
      ]);
    } catch (err) {
      setError(err);
    }
    setLinkInput("");
  }

  function isValidURL(str) {
    var httpRegex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if (httpRegex.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="link-shortener-container">
      <div className="link-shortner-wrapper">
        <form onSubmit={handleSubmit} className="link-shortener-form">
          <input
            className={`link-input ${error ? "input-error" : ""}`}
            type="text"
            placeholder="Shorten a link here..."
            value={linkInput}
            onChange={handleChange}
          />
          <input
            className="shorten-btn"
            type="submit"
            value="Shorten it!"
          ></input>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      {shortLinksList &&
        shortLinksList.map((shortLinkListItem) => (
          <SuggestedLink key={shortLinkListItem.id} {...shortLinkListItem} />
        ))}
    </div>
  );
}
