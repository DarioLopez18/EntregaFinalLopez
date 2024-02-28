import React from 'react'
import { Link } from 'react-router-dom'
import "./Pagination.css"

const Pagination = ({productsPerPage,totalProducts,currentPage,setCurrentPage}) => {
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage);i++){
    pageNumbers.push(i)
  }
  const onPreviusPage = () =>{
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = (numeroPage) => {
    setCurrentPage(numeroPage)
  }


  return (
        <nav className="pagination" role="navigation" aria-label="pagination">
        <Link className={`pagination-previous ${currentPage == 1 ? 'disabled' : ''}`} onClick={onPreviusPage}>Anterior</Link>
        <div className="pagination-list">
            {pageNumbers.map((nPage, index) => (
                <li className='lista' key={index} >
                <Link
                    className={'pagination-link'}
                    style={{ backgroundColor: nPage === currentPage ? 'blue' : '' }}
                    onClick={() => onSpecificPage(nPage)}
                >
                    {nPage}
                </Link>
                </li>
            ))}
        </div>
        <Link className={`pagination-next ${currentPage >= pageNumbers.length ? 'disabled' : ''}`} onClick={onNextPage}>Siguiente</Link>
    </nav>  
  )
}

export default Pagination
