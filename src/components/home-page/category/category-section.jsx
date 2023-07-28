import React from 'react'
import { Link } from 'react-router-dom'
import './category.css'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const Category = ({cat}) => {
  const { t } = useTranslation();
  const books = useSelector((state) => state.books.books.filter((book) => book.category === cat._id))
   
  return (
    <div className="col">
      <div className="card text-bg-dark">
        <img src="/assets/img/back-store.jpg" className="card-img" alt="..."/>
        <div className="card-img-overlay text-center">
          <p className="card-text">{books.length} {t('home.category.num-text')}</p>
          <Link to={`/store/${cat._id}`}>
            <button
              type="button"
              className="btn btn-outline-light position-absolute top-50 start-50 translate-middle">
              <a target="_blank">{t('home.category.btn')}</a>
            </button>
          </Link>
          <h5 className="card-title position-absolute bottom-0 start-50 translate-middle-x p-2">{cat.name}</h5>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default Category;

