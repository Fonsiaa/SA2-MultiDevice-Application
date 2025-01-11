import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import '../style/story.scss';

gsap.registerPlugin(ScrollTrigger);

export const Story = () => {
    const [story, setStory] = useState(0);
    const revealRefs = useRef([]);

    const TheStory = [
        {
            // the title or the cover page of the website
            content: (
                <div>
                    <h1>Companion</h1>
                    <p>Story by Lithidiazz</p>
                </div>
            ),
        },
        {
            title: '',
            // the chapter 1 of the story
            content: (
                <div>
                    <h1>Chapter 1</h1>
                    <h3>The...</h3>
                    <section>
                        <p className="reveal-type" data-bg-color="#cccccc" data-fg-color="teal" ref={(el) => (revealRefs.current[0] = el)}>
                        Systematically ushering in a new generation of amazing designers from across the globe.
                        </p>
                    </section>
                    
                </div>
            ),
        },
        {
            title: '',
            content: (
                <div>
                    <h1>Chapter 2</h1>
                    <h3>The...</h3>
                    <section>
                        <p className="reveal-type" data-bg-color="#b6b600" data-fg-color="black" ref={(el) => (revealRefs.current[1] = el)}>
                        Modern UI designers will expand their skillsets to include frontend.
                        </p>
                    </section>
                    
                </div>
            ),
        },
        {
            title: '',
            content: (
                <div>
                    <h1>Chapter 3</h1>
                    <h3>The...</h3>
                    <section>
                        <p className="reveal-type" data-bg-color="#353535" data-fg-color="red" ref={(el) => (revealRefs.current[2] = el)}>
                        The web isn't static anymore, interactivity and motion now dominate.
                        </p>
                    </section>
                    
                </div>
            ),
        },
        {
            title: '',
            content: (
                <div>
                    <h1>End</h1>
                    <p></p>
                </div>
            ),
        },
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
    }, [story]); // Run effect when the story changes

    return (
        <div className="story">
            <div className="text">
                {TheStory[story].content}
            </div>
            
            <div className="btn">
                <button onClick={PreviousButton} disabled={story === 0}>Previous</button>
                <button onClick={NextButton} disabled={story === TheStory.length - 1}>Next</button>
            </div>
        </div>
    );
};