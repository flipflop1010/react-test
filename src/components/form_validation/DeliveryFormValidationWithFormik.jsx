import { Formik } from 'formik'
import moment from 'moment'
import React from 'react'
import * as Yup from 'yup'
import { AllTypeData } from '../../Data/School/AllTypeData'
import TimeSlotData from '../../Data/TimeSlotData'

const DeliveryFormValidationWithFormik = () => {



    const [formValues, setFormValues] = React.useState()
    let form_values_str = 'adsf'
    React.useEffect(() => {

    }, [formValues])

    const initialFormValues = {
        pickup_date: moment().format('YYYY-MM-DD'),
        dropoff_date: moment().add(1, 'day').format('YYYY-MM-DD'),
        pickup_time: '',
        dropoff_time: '',
    }
    const formValidationSchema = Yup.object().shape({
        pickup_date: Yup.date().required("field is required").min(moment().toDate().toDateString(), "past date not be submitted"),
        dropoff_date: Yup.date().required("field is required").min(moment().toDate().toDateString(), "this date not be submitted"),
        pickup_time: Yup.string().required("time required"),
        dropoff_time: Yup.string().required("time required")
            .test("dtime", "time should not before pickuptime", (value) => {
                let pd = moment(Yup.ref('pickup_date'))
                let dd = moment(Yup.ref('dropoff_date'))
                let pt = moment(Yup.ref('pickup_time'),"HH:mm")
                let dt = moment(value,"HH:mm")
                console.log('pd',pd.isSame(dd));
                console.log('pd',dt);
                // if (pd.isSame(dd)) {
                //     console.log('inside');
                //     return false
                //     // return (dt.isAfter(pt))
                // }
                return true
            })
        // .when(["pickup_date","dropoff_date","pickup_time"],(pickup_date,dropoff_date,pickup_time,schema)=>{
        //     let pd=moment(pickup_date)
        //     let dd=moment(dropoff_date)
        //     let pt=moment(pickup_time)
        //     if(pd.isSame(dd)){
        //         return  schema.min(pt,'min after pickup time')
        //     }


        //     return schema
        // }),
    })

    const handleChange = (field, value, formikProps) => {
        formikProps.setFieldValue(field, value)
    }
    const handleFormSubmit = (data, actions) => {

        console.log(data);
        // setFormValues(data)
        // console.log(actions);
        // actions.resetForm()
        // actions.resetForm({
        //   values:initialFormValues
        // })
    }

    const renderForm = ({ values, errors, touched, handleSubmit, ...formikProps }) => {
        // console.log(errors);
        // console.log(formikProps);
        // console.log(resetForm);
        // console.log('errors',errors);
        console.log('touched', touched);






        return (
            <form onSubmit={handleSubmit}>

                <div className="row">

                    <div className="col-6 ">
                        <div className='form-group mt-2'>
                            <label htmlFor="">Pickup Date</label>
                            <input className='form-control' type="date" name='pickup_date' onChange={(data) => { handleChange('pickup_date', data.target.value, formikProps) }} value={values.pickup_date} />
                            <p><small className='text-danger'>{touched.pickup_date && errors.pickup_date}</small></p>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className='form-group mt-2'>
                            <label htmlFor="">Pickup Time</label>
                            <select className='form-control' name="pickup_time" id="" onChange={(data) => { handleChange('pickup_time', data.target.value, formikProps) }}>
                                <option value="">--Select--</option>
                                {TimeSlotData.map(cls => (
                                    <option key={cls.id} value={cls.value}>{cls.label}</option>
                                ))}
                            </select>
                            <p><small className='text-danger'>{touched.pickup_time && errors.pickup_time}</small></p>
                        </div>
                    </div>

                    <div className="col-6 ">
                        <div className='form-group mt-2'>
                            <label htmlFor="">DropOff Date</label>
                            <input className='form-control' type="date" name='dropoff_date' onChange={(data) => { handleChange('dropoff_date', data.target.value, formikProps) }} value={values.dropoff_date} />
                            <p><small className='text-danger'>{touched.dropoff_date && errors.dropoff_date}</small></p>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className='form-group mt-2'>
                            <label htmlFor="">DropOff Time</label>
                            <select className='form-control' name="dropoff_time" id="" onChange={(data) => { handleChange('dropoff_time', data.target.value, formikProps) }}>
                                <option value="">--Select--</option>
                                {TimeSlotData.map(cls => (
                                    <option key={cls.id} value={cls.value}>{cls.label}</option>
                                ))}
                            </select>
                            <p><small className='text-danger'>{touched.dropoff_time && errors.dropoff_time}</small></p>
                        </div>
                    </div>

                </div>


                <div className='form-group mt-2'>

                    <button type="submit">Submit</button>
                </div>

            </form>
        )
    }
    return (
        <React.Fragment >

            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <h4>Delivery Form</h4>
                    </div>
                    <div className="col-lg-8">

                        <Formik
                            initialValues={initialFormValues}
                            validationSchema={formValidationSchema}
                            onSubmit={handleFormSubmit}
                        >
                            {renderForm}
                        </Formik>
                    </div>


                    <div className="col-lg-4">
                        {JSON.stringify(formValues)}
                        {/* {form_values_str} */}
                    </div>
                </div>
            </div>
            <hr />

        </React.Fragment>
    )
}

export default DeliveryFormValidationWithFormik