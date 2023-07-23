import { useEffect, useState } from "react";

function useBalance(dataMonth) {

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      //Lista de ingresos
      const arrayIncomes = dataMonth
        ? dataMonth.filter(
            (transaction) => transaction.typeOperation === "ingreso"
          )
        : [];
      const arrayAmountPositive = arrayIncomes
        ? arrayIncomes.map((transaction) => ({
            amount: transaction.amount,
          }))
        : 0;

      //Lista de egresos
      const arrayExpense = dataMonth
        ? dataMonth.filter(
            (transaction) => transaction.typeOperation === "retiro"
          )
        : [];
      const arrayAmountNegative = arrayExpense
        ? arrayExpense.map((transaction) => ({
            amount: transaction.amount,
          }))
        : 0;

      function count(array) {
        if (!Array.isArray(array)) {
          return 0;
        }

        let total = 0;

        array.forEach((income) => {
          total = total + parseFloat(income.amount);
        });

        return total;
      }

      function balance(income, expense) {
        return income - expense;
      }

      const totalIncome = count(arrayAmountPositive);
      const totalExpense = count(arrayAmountNegative);
      setLoading(false);
      setIncome(totalIncome);
      setExpense(totalExpense);
      setBalance(balance(totalIncome, totalExpense));
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [dataMonth]);

  return { income, expense, balance, loading, error };
}

export { useBalance };
