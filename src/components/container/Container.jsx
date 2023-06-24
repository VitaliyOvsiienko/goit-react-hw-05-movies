import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

const Container = ({ children }) => {
    return <div>
        <StyledContainer>{children}</StyledContainer>
    </div>
};

Container.propTypes = {
    children: PropTypes.array.isRequired
};

export default Container;