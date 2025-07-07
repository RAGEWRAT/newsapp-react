export const endpointPath = (country, category, page, pageSize) =>
  `/api/news?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}`;
