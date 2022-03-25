import React from "react";
import { Route, Routes } from "react-router";
import SearchJobPosts from "../Modules/Recruitment/JobPosts/Pages/SearchJobPost/SearchJobPosts";
import ViewJobPostss from "../Modules/Recruitment/JobPosts/Pages/ViewJobPost/ViewJobPostss";
import NewJobPostss from "../Modules/Recruitment/JobPosts/Pages/NewJobPost/NewJobPostss";
import SearchRequirements from "../Modules/Recruitment/JobRequirements/Pages/ViewAllRequirements/ViewAllRequirements";
import NewRequirement from "../Modules/Recruitment/JobRequirements/Pages/AddRequirement/NewRequirement";
import EditRequirement from "../Modules/Recruitment/JobRequirements/Pages/EditRequire/EditRequirement ";
import Edit3 from "../Modules/Recruitment/JobRequirements/Pages/EditRequire/Edit3";
import Edit2 from "../Modules/Recruitment/JobRequirements/Pages/EditRequire/Edit2";
import SearchSubscription from "../Modules/Admin/Subscriptions/Pages/SearchSubscription/SearchSubscriptions";
import ViewSingleSubscription from "../Modules/Admin/Subscriptions/Pages/Home/Components/View/ViewSIngleSubscription";
import AddSubscription from "../Modules/Admin/Subscriptions/Pages/AddSubscription/AddSubscription";
import EditSubscriptions from "../Modules/Admin/Subscriptions/Pages/EditSubs/EditSubscriptions";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        {/* Home */}
        <Route exact path="/" element={<SearchJobPosts />} />

        {/* ProfileSearch */}
        <Route exact path="/ProfileSearch" element={<SearchJobPosts />} />

        {/* JobPost */}
        <Route exact path="/JobPost" element={<ViewJobPostss />} />
        <Route path="/NewJobPostss" element={<NewJobPostss />} />

        {/* Requirement */}
        <Route exact path="/ViewAllRequirements" element={<SearchRequirements />} />
        <Route path="/NewRequirement" element={<NewRequirement />} />
        <Route path="/EditRequirement" element={<EditRequirement />} />
        <Route path="/Candidate-details" element={<Edit2 />} />
        <Route path="/Educational-Details" element={<Edit3 />} />

        {/* Analytics */}
        <Route exact path="/Analytics" element={<SearchJobPosts />} />

        {/* Users */}
        <Route exact path="/Users" element={<SearchJobPosts />} />

        {/* Subscription */}
        <Route exact path="/SearchSubscription" element={<SearchSubscription />} />
        <Route path="/ViewSingleSubscription" element={<ViewSingleSubscription />}/>
        <Route path="/AddSubscription" element={<AddSubscription />} />
        <Route path="/EditSubscriptions" element={<EditSubscriptions />} />
      </Routes>
    </div>
  );
};

export default MyRouter;
