import React from "react";
import "../../styles/App.scss";

const CreateEvent = props => {
  const { onChange, onSubmit, onUpload, image } = props;
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col col-lg-3" />
        <div className="col col-lg-6">
          <h1>Create an event</h1>
          <form>
            <div className="form-group">
              <input
                onChange={onChange}
                className="form-control"
                placeholder="title"
                name="title"
                id="title"
              />
            </div>
            <div className="form-group">
              <select
                onChange={onChange}
                className="form-control"
                name="description"
                id="description"
               >

                <option value="Technology">Technology</option>
                <option value="Music Concert">Music Concert</option>
                <option value="Dinner">Dinner</option>
                <option value="Meeting">Meeting</option>
                <option value="Party">Party</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                onChange={onChange}
                className="form-control"
                placeholder="Body"
                name="body"
                id="body"
              />
            </div>
            <div className="form-group">
              <input
                onChange={onChange}
                className="form-control"
                placeholder="tags"
                name="tags"
                id="tags"
              />
            </div>
            <div className="image-div">
              <div className="actual-image">
                <img className="image-fluid" />
              </div>
              <input
                type="file"
                name="imageUpload"
                onChange={onChange}
                id="images"
              />
            </div>
            <div className="form-group">
              <button onClick={onSubmit} className="btn btn-primary margin-set">
                Publish Event
              </button>
            </div>
          </form>
        </div>
        <div className="col col-lg-3" />
      </div>
    </div>
  );
};

 export default CreateEvent;
