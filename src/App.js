import Feature from "./component/Feature";
import Footer from "./component/Footer";
import Imagesection from "./component/Imagesection";
import Navbar from "./component/Navbar";
import Review from "./component/Review";
import Usage from "./component/Usage";
import Video from "./component/Video";
import What from "./component/What";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Imagesection />
      <Feature />
      <What />
      <Work />
      <Video />
      <Usage />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
