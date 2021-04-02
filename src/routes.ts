import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NotificationPage } from '@src/pages/NotificationPage';
import { CounterPage } from '@src/pages/CounterPage';
import { ImagePage } from '@src/pages/ImagePage';
import { CoursePage } from '@src/pages/CoursePage';
import { currencyLogic } from '@src/logic/currency';
import { UsersPage } from '@src/pages/UsersPage';

type RouteData = {
    title: string;
    path: string;
    exact: boolean;
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    fetchData?: () => Promise<any>;
};

const getCourseFetchData = () => {
    currencyLogic.mount();
    return currencyLogic.actions.fetchCourse();
};

export const routes: RouteData[] = [
    {
        title: 'Counter',
        path: '/counter',
        component: CounterPage,
        exact: true,
    },
    {
        title: 'Notification',
        path: '/',
        component: NotificationPage,
        exact: true,
    },
    {
        title: 'Image',
        path: '/image',
        component: ImagePage,
        exact: true,
    },
    {
        title: 'Course',
        path: '/course',
        component: CoursePage,
        fetchData: getCourseFetchData,
        exact: true,
    },
    {
        title: 'Users',
        path: '/users',
        component: UsersPage,
        exact: true,
    },
];
