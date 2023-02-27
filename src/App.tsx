import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Layout>
        <Detail />
      </Layout>
    </div>
  );
}

export default App;
