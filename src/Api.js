import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Api = () => {
  const { id } = useParams()
  const url = `http://localhost:3000/${id}`;
  const [therapists, setTherapists] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setTherapists(response.data);
    });
  }, [url]);

  if (therapists) {
    content = (
      <div>
        <h1>{content.name}</h1>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Api;
