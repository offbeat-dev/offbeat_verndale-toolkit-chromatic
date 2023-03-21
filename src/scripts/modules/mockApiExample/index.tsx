import * as React from 'react';

type MockApiExampleListingProps = {
  endpoint: string;
};

type MockApiExampleItem = {
  title: string;
  episode_id: string;
  opening_crawl: string;
};

type EndpointResponse = {
  items: MockApiExampleItem[];
};

const MockApiExample: React.FC<MockApiExampleListingProps> = ({ endpoint }) => {
  const [items, setItems] = React.useState<MockApiExampleItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchResults = React.useCallback(() => {
    setLoading(true);
    fetch(`${endpoint}`)
      .then(response => response.json())
      .then((data: EndpointResponse) => {
        setItems([...items, ...data.items]);
        setLoading(false);
      });
  }, [endpoint]);

  React.useEffect(() => {
    fetchResults();
  }, []);

  if (loading) {
    return (
      <div className="mock-api-example__loader">
        <div className="mock-api-example__loader-symbol"></div>
      </div>
    );
  }

  return (
    <>
      <ul className="mock-api-example__list">
        {items.map(item => (
          <li key={item.episode_id}>
            <h3>{item.title}</h3>
            <p>{item.opening_crawl}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MockApiExample;
