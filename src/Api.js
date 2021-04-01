import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Api = () => {
  const { id } = useParams();
  const url = `https://cherry-cupcake-02141.herokuapp.com/therapist/${id}`;

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
