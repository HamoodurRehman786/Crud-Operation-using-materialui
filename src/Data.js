import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    axios
      .get("https://web-api-test1.herokuapp.com/users/all", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type":
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        },
      })
      .then((res) => {
        console.log("res ", res);
        // setTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch("https://web-api-test1.herokuapp.com/users/all", { mode: "cors" })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  });
  return (
    <div>
      {tableData.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </div>
  );
}

export default DataFetching;
