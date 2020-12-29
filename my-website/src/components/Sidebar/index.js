import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SideBarElements';

const index = ({ options, isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    {options.map((option, index) => {
                        return (
                            <SideBarLink key={index} to={option.path} onClick={toggle} > {option.title}</SideBarLink>
                        )
                    })}
                    {/* <SideBarLink to='profile'> profile   </SideBarLink >
                    <SideBarLink to='skillets'> skillets   </SideBarLink >
                    <SideBarLink to='work experience'> work experience   </SideBarLink >
                    <SideBarLink to='projects'> projects   </SideBarLink > */}
                </SideBarMenu>
                {/* // TODO  */}
                <SideBtnWrap>
                    <SideBarRoute to='/signin'>  Sign In </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default index
