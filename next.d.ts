
import type {
    NextComponentType,
    NextPageContext,
    NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
    type NextLayoutComponentType<P = {}> = NextComponentType<
        NextPageContext,
        any,
        P
    > & {
        layout?: ReactNode;
    };


    type NextLayoutPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
        layout: ReactNode;
    };
}

declare module 'next/app' {
    type AppLayoutProps<P = {}> = AppProps & {
        Component: NextLayoutComponentType;
    };
}