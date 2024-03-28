import React, { FC, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../src/components/Pre";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import About from "./components/pages/About/About";
import Resume from "./components/pages/Resume/Resume";
import Footer from "./components/common/footer/Footer";
import {
  SET_IS_DESKTOP,
  SET_IS_MOBILE,
  SET_SCREENSIZE,
} from "./state/actions/types/screenSizeType";
import { useDispatch } from "react-redux";
import NavBar from "./components/common/navbar/Navbar";

const App: FC = () => {
  const dispatch = useDispatch();
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      dispatch({
        type: SET_IS_MOBILE,
        payload: true,
      });
    } else {
      dispatch({
        type: SET_IS_DESKTOP,
        payload: true,
      });
    }
    dispatch({
      type: SET_SCREENSIZE,
      payload: window.innerWidth,
    });
    let elements: any = document.getElementsByClassName("resize");
    if (elements.length < 0) {
      return;
    }
    let len = elements.length;
    for (let i = 0; i < len; i++) {
      let el: HTMLElement = elements[i];
      el.style.fontSize = "100%";
      for (var size = 100; el.scrollHeight > el.clientHeight; size -= 10) {
        el.style.fontSize = size + "%";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        {<Footer />}
      </div>
    </>
  );
};

export default App;
