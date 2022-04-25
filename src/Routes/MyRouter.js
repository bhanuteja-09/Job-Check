import React from "react";
import { Route, Routes } from "react-router";
import ViewAllRequirements from "../Modules/Recruitment/JobRequirements/Pages/ViewAllRequirements/ViewAllRequirements";
import AddRequirement from "../Modules/Recruitment/JobRequirements/Pages/AddRequirement/AddRequirement";
import EditRequirement from "../Modules/Recruitment/JobRequirements/Pages/EditRequirement/EditRequirement";
import CandidateDetails from "../Modules/Recruitment/JobRequirements/Pages/EditRequirement/CandidateDetails";
import AdditionalDetails from "../Modules/Recruitment/JobRequirements/Pages/EditRequirement/AdditionalDetails";
import SearchSubscription from "../Modules/Admin/Subscriptions/Pages/SearchSubscription/SearchSubscriptions";
import ViewSIngleSubscription from "../Modules/Admin/Subscriptions/Pages/Home/Components/View/ViewSIngleSubscription";
import AddSubscription from "../Modules/Admin/Subscriptions/Pages/AddSubscription/AddSubscription";
import EditSubscriptions from "../Modules/Admin/Subscriptions/Pages/EditSubs/EditSubscriptions";
import DraftRequirement from "../Modules/Recruitment/JobRequirements/Pages/ViewRequireDrafts/ViewRequirementDrafts";
import ViewJobPosts from "../Modules/Recruitment/JobPosts/Pages/ViewJobPost/ViewJobPosts";
import AddJobPost from "../Modules/Recruitment/JobPosts/Pages/NewJobPost/AddJobPost";
const MyRouter = () => {
  return (
    <div>
      <Routes>
        {/* Home */}
        <Route exact path="/" />

        {/* JobPost */}
        <Route exact path="/JobPost" element={<ViewJobPosts />} />
        <Route path="/NewJobPosts" element={<AddJobPost />} />

        {/* Requirement */}

        <Route exact path="/Requirements" element={<ViewAllRequirements />} />
        <Route exact path="/addrequirement" element={<AddRequirement />} />
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
        <Route exact path="/DraftRequirement" element={<DraftRequirement />} />

        {/* Subscription */}
        <Route
          exact
          path="/SearchSubscription"
          element={<SearchSubscription />}
        />
        <Route
          path="/ViewSIngleSubscription/:id"
          element={<ViewSIngleSubscription />}
        />
        <Route path="/AddSubscription" element={<AddSubscription />} />
        <Route path="/EditSubscriptions/:id" element={<EditSubscriptions />} />
      </Routes>
    </div>
  );
};

export default MyRouter;
