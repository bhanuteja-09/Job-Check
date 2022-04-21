import { useEffect, useState } from "react";

function ViewJobPostStatistics() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `  http://localhost:5000/comments`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getComments();
  }, [limit]);

  return (
    <div className="container">
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="col-sm-4 col-md-4 v my-2"
              style={{ position: "relative" }}
            >
              <div className="card shadow-sm w-60" style={{ minHeight: 105 }}>
                <div className="card-body">
                  <p className="card-title text-center ">{item.id} </p>
                  <h2 className="card-subtitle mb-2 text-muted text-center">
                    {item.body}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewJobPostStatistics;
