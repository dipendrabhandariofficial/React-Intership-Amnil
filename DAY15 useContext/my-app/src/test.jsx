import React from 'react'
import {  useEffect, useState } from 'react'


function Test() {
      const [state, setState] = useState(
        {
          a: {
            b: {
              c: 1
            }
          },
          j: {
            k: 2
          }
        }
      )
      const [state1, setState1] = useState(
        {
          a: {
            b: {
              c: 1
            }
          },
          j: {
            k: 2
          }
        }
      )
    
      useEffect(() => {
    
        console.log("useEffect  called");
      }, [state])
    
      useEffect(() => {
        console.log("useEffect1 called");
      }, [state1])
    
    
      function handleClick() {
       setState(prevState => {
      prevState.a.b.c += 1; // mutate
      return { ...prevState }; // return new top-level object
    });
        console.log("App Rendered");
    
      }
      function handleClick1() {
        setState1({
          ...state1,
          a: {
            ...state1.a,
            b: {
              ...state1.a.b,
              c: state1.a.b.c + 1
            }
          }
        })
        console.log("App1 Rendered");
    
      }
    
    
      return (
        <>
          <button style={{ backgroundColor: "red", marginBottom: "10px" }} onClick={handleClick}>
            value of c: {state.a.b.c}
          </button>
          <br />
          <button style={{ backgroundColor: "orange" }} onClick={handleClick1}>
            value of c: {state1.a.b.c}
          </button>
    
        </>
      )
    }

export default Test