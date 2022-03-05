import React, { useEffect,useState } from 'react';
import Map from "../map/map";

    
interface Iprops {
  onChange: () => void;
  handleSubmit:() =>void;
  searchPlace: () => void;
}

const SearchPlace = () => {
  const [inputText, setInputText] = useState<any>("");
  const [place, setPlace] = useState<any>("");

  const onChange = (e:any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">검색</button>
      </form>
      <Map {...place}/>
    </>
  );
};

export default SearchPlace;
