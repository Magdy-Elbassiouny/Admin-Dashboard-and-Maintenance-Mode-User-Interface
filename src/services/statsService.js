// Mock data to use when API is not available
const mockStatsData = {
  events: 12,
  orders: 34,
  users: 5
};

// Function to fetch stats from the API
export const fetchStats = async () => {
  try {
    const response = await fetch('/api/admin/stats');
    
    if (response.ok) {
      return await response.json();
    } else {
      console.log('API returned an error, using mock data');
      return mockStatsData;
    }
  } catch (error) {
    console.log('API not available, using mock data');
    return mockStatsData;
  }
}; 