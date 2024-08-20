import { useState, useEffect } from 'react';

export default function useFetchMarkdown(fileName: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMarkdownData = async () => {
      try {
        const response = await fetch(`/api/markdown/${fileName}`);
        if (!response.ok) {
          throw new Error('File not found');
        }
        const { items } = await response.json();
        const data = items.map((item: any) => ({
          body: item.slide.body,
          image: item.cover,
        }));

        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMarkdownData();
  }, []);

  return data;
}
