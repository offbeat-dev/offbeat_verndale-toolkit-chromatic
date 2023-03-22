import * as React from 'react';

type MockApiExampleListingProps = {
  endpoint: string;
  heading: string;
};

type MockApiExampleItem = {
  title: string;
  episode_id: string;
  opening_crawl: string;
};

type EndpointResponse = {
  items: MockApiExampleItem[];
};

const MockApiExample: React.FC<MockApiExampleListingProps> = ({
  endpoint,
  heading
}) => {
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
      <div className="mock-api__loader">
        <div className="mock-api__loader-symbol"></div>
      </div>
    );
  }

  return (
    <>
      <h2>{heading}</h2>
      <ul className="mock-api__list row row--vertical-gap">
        {items.map(item => (
          <li key={item.episode_id} className="col-lg-4 col-md-6">
            <div className="mock-api__item">
              <h3>{item.title}</h3>
              <p>{item.opening_crawl}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MockApiExample;
