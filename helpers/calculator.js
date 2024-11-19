const calculateAverageCondition = (data, condition) => {
  if (!Array.isArray(data) || data.length === 0) {
    return 0;
  }

  const totalPrecipitation = data.reduce(
    (sum, item) => sum + (item[condition] || 0),
    0
  );
  const averagePrecipitation = totalPrecipitation / data.length;

  return averagePrecipitation.toFixed(2);
};

module.exports = calculateAverageCondition;
