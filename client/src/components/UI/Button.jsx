import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
})

export const GradientButton = ({ children }) => {
    return <CustomizedButton>{children}</CustomizedButton>
}