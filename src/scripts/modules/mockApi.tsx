import * as React from 'react';

type MockApiExampleListingProps = {
  endpoint: string;
  heading: string;
};

type MockApiResult = {
  id: number;
  title: string;
  author?: string;
  occupation?: string;
  image?: string;
};

const MockApiExample: React.FC<MockApiExampleListingProps> = ({ endpoint, heading }) => {
  const [results, setResults] = React.useState<MockApiResult[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchResults = React.useCallback(async () => {
    if (!endpoint) return;
    setLoading(true);
    const response = await fetch(`${endpoint}`);

    if (response.status === 200) {
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error('Data is not an array');
      setResults(data);
      setLoading(false);
    } else {
      setError(`Something went wrong with the request. Status: ${response.status}`);
      setLoading(false);
    }
  }, [endpoint]);

  React.useEffect(() => {
    fetchResults();
  }, []);

  if (loading) {
    return (
      <div className="mock-api__loader align-items-center justify-content-center row">
        <div className="mock-api__loader-symbol"></div>
      </div>
    );
  }

  return (
    <>
      <h2 className="mock-api__heading">{heading}</h2>
      {error && <p>{error}</p>}
      {!error && (!results || results?.length === 0) && <p>No results found</p>}
      {results && results.length > 0 && (
        <ul className="justify-content-center row row--vertical-gap">
          {results.map((result, i) => (
            <li key={i} className="col-lg-3 col-md-4 col-sm-6">
              <div
                className={`mock-api__card-item ${
                  result.image ? 'mock-api__card-item--w-image' : ''
                }`}
              >
                {result.image ? (
                  <img
                    className="mock-api__card-item-image"
                    src={result.image}
                    alt={result.title}
                  />
                ) : (
                  <div className="mock-api__card-pattern">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 242" fill="none">
                      <path
                        fill="#6A2FF3"
                        d="M127.576 8 .286 81.43l.284.491H0v71.586l63.182-36.473 63.841 37.132.29.17 62.498-37.025-62.235-36.316V8Zm-62.41 37.325L126.43 9.984v69.265h-.021v1.144L65.166 45.325Zm-1.417 70.712V46.144l.269-.156 62.391 35.725v70.772l-62.66-36.448ZM1.146 82.257l61.456-35.453v69.241L1.146 151.523V82.257Zm126.409.053 59.995 35.008-59.995 35.543V82.31Z"
                      />
                      <path
                        fill="#6A2FF3"
                        d="m63.146 204.25 62.037 35.82 62.037-35.82v-69.265l-61.75 35.647-.287.166-62.037-35.813v69.265ZM188.366 133v71.911l-62.896 36.318-.287.165-62.896-36.317-.287-.166V133l63.183 36.475L188.366 133Z"
                      />
                      <path
                        fill="#FFB800"
                        d="m202.963 108.031 63.633 37.108 62.378-35.761-63.225-37.53-.585.986 61.537 36.527-60.1 34.455-62.492-36.443.047-70.274h-1.145l-.048 70.932Z"
                      />
                      <path
                        fill="#6A2FF3"
                        d="M203.183 36.475 140 0v71.912l62.897 36.317.286.166 62.897-36.317.286-.166V0l-63.183 36.475Zm62.037-34.49V71.25l-62.037 35.82-62.037-35.82V1.985l61.751 35.647.286.166L265.22 1.985Z"
                      />
                    </svg>
                  </div>
                )}
                <h3 className="mock-api__card-item-title">{result.title}</h3>
                {(result.author || result.occupation) && (
                  <p className="mock-api__card-item-info">
                    {result.author} {result.author ? '|' : ''}
                    {result.occupation}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MockApiExample;
