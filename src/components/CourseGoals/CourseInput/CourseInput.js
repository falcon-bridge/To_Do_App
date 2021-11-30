import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     background: rgb(252, 208, 208);
//   }

//   &.invalid label {
//     color: red;
//   }
// `;

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) =>
//       props.invalid ? "rgb(252, 208, 208)" : "tarnsparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    // <form onSubmit={formSubmitHandler}>
    //   <div className={`form-control ${!isValid ? "invalid" : ""}`}>
    //     {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
    //     <label>Course Goal</label>
    //     <input
    //       // style={{
    //       //   borderColor: !isValid ? "red" : "#ccc",
    //       //   background: !isValid ? "salmon" : "transparent",
    //       // }}
    //       type="text"
    //       value={enteredValue}
    //       onChange={goalInputChangeHandler}
    //     />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // <form onSubmit={formSubmitHandler}>
    //   <FormControl className={!isValid && "invalid"}>
    //     {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
    //     <label>Course Goal</label>
    //     <input
    //       // style={{
    //       //   borderColor: !isValid ? "red" : "#ccc",
    //       //   background: !isValid ? "salmon" : "transparent",
    //       // }}
    //       type="text"
    //       value={enteredValue}
    //       onChange={goalInputChangeHandler}
    //     />
    //   </FormControl>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // <form onSubmit={formSubmitHandler}>
    //   <FormControl invalid={!isValid}>
    //     {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
    //     <label>Course Goal</label>
    //     <input
    //       // style={{
    //       //   borderColor: !isValid ? "red" : "#ccc",
    //       //   background: !isValid ? "salmon" : "transparent",
    //       // }}
    //       type="text"
    //       value={enteredValue}
    //       onChange={goalInputChangeHandler}
    //     />
    //   </FormControl>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          // style={{
          //   borderColor: !isValid ? "red" : "#ccc",
          //   background: !isValid ? "salmon" : "transparent",
          // }}
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
