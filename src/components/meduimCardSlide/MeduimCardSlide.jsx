import "./MeduimCardSlide.scss";
import Card from "./card/Card";

function MeduimCardSlide(props) {
  
  // console.log("MeduimCardSlide2", props.mockupdata.list[0]);
  return (
    <>

      <Card product={props.mockupdata.list[0]}/>
    </>
  );
}
export default MeduimCardSlide;
