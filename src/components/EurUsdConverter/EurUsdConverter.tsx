import 'bootstrap/dist/css/bootstrap.css';
function EurUsdConverter() {
  function addTen(): void {
    let input_tag = document.getElementById("inputValue") as HTMLInputElement;
    let count: number;
    if (isNaN(input_tag.valueAsNumber)) {
      count = 10;
    } else {
      count = input_tag.valueAsNumber + 10;
    }
    console.log(count);
    input_tag.valueAsNumber = count;
    eurToUsd();
  }

  function addHundred() {
    let input_tag = document.getElementById("inputValue") as HTMLInputElement;
    let count: number;
    if (isNaN(input_tag.valueAsNumber)) {
      count = 100;
    } else {
      count = input_tag.valueAsNumber + 100;
    }
    console.log(count);
    input_tag.valueAsNumber = count;
    eurToUsd();
  }

  function reset() {
    let input_tag = document.getElementById("inputValue") as HTMLInputElement;
    input_tag.valueAsNumber = 0;
    eurToUsd();
  }

  function eurToUsd() {
    let input_tag = document.getElementById("inputValue") as HTMLInputElement;
    let euro = input_tag.valueAsNumber;
    let usd = euro * 1.07;
    let output_tag = document.getElementById("outputValue") as HTMLInputElement;
    output_tag.valueAsNumber = usd;
  }

  return (
    <>
      <div className='container'>
          <div className='row'>
          <div className='col-1'>
            <label htmlFor="inputValue">EURO</label>
            </div>
            <div className='col'>
            <input type="number" id="inputValue" onChange={eurToUsd} />
            </div>
          <div className='col'>
            <button className='btn btn-outline-success' onClick={addTen}>+10</button>
            </div>
          <div className='col'>
            <button className='btn btn-outline-success' onClick={addHundred}>+100</button>
            </div>
          <div className='col'>
            <button className='btn btn-outline-danger' onClick={reset}>Reset</button>
           </div>
      <br></br>
      </div>
      <div className='row'>
        <div className='col-1'>
      <label htmlFor="outputValue">USD</label>
      </div>
      <div className='col'>
      <input type="number" id="outputValue" readOnly />
      </div>
      </div>
      </div>
    </>
    );
}
export default EurUsdConverter;
