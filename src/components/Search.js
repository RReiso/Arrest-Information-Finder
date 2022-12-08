import React, { useEffect, useRef, useCallback, useState } from "react";
import { useGlobalContext } from "../context";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";

const URL =
  "https://cors-anywhere-fxcr.vercel.app/https://www.JailBase.com/api/1/search/?source_id=";

const Search = () => {
  const firstUpdate = useRef(true);
  const [textInput, setTextInput] = useState("");
  const [dropdown, setDropdown] = useState("");
  const { setLoading, setPeople } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextInput(e.target[0].value);
    setDropdown(e.target[1].value);
  };

  const fetchPeople = useCallback(async () => {
    console.log("fethching");
    try {
      setLoading(true);
      const response = await fetch(`${URL}${dropdown}&last_name=${textInput}`);
      const data = await response.json();
      const { records } = data;
      setLoading(false);
      if (records) {
        setPeople(records);
      } else {
        setPeople([]);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [textInput, dropdown, setLoading, setPeople]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchPeople();
  }, [textInput, dropdown, fetchPeople]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextInput />
      <Dropdown />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
