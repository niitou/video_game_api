import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';
import { PageProps as AppPageProps } from './';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    interface VideoGame {
        id: number;
        title: string;
        developer: string?;
        publisher: string?;
        release_date: string?;
        genres : string?;
        product_rating: string?;
        user_score: number?;
        platforms: Array<string>?;
      }

    interface ModalComponentProps {
        id : string,
        vg : VideoGame
    }

    interface AddVGComponentProps {
        className : string,
        disabled : boolean
    }

    interface Pagination {
        data : VideoGame[],
        links : {url: string?, label: string, active:boolean}[];
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
