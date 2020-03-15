import styled/* , {css} */ from 'styled-components'
import { Link } from 'react-router-dom'

// const OptionsContainerStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;
// `


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        padding: 10px;
        height: 60px;
        margin-bottom: 20px;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width: 800px) {
        padding: 0px;
        width: 50px;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
        margin-bottom: 20px;
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`

// export const OptionDiv = styled.div`
//     ${OptionsContainerStyles}
// `