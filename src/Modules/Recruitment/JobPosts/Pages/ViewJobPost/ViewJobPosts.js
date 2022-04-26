import { Container } from "@mui/material";
import React from "react";
import ViewJobPostStatistics from "../ViewJobPostStats/ViewJobPostStatistics";
import SearchJobPosts from "./../SearchJobPost/SearchJobPosts";

export default function ViewJobPosts() {
  return (
    <Container>
        <ViewJobPostStatistics />
        <SearchJobPosts />
    </Container>
  );
}
