import React, { useState } from 'react';
import ViewJobPostStatistics from '../ViewJobPostStats/ViewJobPostStatistics';
import SearchJobPosts from './../SearchJobPost/SearchJobPosts';

export default function ViewJobPosts() {



  return (

    <div>
      <ViewJobPostStatistics />
      <SearchJobPosts />
    </div>
  );
}