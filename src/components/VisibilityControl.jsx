import React from "react";

function VisibilityControl({ setshowCompleted, cleanTask, isChecked }) {
    const handleDelete = () => {
        if (window.confirm("Estás seguro?")) {
            cleanTask();
        }
    };

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary  ">
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    checked={isChecked}
                    type="checkbox"
                    onChange={(e) => setshowCompleted(e.target.checked)}
                />
                <label> Show Tasks Done </label>
            </div>

            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Clear
            </button>
        </div>
    );
}

export default VisibilityControl;
