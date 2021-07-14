import DigitalPainting from "./component/DigitalPainting/DigitalPainting";
import GraphicDesign from "./component/GraphicDesign/GraphicDesign";
import CharacterDesign from "./component/Character Design/CharacterDesign";
import PhotoDesign from "./component/Photoshop/PhotoDesign";
import AnimationDesign from "./component/DesignAnimation/AnimationDesign";
import ContentDesign from "./component/ContentWriting/ContentDesign";
import AndroidDesign from "./component/AndroidDesign/AndroidDesign";
import FullStackDesign from "./component/FullStack/FullStackDesign";
import InteriorDesign from "./component/Interior/InteriorDesign";
import KindleDesign from "./component/Kindle/KindleDesign";
import BasicDesign from "./component/ExcelBasic/BasicDesign";
import IntermediateDesign from "./component/ExcelIntermediate/IntermediateDesign";
import AdvanceDesign from "./component/ExcelAdvance/AdvanceDesign";
import Animation3d from "./component/Animation3d/Animation3d";
import Textile from "./component/Textile/TextileCourse";
import Game from "./component/Game/GameDesign";
import React from "./component/ReactCourse/ReactCourse";
import Python from "./component/PythonDjango/PythonCourse";
import Shopify from "./component/Shopify/ShopifyCourse";
import ExpertLevelOne from "./component/ExcelExpertLevel1/Excel1Course";
import ExpertLevelTwo from "./component/ExcelExpertLevel2/Excel2Course";
import ExpertLevelThree from "./component/ExcelExpertLevel3/Excel3Course";
import Amazon from "./component/Amazon/AmazonCourse";
import Dmm from "./component/DMM/DmmCourse";
import Freelancing from "./component/Freelancing/Freelancing";
import Smm from "./component/SocialMediaMarketing/Smm";
import SpokenEnglish from "./component/SpokenEnglish/SpokenEnglish";
import Youtube from "./component/Youtube/YoutubeCourse";
import HomePage from "./component/HomePage/HomePage";
import Auth from "./component/Signin Page/auth";
import Explore from "./component/Explore/ExploreTopics";
import Enroll from "./component/EnrollPage/Enroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/allSubjects">
            <Explore />
          </Route>


          //DesigningPoster
          <Route path="/graphic">
            <GraphicDesign />
          </Route>
          <Route path="/digital">
            <DigitalPainting />
          </Route>
          <Route path="/character">
            <CharacterDesign />
          </Route>
          <Route path="/interior">
            <InteriorDesign />
          </Route>
          <Route path="/2D-3DAnimation">
            <AnimationDesign />
          </Route>
          <Route path="/photoshop">
            <PhotoDesign />
          </Route>
          <Route path="/3d-Animation">
            <Animation3d />
          </Route>
          <Route path="/textile">
            <Textile />
          </Route>


          //ExcelPoster
          <Route path="/excelBasic">
            <BasicDesign />
          </Route>
          <Route path="/excelIntermediate">
            <IntermediateDesign />
          </Route>
          <Route path="/excelAdvance">
            <AdvanceDesign />
          </Route>
          <Route path="/expertLevel1">
            <ExpertLevelOne />  
          </Route>
          <Route path="/expertLevel2">
            <ExpertLevelTwo />
          </Route>
          <Route path="/expertLevel3">
            <ExpertLevelThree />
          </Route>
         


          //Development Poster
          <Route path="/game">
             <Game /> 
          </Route>
          <Route path="/react">
            <React />
          </Route>
          <Route path="/android">
            <AndroidDesign />
          </Route>
          <Route path="/fullStack">
            <FullStackDesign />
          </Route>
          <Route path="/python">
            <Python />
          </Route>
          <Route path="/shopify">
            <Shopify />
          </Route>



          <Route path="/amazon">
            <Amazon />
          </Route>

          <Route path="/dmm">
            <Dmm />
          </Route>

          <Route path="/freelancing">
            <Freelancing />
          </Route>

          <Route path="/smm">
            <Smm />  
          </Route>

          <Route path="/spokenEnglish">
            <SpokenEnglish />
          </Route>

          <Route path="/youtube">
             <Youtube /> 
          </Route>

          <Route path="/contentWriting">
            <ContentDesign />
          </Route>
          <Route path="/kindle">
            <KindleDesign />
          </Route>
          <Route path="/enroll">
            <Enroll />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
