import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home, { HomeSections } from "../pages/Home";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import JapanesePsychology from "../pages/JapanesePsychology";
import SomanticExperience from "../pages/SomanticExperience";
import IntegratedYogaExercise from "../pages/IntegratedYogaExercise";
import SpiritualPsychology from "../pages/SpiritualPsychology";
import SpiritualTapping from "../pages/SpiritualTapping";
import EmotionalFreedom from "../pages/EmotionalFreedom";
import SportsPsychology from "../pages/SportsPsychology";
import BioFeedback from "../pages/BioFeedback";
import NeurolinguisticProgramming from "../pages/NeurolinguisticProgramming";
import TimeManagement from "../pages/TimeManagement";
import CognitiveBehaviourTherapy from "../pages/CognitiveBehaviourTherapy";
import EmotionalQuotientManagement from "../pages/EmotionalQuotientManagement";
import Store from "../pages/Store";
import Careox from "../pages/Careox";
import Connect from "../pages/Connect";
import About from "../pages/About";
import ProductCareoxCalendar       from "../pages/ProductCareoxCalendar";
import ProductLeatherJournal       from "../pages/ProductLeatherJournal";
import ProductFortificationProgram from "../pages/ProductFortificationProgram";
import WhatIsCareox                from "../pages/WhatIsCareox";
import CommonConcerns              from "../pages/CommonConcerns";
import WhoWeAre                    from "../pages/WhoWeAre";

import TcHealingAmbassador         from "../pages/TcHealingAmbassador";
import Terms                       from "../pages/Terms";
import RefundPolicy                from "../pages/RefundPolicy";
import PrivacyPolicy               from "../pages/PrivacyPolicy";
import HealingAmbassador           from "../pages/HealingAmbassador";
import ShippingPolicy              from "../pages/ShippingPolicy";
import CareoxExperiencePage from "../pages/CareoxExperience";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>

        
          <Route index element={<Home />} />

    
          <Route path="home" element={<HomeSections />} />

          <Route path="page1"   element={<PageOne />} />
          <Route path="page2"   element={<PageTwo />} />
          <Route path="japanese-psychology"           element={<JapanesePsychology />} />
          <Route path="somatic-experience"            element={<SomanticExperience />} />
          <Route path="integrated-yoga-exercise"      element={<IntegratedYogaExercise />} />
          <Route path="spiritual-psychology"          element={<SpiritualPsychology />} />
          <Route path="spiritual-tapping"             element={<SpiritualTapping />} />
          <Route path="emotional-freedom"             element={<EmotionalFreedom />} />
          <Route path="sports-psychology"             element={<SportsPsychology />} />
          <Route path="bio-feedback"                  element={<BioFeedback />} />
          <Route path="neurolinguistic-programming"   element={<NeurolinguisticProgramming />} />
          <Route path="time-management"               element={<TimeManagement />} />
          <Route path="cognitive-behaviour-therapy"   element={<CognitiveBehaviourTherapy />} />
          <Route path="emotional-quotient-management" element={<EmotionalQuotientManagement />} />
          <Route path="store"   element={<Store />} />
          <Route path="Careox"  element={<Careox />} />
          <Route path="Connect" element={<Connect />} />
          <Route path="About"   element={<About />} />
          <Route path="product/careox-4-week-mental-health-fortification-program" element={<ProductFortificationProgram />} />
          <Route path="product/careox-program-printable-calendar"                 element={<ProductCareoxCalendar />} />
          <Route path="product/journal-mental-healthcare-leather-journal"         element={<ProductLeatherJournal />} />
          <Route path="what-is-careox"        element={<WhatIsCareox />} />
          <Route path="common-concerns"       element={<CommonConcerns />} />
          <Route path="who-we-are"            element={<WhoWeAre />} />
          
          <Route path="tc-healing-ambassador" element={<TcHealingAmbassador />} />
          <Route path="terms"                 element={<Terms />} />
          <Route path="refund-policy"         element={<RefundPolicy />} />
          <Route path="privacy-policy"        element={<PrivacyPolicy />} />
          <Route path="healing-ambassador"    element={<HealingAmbassador />} />
          <Route path="shipping-policy"       element={<ShippingPolicy />} />
          <Route path="careox-experience" element={<CareoxExperiencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
