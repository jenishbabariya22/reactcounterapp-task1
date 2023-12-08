import { useState } from "react"

function Counter() {

  const [count, setcount] = useState(0)

  const Increses = () => {
    setcount(count + 1)
  }

  const Decreses = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }

  const reset = () => {
    setcount(0)
  }

  return (
    <>
      <h1>Counter app</h1>
      <div>
        <button type="button" class="btn btn-success m-3" onClick={Increses} style={{ width: "80px" }}>+</button>
        <button type="button" class="btn" style={{ background: "lightpink", width: "100px" }}>{count}</button>
        <button type="button" class="btn btn-success m-3" onClick={Decreses} style={{ width: "80px" }}>-</button>
      </div>
      <button type="button" class="btn btn-success" onClick={reset}>Reset</button>
    </>
  )
}

export default Counter