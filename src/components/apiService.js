const BASE_URL = 'http://localhost:3001';

const apiService = {
  getFoods: async () => {
    try {
      const response = await fetch(`${BASE_URL}/foods`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    }
  },
  
  addFood: async (foodData) => {
    try {
      const response = await fetch(`${BASE_URL}/foods`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    }
  },

  // Add other API methods as needed...
};

export default apiService;