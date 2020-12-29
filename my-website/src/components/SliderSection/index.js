import React, {useState} from 'react';
import { SliderContainer, SliderBg, VideoBg, SliderContent, SliderH1, SliderP, SliderBtnWrapper, ArrowForward, ArrowRight } from './SliderElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

// TODO Rename this if need be 
const SliderSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <SliderContainer>
            <SliderBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </SliderBg>
            <SliderContent>
                {/* TODO Add a profile button, work button, project button or contact me button and a gif that says scroll down! Similar to existing
                Also, i believe there is a h1 subclass for classes so check doing-with-react-2 out */}
                <SliderH1> What up!!!! </SliderH1>

                <SliderBtnWrapper>
                    {/* Try and remove primary and dark to see the difference  */}
                    <Button to='/profile' onMouseEnter={onHover}  onMouseLeave={onHover} primary='true' dark='true'>
                        Let's Go! {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </SliderBtnWrapper>
            </SliderContent>
        </SliderContainer>
    )
}

export default SliderSection;
