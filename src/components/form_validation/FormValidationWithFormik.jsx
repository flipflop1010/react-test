import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { AllTypeData } from '../../Data/School/AllTypeData'

const FormValidationWithFormik = () => {

  const [formValues, setFormValues] = React.useState()
  let form_values_str = 'adsf'
  React.useEffect(() => {

  }, [formValues])

  const initialFormValues = {
    name: '',
    roll: ''
  }
  const formValidationSchema = Yup.object().shape({
    name: Yup.string("").required("this field is required"),
    roll: Yup.number().typeError("field should be a number").required('required'),
  })

  const handleChange = (field, value, formikProps) => {
    formikProps.setFieldValue(field, value)
  }
  const handleFormSubmit = (data, actions) => {

    console.log(data);
    setFormValues(data)
    // console.log(actions);
    actions.resetForm()
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
          <div className="col-4 ">
            <div className='form-group mt-2'>
              <label htmlFor="">name</label>
              <input className='form-control' type="text" name='name' onChange={(data) => { handleChange('name', data.target.value, formikProps) }} value={values.name} />
              <p><small className='text-danger'>{errors.name}</small></p>
            </div>
          </div>
          <div className="col-4">
            <div className='form-group mt-2'>
              <label htmlFor="">roll</label>
              <input className='form-control' type="text" name='roll' onChange={(data) => { handleChange('roll', data.target.value, formikProps) }} value={values.roll} />
              <p><small className='text-danger'>{touched && errors.roll}</small></p>
            </div>
          </div>
          <div className="col-4">
            <div className='form-group mt-2'>
              <label htmlFor="">class</label>
              <select className='form-control' name="class" id="">
                <option value="">--Select--</option>
                {AllTypeData.Classes.map(cls => (
                  <option value={cls.value}>{cls.label}</option>
                ))}
              </select>

              <p><small className='text-danger'>{errors.class}</small></p>
            </div>
          </div>

          <div className="col-4">
            <div className='form-group mt-2'>
              <label htmlFor="">Section</label>
              <select className='form-control' name="section" id="">
                <option value="">--Select--</option>
                {AllTypeData.Sections.map(cls => (
                  <option value={cls.value}>{cls.label}</option>
                ))}
              </select>

              <p><small className='text-danger'>{errors.section}</small></p>
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
            <h4>Student Form</h4>
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

export default FormValidationWithFormik