import {FCProps} from '@acrool/react-grid';
import styled from 'styled-components';

import {ITitleBlockProps} from './types';

interface IProps extends FCProps, ITitleBlockProps {
}


/**
 * TitleBlock
 */
const TitleBlock = ({
    className,
    style,
}: IProps) => {
    return <CaseCardRoot
        className={className}
        style={style}
    >
        TitleBlock
    </CaseCardRoot>;
};

export default TitleBlock;




const CaseCardRoot = styled.div`
`;

