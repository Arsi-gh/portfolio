import { forwardRef } from "react"

const Title = forwardRef(function PageTitle({text , customClass} , ref){
    return (
      <h3 ref={ref} className={`title ${customClass && customClass}`}>{text}</h3>
    )
})

export default Title