export const getDeadlines = async () => {
    const response = await fetch("http://localhost:5000/deadlines");
    return response.json();
  };
  