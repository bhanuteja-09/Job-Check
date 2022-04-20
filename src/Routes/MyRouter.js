import React from "react";
import { Route, Routes } from "react-router";
import SearchJobPosts from "../Modules/Recruitment/JobPosts/Pages/SearchJobPost/SearchJobPosts";
import ViewJobPostss from "../Modules/Recruitment/JobPosts/Pages/ViewJobPost/ViewJobPostss";
import NewJobPostss from "../Modules/Recruitment/JobPosts/Pages/NewJobPost/NewJobPostss";
import ViewAllRequirements from "../Modules/Recruitment/JobRequirements/Pages/ViewAllRequirements/ViewAllRequirements";
import AddRequirement from "../Modules/Recruitment/JobRequirements/Pages/AddRequirement/AddRequirement";
import EditRequirement from "../Modules/Recruitment/JobRequirements/Pages/EditRequire/EditRequirement";
import CandidateDetails from "../Modules/Recruitment/JobRequirements/Pages/EditRequire/CandidateDetails";
import AdditionalDetails from "../Modules/Recruitment/JobRequirements/Pages/EditRequire/AdditionalDetails";
import SearchSubscription from "../Modules/Admin/Subscriptions/Pages/SearchSubscription/SearchSubscriptions";
import ViewSIngleSubscription from "../Modules/Admin/Subscriptions/Pages/Home/Components/View/ViewSIngleSubscription";
import AddSubscription from "../Modules/Admin/Subscriptions/Pages/AddSubscription/AddSubscription";
import EditSubscriptions from "../Modules/Admin/Subscriptions/Pages/EditSubs/EditSubscriptions";
import ViewRequirementStats from "../Modules/Recruitment/JobRequirements/Pages/ViewRequireStats/ViewRequirementStats";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        {/* Home */}
        <Route exact path="/"  />

        {/* ProfileSearch */}
        <Route exact path="/ProfileSearch" element={<SearchJobPosts />} />

        {/* JobPost */}
        <Route exact path="/JobPost" element={<ViewJobPostss />} />
        <Route path="/NewJobPostss" element={<NewJobPostss />} />

        {/* Requirement */}
       
       
       
  
        <Route exact path="/Requirements" element={<ViewAllRequirements />} />
        <Route exact path="/addrequirement" element={<AddRequirement/>} />
        <Route
          exact
          path="/editrequirement/:id"
          element={<EditRequirement />}
        />
        <Route
          exact
          path="/CandidateDetails/:id"
          element={<CandidateDetails />}
        />
        <Route
          exact
          path="/AdditionalDetails/:id"
          element={<AdditionalDetails />}
        />
        
     

        {/* Analytics */}
        <Route exact path="/Analytics" element={<SearchJobPosts />} />

        {/* Users */}
        <Route exact path="/Users" element={<SearchJobPosts />} />

        {/* Subscription */}
        <Route exact path="/SearchSubscription" element={<SearchSubscription />} />
        <Route path="/ViewSIngleSubscription" element={<ViewSIngleSubscription />} />
        <Route path="/AddSubscription" element={<AddSubscription />} />
        <Route path="/EditSubscriptions" element={<EditSubscriptions />} />
      </Routes>
    </div>
  );
};

export default MyRouter;
