import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useGenerateTimer from '../../hooks/useGenerateTimer';
import getFormatedTimer from '../../utils/helpers/getFormatedTimer';

const ProductItem = ({ product }) => {
  const { seconds } = useGenerateTimer();

  return (
    <div className='col col-12 col-sm-6 col-md-4 col-lg-3 pb-4'>
      <div className="card" style={{ height: '100%' }}>
        <div className="card-img-top d-flex justify-content-center px-1 py-3">
          <img 
            src={product.image} 
            alt={product.title}
            style={{
              maxWidth: '100%',
              minHeight: 150,
              maxHeight: 150
            }}
          />
        </div>
        <div className="card-body">
          <p className="card-title fs-6 text-center fw-bold text-secondary text-truncate">{product.title}</p>
          <div className="row">
            <div className="col col-6 d-flex align-items-center">
              <span className='fw-bold'>{ getFormatedTimer(seconds) }</span>
            </div>
            <div className="col col-6 d-flex justify-content-end">
              <Link 
                type="button" 
                className={`btn btn-${seconds > 0 ? 'primary' : 'secondary'} `}
                style={{ fontSize: 10 }}
                to={`${seconds > 0 ? `/detalle/${product.id}` : '#'}`}
              > Ver detalles </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem;
