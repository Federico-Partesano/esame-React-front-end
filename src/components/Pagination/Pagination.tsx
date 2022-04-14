import React, { FC } from 'react';
import "./Pagination.scss";
import { Pagination as Pages } from "react-bootstrap";
import { usePagination } from '../../hook/usePagination';

interface IPagination {

}

const Pagination: FC<IPagination> = () => {
    const {nextPage, prevPage,changePage, pages, page} = usePagination();
return (<>
{  pages &&  <Pages>
  <Pages.First disabled={page <= 1} onClick={() => changePage(1)} />
  <Pages.Prev disabled={page <= 1} onClick={prevPage} />
  {page > 3 && <Pages.Item onClick={() => changePage(1)}>{1}</Pages.Item> }
  {page > 3 && <Pages.Ellipsis />}

  {page - 2> 0 && <Pages.Item onClick={() =>changePage(page - 2)}>{page - 2}</Pages.Item>}
 {page - 1> 0 && <Pages.Item onClick={() =>changePage(page - 1)}>{page - 1}</Pages.Item>}
  <Pages.Item active>{page}</Pages.Item>
  {page + 1<= pages && <Pages.Item onClick={() =>changePage(page + 1)}>{page + 1}</Pages.Item>}
 {page + 2<= pages && <Pages.Item onClick={() =>changePage(page + 2)}>{page + 2}</Pages.Item>}

  {page < pages - 2 && <Pages.Ellipsis />}
  {page < pages - 2 &&<Pages.Item onClick={() => changePage(pages)}>{pages}</Pages.Item> }
  <Pages.Next disabled={page >= pages} onClick={nextPage} />
  <Pages.Last disabled={page >= pages} onClick={() => changePage(pages)} />
</Pages>}
</>
)
};

export default Pagination;