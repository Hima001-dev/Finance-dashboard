export const getHighestSpendingCategory = (transactions) => {
  const categoryTotals = {};

  transactions.forEach((transaction) => {
    if (transaction.type === "expense") {
      if (!categoryTotals[transaction.category]) {
        categoryTotals[transaction.category] = 0;
      }
      categoryTotals[transaction.category] += transaction.amount;
    }
  });

  let highestCategory = "";
  let highestAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return { highestCategory, highestAmount };
};

export const getMonthlySummary = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
    }
  });

  return { income, expense };
};