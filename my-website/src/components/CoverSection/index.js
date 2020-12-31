import React, {useState} from 'react';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

// TODO Rename this if need be 
const CoverSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <CoverContainer>
            <CoverBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </CoverBg>
            <CoverContent>
                {/* TODO Add a profile button, work button, project button or contact me button and a gif that says scroll down! Similar to existing
                Also, i believe there is a h1 subclass for classes so check doing-with-react-2 out */}
                <CoverH1> What up!!!! </CoverH1>

                <CoverBtnWrapper>
                    {/* Try and remove primary and dark to see the difference  */}
                    <Button to='/profile' onMouseEnter={onHover}  onMouseLeave={onHover} primary='true' dark='true'>
                        Let's Go! {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </CoverBtnWrapper>
            </CoverContent>
        </CoverContainer>
    )
}

export default CoverSection;
