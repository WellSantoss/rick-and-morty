import PropTypes from 'prop-types';
import prev from '../../assets/prev.svg';
import next from '../../assets/next.svg';

const Pagination = ({ info }) => {
  const range = 9;
  const offset = Math.ceil(range / 2);
  const pagesList = [];

  for (let i = 1; i <= info.pages; i++) {
    pagesList.push({ index: i, icon: i });
  }

  pagesList.splice(0, info.currentPage - offset);
  pagesList.splice(range, info.pages);

  if (info.currentPage > 1) {
    pagesList.unshift({
      index: info.currentPage - 1,
      icon: <img src={prev} alt="prev" />,
    });
  }

  if (info.currentPage < info.pages) {
    pagesList.push({
      index: info.currentPage + 1,
      icon: <img src={next} alt="next" />,
    });
  }

  return (
    <div className="pagination">
      {pagesList.map((page, index) => (
        <button
          key={index}
          className={page.index == info.currentPage ? 'current' : ''}
          onClick={() => info.setCurrentPage(page.index)}
        >
          {page.icon}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  info: PropTypes.object,
};

export default Pagination;
