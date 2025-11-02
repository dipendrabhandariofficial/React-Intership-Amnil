import React, { use } from "react";
import Mainlayout from "../layouts/mainlayout/Mainlayout";
import { Routes, Route } from "react-router-dom";
import ButtonShowcase from "../showcase/buttonshowcase/ButtonShowcase";
import AccordionShowcase from "../showcase/accordionshowcase/AccordionShowcase";
import Overview from "../pages/Overview";
import NotFound from "../pages/Notfound";
import { Navigate } from "react-router-dom";
import SliderShowcase from "../showcase/slidershowcase/Slidershowcase";
import Dropdownshowcase from "../showcase/dropdownshowcase/Dropdownshowcase";
import TabShowcase from "../showcase/tabshowcase/Tabshowcase";
import ImageSliderShowcase from "../showcase/imageslidershowcase/Imageslidershowcase";
import UseLocalStorageShowcase from "../hookshowcase/localstorageshowcase/UseLocalStorageShowcase";
import UseThemeShowcase from "../hookshowcase/themeshowcase/UseThemeShowcase";
import UseToggleShowcase from "../hookshowcase/toggleshowcase/UseToggleShowcase";
import ClickOutsideShowcase from "../hookshowcase/clickoutsideshowcase/Clickoutsideshowcase";
import UseFormValidationShowcase from "../hookshowcase/formvalidationshowcase/UseFormValidationShowcase";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route path="/button" element={<ButtonShowcase/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accordion" element={<AccordionShowcase />} />
        <Route path="/dropdown" element={<Dropdownshowcase />} />
        <Route path="/slider" element={<SliderShowcase />} />
        <Route path="/tab" element={<TabShowcase />} />
        <Route path="/imageslider" element={<ImageSliderShowcase />} />


        {/* hooks  */}
        <Route path="/uselocalstorage" element={<UseLocalStorageShowcase />} />
        <Route path="/usetheme" element={<UseThemeShowcase />} />
        <Route path="/usetoggle" element={<UseToggleShowcase />} />
        <Route path="/useclickoutside" element={<ClickOutsideShowcase />} />
        <Route path="/useformvalidaton" element={<UseFormValidationShowcase/>} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
