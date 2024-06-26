import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';
import { Text } from '../Text/Text';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <img
                    src={CopyIcon}
                    alt="copy"
                    className={cls.copyIcon}
                />
            </Button>
            <code>
                <Text text={text} />
            </code>
        </pre>
    );
});
