import axios from 'axios';

export default async function handler(req, res) {
  const { country, category, page, pageSize } = req.query;

  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country,
        category,
        page,
        pageSize,
        apiKey: '6517c7f12e7140328cc1277ec3ed050a' // Keep this hidden in backend
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Error fetching news' });
  }
}
