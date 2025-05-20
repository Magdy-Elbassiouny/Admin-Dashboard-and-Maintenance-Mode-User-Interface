import React, { useState, useEffect } from 'react';
import { fetchStats } from '../../services/statsService';

const StatsSection = () => {
  const [stats, setStats] = useState({ events: 0, orders: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStats = async () => {
      try {
        setLoading(true);
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, []);

  if (loading) {
    return <div className="stats-loading">Loading stats...</div>;
  }

  return (
    <div className="stats-section">
      <h2>Site Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Events</h3>
          <p className="stat-value">{stats.events}</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat-value">{stats.orders}</p>
        </div>
        <div className="stat-card">
          <h3>Users</h3>
          <p className="stat-value">{stats.users}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection; 