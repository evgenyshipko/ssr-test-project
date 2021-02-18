import React, { FC, useEffect } from 'react';

import { connect } from 'react-redux';
import { AllStateType } from '@src/stores/redux/store/types';

type StateProps = {
    notification: AllStateType['notification'];
};

const mapStateToProps = (state: AllStateType): StateProps => {
    return {
        notification: state.notification,
    };
};

const Notification: FC<StateProps> = (props) => {
    useEffect(() => {
        console.log('render notification');
    }, [props.notification]);

    return (
        <div
            className="notification"
            style={{
                display: props.notification.isHidden ? 'none' : undefined,
            }}
        >
            {props.notification.item?.text}
        </div>
    );
};

export default connect(mapStateToProps)(Notification);
