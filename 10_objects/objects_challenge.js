const cohort = {
    name:'May2022',
    id: 1234,
    studentNames: ['Beyonce', 'Kelly', 'Michelle' ]
};

const displayCohort = (cohort) => {
   return `${cohort.id} ${cohort.name} ${cohort.studentNames.length} students in this cohort`;
}

console.log(displayCohort(cohort));