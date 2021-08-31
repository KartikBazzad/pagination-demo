import { useEffect, useState } from 'react';
import { fetchUsers } from './utils/api';
import ReactPaginate from 'react-paginate';
import UserCard from './components/UserCard';
function App() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchUsers(page).then((data) => {
      setUsers(data.data);
      if (data.data.data.length === 0) {
        return setLoading(true);
      }
      setLoading(false);
    });
  }, [page]);
  const changePage = (e) => {
    console.log(e);
    setPage(e.selected + 1);
  };
  return (
    <div className='App text-center flex justify-center items-center flex-col'>
      <h1 className='text-3xl p-4 font-semibold'>
        This is an Demo for Fetching User data from reqres.in
      </h1>
      <div className='flex my-4 items-center justify-center'>
        <ReactPaginate
          pageCount={users.total_pages}
          pageRangeDisplayed={users.total_pages}
          previousClassName={'btn btn-link btn-sm'}
          nextClassName={'btn btn-link btn-sm'}
          activeClassName='btn-active'
          breakLabel={'...'}
          pageLinkClassName={'link'}
          containerClassName='btn-group flex items-center justify-around'
          pageClassName='btn btn-sm btn-ghost'
          marginPagesDisplayed={3}
          onPageChange={changePage}
        />
      </div>
      {!loading ? (
        <div>
          <ul>
            {users.data.map((user) => {
              return (
                <li key={user.id}>
                  <UserCard user={user} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>No data Found</div>
      )}
    </div>
  );
}

export default App;
