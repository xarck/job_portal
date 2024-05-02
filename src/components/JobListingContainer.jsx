import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "./JobCard";
import FilterBar from "./FilterBar";
import jobListings from "../data/jobListing";
import filterJobs from "../utils/filterJob";

const JobListingContainer = () => {
    const dispatch = useDispatch();
    const jobListingsState = useSelector((state) => state.jobListings);
    const filtersState = useSelector((state) => state.filters);
    const currentPage = useSelector((state) => state.currentPage);

    const filteredJobs = filterJobs(jobListingsState, filtersState);

    const jobsPerPage = 6;

    const handleScroll = useCallback(() => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            const startIndex = (currentPage - 1) * jobsPerPage;
            const endIndex = startIndex + jobsPerPage;
            const nextPageJobs = jobListings.slice(startIndex, endIndex);
            dispatch({
                type: "SET_JOB_LISTINGS",
                payload: [...jobListingsState, ...nextPageJobs],
            });

            dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 });
        }
    }, [dispatch, currentPage, jobListingsState, jobsPerPage]);

    useEffect(() => {
        dispatch({
            type: "SET_JOB_LISTINGS",
            payload: jobListings.slice(0, jobsPerPage),
        });
    }, [dispatch, jobsPerPage]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="container mx-auto px-4">
            <FilterBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobListingContainer;
