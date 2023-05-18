import { useRouteError } from "react-router-dom";
import img from "../../assets/photo/undraw_Page_not_found_re_e9o6.png"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" >
      <div className="items-center mx-auto my-auto">
        <h1 className="text-center text-5xl font-medium mt-10">Oops!</h1>
        <div >
          <img className="mt-5 w-2/4 mx-auto " src={img} alt="" />
        </div>
      </div>

    </div>
  );
}