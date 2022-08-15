import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  console.log("entered watch page");
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
{ movie &&      <video className="video" autoPlay progress controls src={movie.video} />}
  
{!movie && <h1 className="t-4">No trailer for this movie!</h1>}  
  
    </div>
  );
}