import React,{Suspense,lazy} from "react";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";

const AddRequirement =lazy(()=>import("../Modules/Recruitment/JobRequirements/Pages/AddRequirement/AddRequirement"));
const EditRequirement =lazy(()=>import( "../Modules/Recruitment/JobRequirements/Pages/EditRequirement/EditRequirement"));
const CandidateDetails =lazy(()=>import( "../Modules/Recruitment/JobRequirements/Pages/EditRequirement/CandidateDetails"));
const AdditionalDetails =lazy(()=>import( "../Modules/Recruitment/JobRequirements/Pages/EditRequirement/AdditionalDetails"));
const SearchSubscription =lazy(()=>import( "../Modules/Admin/Subscriptions/Pages/SearchSubscription/SearchSubscriptions"));
const ViewSIngleSubscription =lazy(()=>import( "../Modules/Admin/Subscriptions/Pages/Home/Components/View/ViewSIngleSubscription"));
const AddSubscription =lazy(()=>import( "../Modules/Admin/Subscriptions/Pages/AddSubscription/AddSubscription"));
const EditSubscriptions =lazy(()=>import( "../Modules/Admin/Subscriptions/Pages/EditSubs/EditSubscriptions"));
const DraftRequirement =lazy(()=>import( "../Modules/Recruitment/JobRequirements/Pages/ViewRequireDrafts/ViewRequirementDrafts"));
const ViewJobPosts =lazy(()=>import( './../Modules/Recruitment/JobPosts/Pages/ViewJobPost/ViewJobPosts'));
const AddJobPost =lazy(()=>import( './../Modules/Recruitment/JobPosts/Pages/NewJobPost/AddJobPost'));
const EditJobPost =lazy(()=>import( './../Modules/Recruitment/JobPosts/Pages/EditJobPost/EditJobPost'));
const JobPostCandidateDetails =lazy(()=>import( './../Modules/Recruitment/JobPosts/Pages/EditJobPost/CandidateDetails'));
const JobPostAdditionalDetails =lazy(()=>import( './../Modules/Recruitment/JobPosts/Pages/EditJobPost/AdditionalDetails'));
const ViewAllRequirements =lazy(()=>import( "../Modules/Recruitment/JobRequirements/Pages/ViewAllRequirements/ViewAllRequirements"));

const MyRouter = () => {
  const {open} = useSelector((state)=>state.Common);
  return (
    <div style={ open ? { marginLeft:"230px"} : {marginLeft : 'auto'} }>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Home */}
        <Route exact path="/" />

        {/* JobPost */}
        <Route exact path="/JobPost" element={<ViewJobPosts />} />
        <Route path="/AddJobPost" element={<AddJobPost />} />
        <Route
          exact
          path="/EditJobPost/:id"
          element={<EditJobPost />}
        />
        <Route
          exact
          path="/JobPostCandidateDetails/:id"
          element={<JobPostCandidateDetails />}
        />
        <Route
          exact
          path="/JobPostAdditionalDetails/:id"
          element={<JobPostAdditionalDetails />}
        />

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
      </Suspense>
    </div>
  );
};

export default MyRouter;
