import { useContext ,useState} from "react"
import { orderActivePageCntxt } from "../orderRoute"
import { Formik,ErrorMessage,Form,Field } from  "formik";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import "./delivery.css"


function DeliveryComponent(props) {

  const { t } = useTranslation();
  ///////////////////////////////////////////
  const {updatePage} = useContext(orderActivePageCntxt);
  const cart = useSelector((state) => state.cart);
  const [optionSelected,setOptionSelected] = useState(false);

    function handleSubmit(evnt){
      props.updatingOrder({...props.order,  address:evnt.dOption })
      console.log(evnt);
      updatePage('nav-payment')
    }

    const validationSchema = yup.object().shape({
      dOption: yup.string().required('Please select a delivery option !'),
    });

    return <>
      <div className="row flex-column flex-md-row mx-3" id="delivery-page">
      <div className="col-12 col-md-8">

        <Formik initialValues={{dOption:''}} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form id="delivery-options" >
          <div className="d-flex justify-content-between"> <label>
            <Field type="radio" name="dOption" value='cairo'/><span> {t('order.delivery-sec.cairo')} </span>
            <span>{t('order.delivery-sec.num-day')}</span> </label>
            <span>{t('order.delivery-sec.p1')}</span>
            </div>
            <div className="d-flex justify-content-between"><label>
              <Field type="radio" name="dOption" value='alex'/><span> {t('order.delivery-sec.alex')} </span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span>{t('order.delivery-sec.p2')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption" value='canal'/><span> {t('order.delivery-sec.canal')} </span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span >{t('order.delivery-sec.p3')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption" value='upper-egypt'/><span> {t('order.delivery-sec.upper-eg')} </span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span >{t('order.delivery-sec.p4')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption"  value='sinai'/><span> {t('order.delivery-sec.sina')} </span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span>{t('order.delivery-sec.p5')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption" value='delta' /><span> {t('order.delivery-sec.delta')} </span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span>{t('order.delivery-sec.p6')}</span>
            </div>
            <ErrorMessage name="dOption" component={'p'} className="text-danger"/>
            <button className="btn btn-custom btn-lg mb-5" type="submit" id="delivery-save">{t('order.delivery-sec.btn')}</button>
          </Form>
          </Formik>
        </div>

        <div className="col-12 col-md-4" >
          <div id="order-container-delivery">
            {cart.map((product) => {
              return (
                <div className="card d-flex flex-row mt-3 order-details h-25" key={product.book._id}>
                  <img
                    src={product.book.bookImage}
                    className="card-img-top w-50"
                    style={{objectFit:"contain" , height:'100%'}}
                  />
                  <div className="card-body">
                    <h5>{product.book.bookTitle}</h5>
                    <span>{t('order.delivery-sec.quan')} : {product.quantity}</span>
                    <h5 style={{ color: "#900c3f" }}>
                      {Number(product.book.price) * product.quantity}.00 {t('product-details.p-egp')}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        <div className="row m-5 " id="total">
          <div className="col-6">
            <h5>{t('order.delivery-sec.total')} : </h5>
          </div>
          <div className="col-6" id="total-price">
            <h5 style={{ color: "#900c3f" }}> 
              {cart.reduce((total, product) => {
                return (
                  total + Number(product.book.price) * product.quantity
                );
              }, 0)}.00 {t('product-details.p-egp')} 
            </h5>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default DeliveryComponent;