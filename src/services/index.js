
export async function fetchTransactionsByMonth(month) {
    try {
      const response = await fetch(`http://localhost:3000/transactions?date_like=${month}`);
      
      if (!response.ok) {
        const errorMessage = `Error get dataTransactiony : ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

export async function postTransaction(transaction) {
  try {
    const response = await fetch(`http://localhost:3000/transactions`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });

    if(!response.ok){
      const errorMessage = `Error send transaction : ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return response.json();
  } catch (error) {
    console.error('Error post tansaction:' , error);
    return null;
    
  }
}

