import React , { useState }from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import StarRate from '../../rating/rating'
import { useTranslation } from 'react-i18next'
import { catId } from '../../../store/reducers/booksSlice';

const Product = () => {
  const style = { boxShadow: '10px 10px 5px #aaaaaa' }
  const { t } = useTranslation();
  const dispatch = useDispatch();
 
  const { id } = useParams();
  dispatch(catId(id));
  console.log('catID from product component----->',id);
  
  
  // const books = useSelector((state) => state.books.filterCount > 0 ? state.books.filteredBooks:state.books.books)
  const books = useSelector((state) => {
    if (state.books.filterCount > 0) {
      return state.books.filteredBooks;
    } else if (state.books.categoryId) {
      console.log(state)
      return state.books.books.filter((book) => book.category === state.books.categoryId);
    } else {
      return state.books.books;
    }
    
  });

  console.log('num of books ----->',books.length);

  const [selectedSortOption, setSelectedSortOption] = useState('');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSortOption(value);
    console.log('value = ',value);
  };


  const sortedBooks = [...books]
  if (selectedSortOption === 'Des') {
    sortedBooks.sort((a, b) => b.price - a.price);
  } else if (selectedSortOption === 'Asc') {
    sortedBooks.sort((a, b) => a.price - b.price);
  }

  return (
    <>
      <select style={{height:'50px'}} className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example" 
        value={selectedSortOption}
        onChange={handleSortChange}
      >
        <option defaultValue hidden>{t('product-list.sort.title')}</option>
        <option value="Des">{t('product-list.sort.op1')}</option>
        <option value="Asc">{t('product-list.sort.op2')}</option>
      </select>
      
      {sortedBooks.length == 0 ? <h1 style={{textAlign:'center',width:'100%'}}>Books Not found</h1>: sortedBooks.map((book) =>  {
        return (
          <div className="col mb-5" style={{height:'580px'}} key={book._id}>

            <div className="card h-100" style={style}>
              <img className="card-img-top" src={book.bookImage} style={{height:'350px'}} />
              <div className="card-body pt-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{book.bookTitle}</h5>
                  <p className="card-text">{book.price}.00$</p>
                </div>
              </div>
              <div className="card-footer p-4 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link to={`/details/${book._id}`}>
                    <a className="btn btn-outline-dark mt-auto">
                      {t('product-list.product.btn')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default Product
