
export async function fetchTransactionsByMonth(month) {
    try {
      const response = await fetch(`http://localhost:3000/transactions?date_like=${month}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

