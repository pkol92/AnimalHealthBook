import FetchApi from '../../server/fetchAPI';

export const Home = () => {
  const header = 'Welcome to Super Store';
  const { shopData, error, loading } = FetchApi();
  return (
    <div>
      <h4>{header}</h4>

      {error ? (
        <div>Ups, something go wrong...</div>
      ) : (
        <div>
          {loading && <p>Loading data</p>}
          {!loading && (
            <ul>
              {shopData.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
