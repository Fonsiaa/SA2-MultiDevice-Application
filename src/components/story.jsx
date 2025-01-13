import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

//styling it
import '../style/story/story.scss';
import '../style/font.scss'

gsap.registerPlugin(ScrollTrigger);

export const Story = () => {
    const [story, setStory] = useState(0);
    const revealRefs = useRef([]);
    const autoScroll = useRef([null]);

    const TheStory = [
        {
            // the title or the cover page of the website
            content: (
                <div className='cover'>
                    <h1>Ponder</h1>
                    <p className='sub' >A fairytale Story</p>
                </div>
            ),
        },
        {
            // the chapter 1 of the story
            content: (
                <div className='ch'>
                    <p><span>Once upon a time</span> high in the misty sky, a place above the ground, is three friends: Wind, Rain and Cloud. They spent their days drifting together, playing games, and the watching the world the below them. Full of beautifully crafted houses, buildings and things. Where people live and use for a purpose. To be sheltered and to be protect.</p>

                    <img src="" alt="Cartoon Cloud"/>
                </div>
            ),
        },
        {
            content: (
                <div className='ch'>
                    <p>But something felt... off. They did not know why they existed or what they were meant to do. </p>

                    <p>One day, Wind sighed and asked, "Why do you think we exist? What is our purpose?" </p>

                    <p>Rain, the jolliest one out of the three friends, frowned. Replied, "I did not think of it, I do not know. What I do know, is I just fall, but other then that, I do not know why."</p>

                    <p>Cloud puffed up, confused. “I float, but what’s the point?” </p>
                    
                </div>
            ),
        },
        {
            content: (
                <div className='ch'>
                    <p>They decided to find answers. Together, they drifted across the sky, asking everyone they met.</p>

                    <p>They first went asking the brightness star. The Sun, it smiled and said nothing.</p>

                    <p>Then they went to the most beautiful in the beyond the sky. The Stars, they twinkled but stayed silent.</p>

                    <p>The Moon saw and heard the three friends walking and talking side by side. It then when down to them, and whispered "You will find your purpose when you need it the most."</p>

                    <p>The three friends did not understand. They continued their search for answers.</p>             
                </div>
            ),
        },
        {
            content: (
                <div className='ch'>
                    <p>One day, as they were playing, they notice a dry place beneath them. A land full of brown grass, instead of those green grass. A land that has cracked on them, rather than those smooth and life to be seen. A land, where flowing waters for animals are no where to be seen. Animals were laying down, weaken by the heat wave.</p> 

                    <p>Wind suddenly felt sorrow within their heart. "We have to do something!" Wind exclaimed. "We cannot just leave them here, like that!"</p>

                    <p>Rain hesitated and asked, "But how? How are we suppose to help them?"</p>

                    <p>Cloud, with their bubbling thoughts, said, "We can help them!"</p>
                </div>
            ),
        },
        {
            content: (
                <div className='ch'>
                    <p>Wind below gently, cooling the air for the animals and plants. Rain fell softly, refreshing the ground. Cloud floated and spread through the sky, shading the land from the hot sun. The grass eventually turned back to fresh grass, the rivers flowing with water, and the animals were back to their strong and happy life.</p>

                    <p>The three friends looked at each other, and finally understood what their existed is for. The purpose of the Wind is to being change and movement to the environment. The purpose of Rain is to give life and growth. While the purpose of the Cloud is to protect and provide. They were not just drifting. They were needed, in every way.</p>
                </div>
            ),
        },
        {
            content: (
                <div className='ch last'>
                    <p>From that day on, they worked together, helping the world below. And whenever they felt unsure, they remembered the dry land and the lives they saved. They had found their worth. And that was the greatest magic of all.</p>
                </div>
            ),
        },
        {
            content: (
                <div className='cover'>
                    <h1>The End</h1>                    
                </div>
            ),
        }
    ];

    const NextButton = () => {
        if (story < TheStory.length - 1) {
            setStory(story + 1);
        }
    };

    const PreviousButton = () => {
        if (story > 0) {
            setStory(story - 1);
        }
    };

    useEffect(() => {
    const splitTypes = revealRefs.current;

    splitTypes.forEach((char) => {
        if (char) {
            const bg = char.dataset.bgColor;
            const fg = char.dataset.fgColor;

            const text = new SplitType(char, { types: 'chars' });

            gsap.fromTo(
                text.chars,
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                    toggleActions: 'play play reverse reverse',
                    },
                }
            );
        }
    });

    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    //auto scrolling of the page
    const intervalId = setInterval(() => {
        if (story < TheStory.length - 1) {
            setStory((prevStory) => prevStory + 1);
        } else {
            clearInterval(intervalId); //stop the scrolling
        }
    }, 15000);

    return () => {
        clearInterval(intervalId);
    }
}, [story]); // Run effect when the story changes

    return (
        <>
        <div className="story">
            <div className="text">
                {TheStory[story].content}
            </div>
        </div>

        <div className="nav">
            <ul className='dot scale-up'>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>

        <div className="btn">
                <button onClick={PreviousButton} disabled={story === 0}>&lt;</button>
                <button onClick={NextButton} disabled={story === TheStory.length - 1}>&gt;</button>
            </div>
        </>
        
    );
};