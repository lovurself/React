import React from 'react';

class GuGuDan extends React.Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: ''
    };

    onSubmit = e => {
        // 입력하고 새로고침되지 않도록 방지
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            // setState는 다음 상태값이기 때문에 예전 상태값을 다음 상태값에 사용하게 만들자.
            // setState는 비동기
            this.setState((prevState) => {
                return {
                    result: `정답: ${prevState.value}`,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: ''
                };
            });
            this.input.focus(); // DOM에 직접 접근하여 조작하여 input에 focus가 오도록
            

            // this.setState({
            //     result: `정답: ${this.state.value}`,
            //     first: Math.ceil(Math.random() * 9),
            //     second: Math.ceil(Math.random() * 9),
            //     value: ''
            // });


        } else {
            this.setState({
                result: '땡! 다시 한번 더 생각해보세요.',
                value: ''
            })
            this.input.focus();
        }
    }

    onChange = e => {
        this.setState({ value: e.target.value})
    }

    //선언
    input;

    onRefInput = (c) => {this.input = c;};

    render() {
        return (
            <div>
                <div>
                    {this.state.first} 곱하기 {this.state.second}는?
                </div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </div>
        )
    }
}

export default GuGuDan;