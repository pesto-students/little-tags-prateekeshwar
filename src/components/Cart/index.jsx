import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hitCartAddRemove } from '../../store/modules/apparrelData/actions';
import {} from './index.scss';
import CartSingle from './CartSingle';

function Cart(props) {
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    props.apparrelData.cart.forEach((element) => {
      amount += element.price * element.quantity;
    });
    settotalAmount(amount);
  }, [props]);

  const handlePlaceOrder = () => {
    props.history.push({
      pathname: '/address',
      state: { proceedToPayment: true },
    });
  };

  const visualizeCart = (props.apparrelData.cart || []).map((value, index) => (
    <CartSingle
      productDetail={value}
      history={props.history}
      key={index.toString()}
      index={index}
    />
  ));

  return (
    <div>
    <div style={{ height: '100px' }} />
      <div className="flex-column cart-parent-box">
        {props.apparrelData.cart.length > 0 ? (
          <div className="flex-row flex-space-arround cart-header">
            <h1 className="cart-title">
              Cart ({props.apparrelData.cart.length}{' '}
              {props.apparrelData.cart.length > 1 ? 'items' : 'item'})
            </h1>
          </div>
        ) : (
          <div className="empty">
            <h1>Oops! You do not have anything in cart</h1>
          </div>
        )}
        {visualizeCart}
      </div>
      {props.apparrelData.cart.length > 0 ?
      <div className="flex-column order">
              <h1>Total Amount &#8377;{totalAmount.toFixed(2)}</h1>
              <button
                className="place-order-button"
                type="button"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div> : null }
      </div>
  );
}

Cart.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const dispatchToProps = { hitCartAddRemove };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
});

export default connect(mapStateToProps, dispatchToProps)(Cart);
