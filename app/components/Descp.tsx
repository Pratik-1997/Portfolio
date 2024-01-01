
const Descp = (props: any) => {
  return (
    <>
        <div className="descp-block">
            <p className="descp-text">
              {props.paraOne}
            </p>
            <p className="descp-text">{props.paraTwo}</p>
        </div>
    </>
  )
}

export default Descp