
import './App.css';
import Child from './components/child_parent/Child';
import Parent from './components/child_parent/Parent';
import DropdownChecked from './components/Dropdown/DropdownChecked';
import DropdownDataFlow from './components/Dropdown/DropdownDataFlow';
import CrudWithUseEffect from './components/useEffect_with_reducer/CrudWithUseEffect';

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
      <CrudWithUseEffect/>
    </div>
  );
}

export default App;
