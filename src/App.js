import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="d-flex align-items-center light-blue-gradient" style={{height : '100vh'}}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card rounded-0 shadow">
                <div className="card-body">
                  <h3>Sign Up</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Zip Code:</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                             placeholder="Enter zip code"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
