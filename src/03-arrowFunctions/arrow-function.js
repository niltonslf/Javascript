const countries = ["United States", "Canada", "Europe"];

const myPlan = countries.map(function(country) {
  return `I wanna visit ${country}`;
});

const myPlanFunction = countries.map(visit);
function visit(country) {
  return `I wanna visit ${country}`;
}

const myPlanArrow = countries.map(country => {
  return `I wanna visit ${country}`;
});

const myPlanArrowOneLine = countries.map(country => `I wanna visit ${country}`);

const myPlanChain = countries
  .filter(country => country == "Canada")
  .map(country => `I wanna visit ${country}`);

console.log(myPlanChain);
