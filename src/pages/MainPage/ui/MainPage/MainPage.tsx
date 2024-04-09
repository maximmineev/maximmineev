import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { MainPageHeader } from 'features/MainPageHeader';
import { MainPageStack } from 'widgets/MainPageStack';
import { VStack } from 'shared/ui/Stack';
import cls from './MainPage.module.scss';
import { MainPageLinks } from '../../../../features/MainPageLinks';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className || ''])}>
            <VStack max gap="32">
                <MainPageHeader />
                <MainPageLinks />
                <MainPageStack />
            </VStack>
        </Page>
    );
};

export default memo(MainPage);
