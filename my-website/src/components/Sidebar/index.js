import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SideBarElements';

const index = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='profile'> profile   </SideBarLink >
                    <SideBarLink to='skillets'> skillets   </SideBarLink >
                    <SideBarLink to='work experience'> work experience   </SideBarLink >
                    <SideBarLink to='projects'> projects   </SideBarLink >
                </SideBarMenu>

                <SideBtnWrap>
                    <SideBarRoute to='/signin'>  Sign In </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default index
