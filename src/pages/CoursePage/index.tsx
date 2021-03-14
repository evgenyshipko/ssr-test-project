import React, { useEffect } from 'react';
import { useActions, useValues } from 'kea';
import { currencyLogic } from '@src/logic/currency';
import './style.css';

export const CoursePage = () => {
    const { rub } = useValues(currencyLogic);
    const { fetchCourse } = useActions(currencyLogic);

    useEffect(() => {
        if (rub === 0) {
            fetchCourse();
        }
    });

    return <div className="course-page">current USD/RUB course: {rub}</div>;
};
