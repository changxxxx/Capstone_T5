import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const DropdownContainer = styled('div')({
    backgroundColor: '#FFFFFF', 
    borderColor: '#F0F0F0',    
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    height: '80px',
    width: '1440px',
});


const Header = styled('header')({
    alignItems: 'center',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    height: '80px',
    justifyContent: 'center',
    position: 'relative',
    width: '1440px',
});

const Container = styled('div')({
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'space-between',
    padding: '0px 216px',
    position: 'relative',
    width: '100%',
});

const Frame7106 = styled('div')({
    alignItems: 'flex-start',
    display: 'inline-flex',
    flex: '0 0 auto',
    gap: '48px',
    position: 'relative',
});

export const DropdownHeader = () => {
  return (
    <DropdownContainer>
      <Header>
        <Container>
            <Button variant="text">Cancel</Button>     
            <Frame7106>
                <Button variant="outlined">Save as draft</Button>
                <Button variant="contained" href="application_sent">Apply</Button>
            </Frame7106>
        </Container>
      </Header>
    </DropdownContainer>
  );
};

