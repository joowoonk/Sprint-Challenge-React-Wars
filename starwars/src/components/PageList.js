import React from "react"
// import PageList from './components/PageList.js'


const PageList = ({postsPerPage, TotalPosts}) => {

    return (
    <div>
       
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link"></a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>

  );
}

export default PageList