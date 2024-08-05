const findTheOldest = function (people) {
  const getAge = (person) => {
    if ("yearOfDeath" in person) {
      return person["yearOfDeath"] - person["yearOfBirth"];
    } else {
      return new Date().getFullYear() - person["yearOfBirth"];
    }
  };

  return people.reduce((oldest, person) => {
    if (getAge(person) > getAge(oldest)) {
      return person;
    }
    return oldest;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
