import {
    decreaseCounter,
    increaseCounter,
} from '@src/stores/redux/reducers/counter';
import React, { Dispatch, FC, useEffect } from 'react';
import { AllStateType } from '@src/stores/redux/store/types';
import { connect } from 'react-redux';

type StateProps = {
    counter: AllStateType['counter'];
};

type DispatchProps = {
    increaseCounter: () => void;
    decreaseCounter: () => void;
};

const mapStateToProps = (state: AllStateType): StateProps => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
    increaseCounter: () => {
        dispatch(increaseCounter());
    },
    decreaseCounter: () => {
        dispatch(decreaseCounter());
    },
});

const Counter: FC<StateProps & DispatchProps> = (props) => {
    useEffect(() => {
        console.log('render counter');
    }, [props.counter]);

    return (
        <div>
            <div>{props.counter}</div>
            <button onClick={props.increaseCounter}>increase</button>
            <button onClick={props.decreaseCounter}>decrease</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
