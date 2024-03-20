import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [bootData, setBootData] = useState([]);
  let bootID = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/boote/details/${bootID.id}`)
      .then((res) => res.json())
      .then((data) => {
        setBootData(data);
      });
  }, [bootID.id]);

  console.log(bootData.name);

  return (
    <>
      <div key={bootData.name} className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={bootData.imageURL} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bootData.name}</h2>
          <p>{bootData.rating} ⭐</p>
          <p>{bootData.seats} Sitze</p>
          <p>{bootData.horsePower}</p>

          <div className="card-actions justify-end">
            <a href={`../gallery`} className="btn btn-primary">
              Zurück
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
