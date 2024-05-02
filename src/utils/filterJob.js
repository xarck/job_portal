const filterJobs = (jobListings, filters) => {
    const {
        minExperience,
        companyName,
        location,
        remote,
        techStack,
        role,
        minBasePay,
    } = filters;

    return jobListings.filter((job) => {
        const matchesExperience =
            job.experience >= minExperience || minExperience === 0;
        const matchesCompany = companyName
            ? job.company.toLowerCase().includes(companyName.toLowerCase())
            : true;
        const matchesLocation = location
            ? job.location.toLowerCase().includes(location.toLowerCase())
            : true;
        const matchesRemote = remote === null || job.remote === remote;
        const matchesTechStack =
            techStack.length === 0 ||
            job.techStack.some((t) => techStack.includes(t));
        const matchesRole = role
            ? job.role.toLowerCase() === role.toLowerCase()
            : true;
        const matchesMinBasePay =
            job.minBasePay >= minBasePay || minBasePay === 0;

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
