
const Ratings = () => {
  return (
    <div className="ratings">
        <div className="bars">
              <div className="info d-flex">
                  <span className="font-weight-bold">HTML</span>
                  <span className="font-weight-bold">90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped html bg-danger" role="progressbar"></div>
              </div>
       </div>
       <div className="bars">
              <div className="info d-flex">
                  <span className="font-weight-bold">CSS</span>
                  <span className="font-weight-bold">85%</span>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped css bg-danger" role="progressbar"></div>
              </div>
       </div>
       <div className="bars">
              <div className="info d-flex">
                  <span className="font-weight-bold">Bootstrap</span>
                  <span className="font-weight-bold">80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bs bg-danger" role="progressbar"></div>
              </div>
       </div>
       <div className="bars">
              <div className="info d-flex">
                  <span className="font-weight-bold">Javascript</span>
                  <span className="font-weight-bold">70%</span>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped js bg-danger" role="progressbar"></div>
              </div>
       </div>
       <div className="bars">
              <div className="info d-flex">
                  <span className="font-weight-bold">jQuery</span>
                  <span className="font-weight-bold">70%</span>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped jQ bg-danger" role="progressbar"></div>
              </div>
       </div>
       <div className="bars">
              <div className="info d-flex">
                  <span className="font-weight-bold">React / Next</span>
                  <span className="font-weight-bold">60%</span>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped rn bg-danger" role="progressbar"></div>
              </div>
       </div>
       <div className="bars">
              <div className="info d-flex">
                  <span className="font-weight-bold">WordPress</span>
                  <span className="font-weight-bold">80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped wp bg-danger" role="progressbar"></div>
              </div>
       </div>


    </div>
  )
}

export default Ratings