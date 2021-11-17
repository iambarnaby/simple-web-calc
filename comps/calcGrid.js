class CalcGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }
  render() {
    return (
      <>
        {this.state.color == "" || "defaul"}
        <div className="output">
          <div data-prev-op className="prevOperand"></div>
          <div data-curr-op className="currentOperand"></div>
        </div>
        <button data-all-clear className="span-two">
          AC
        </button>
        <button data-delete className="delete">
          DEL
        </button>
        <button data-operation>÷</button>
        <button data-number>1</button>
        <button data-number>2</button>
        <button data-number>3</button>
        <button data-operation>*</button>
        <button data-number>4</button>
        <button data-number>5</button>
        <button data-number>6</button>
        <button data-operation>+</button>
        <button data-number>7</button>
        <button data-number>8</button>
        <button data-number>9</button>
        <button data-operation>-</button>
        <button data-number>.</button>
        <button data-number>0</button>
        <button data-equals className="span-two">
          =
        </button>
      </>
    );
  }
}
