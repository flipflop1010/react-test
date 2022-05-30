
import './App.css';
import Child from './components/child_parent/Child';
import Parent from './components/child_parent/Parent';
import DropdownChecked from './components/Dropdown/DropdownChecked';
import DropdownDataFlow from './components/Dropdown/DropdownDataFlow';
import DeliveryFormValidationWithFormik from './components/form_validation/DeliveryFormValidationWithFormik';
import FormValidationWithFormik from './components/form_validation/FormValidationWithFormik';

function App() {

  const handleParent=(event)=>{
    // console.log('handleParent',event);
    console.log('rakesh bhunia');
  }


  return (
    <div className="App">
      {/* <Parent>
        <Child handleParent={handleParent}/>
      </Parent> */}

      {/* <DropdownDataFlow/> */}
      {/* <DropdownChecked/> */}

      {/* <FormValidationWithFormik/>  */}
      <DeliveryFormValidationWithFormik/>
    </div>
  );
}

export default App;
