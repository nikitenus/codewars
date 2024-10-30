// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

function sorter(textbooks) {
    return textbooks.sort((a, b) => {
      const subjectA = a.toLowerCase();
      const subjectB = b.toLowerCase();
      if (subjectA < subjectB) {
        return -1;
      }
      if (subjectA > subjectB) {
        return 1;
      }
      return 0;
    });
  }