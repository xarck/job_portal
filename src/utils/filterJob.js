const filterJobs = (jobListings, filters) => {
    return jobListings.filter((job) => {
        const matchesExperience = job.experience >= filters.minExperience;
        const matchesCompany = filters.companyName
            ? job.company
                  .toLowerCase()
                  .includes(filters.companyName.toLowerCase())
            : true;
        const matchesLocation = filters.location
            ? job.location
                  .toLowerCase()
                  .includes(filters.location.toLowerCase())
            : true;
        const matchesRemote =
            filters.remote === null || job.remote === filters.remote;
        const matchesTechStack =
            filters.techStack.length === 0 ||
            job.techStack.some((t) => filters.techStack.includes(t));
        const matchesRole = filters.role
            ? job.role.toLowerCase() === filters.role.toLowerCase()
            : true;
        const matchesMinBasePay = job.minBasePay >= filters.minBasePay;

        return (
            matchesExperience &&
            matchesCompany &&
            matchesLocation &&
            matchesRemote &&
            matchesTechStack &&
            matchesRole &&
            matchesMinBasePay
        );
    });
};

export default filterJobs;
