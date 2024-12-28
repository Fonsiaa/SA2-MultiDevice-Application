import React, { useState } from 'react';
import '../style/story.scss';

export const Story = () => {
    const [story, setStory] = useState(0);

    const TheStory = [
        {
            title: '',
            // the title or the cover page of the website
            content: (
                <div>
                    <h1>Hello world</h1>
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
                    <p></p>
                </div>
            ),
        },

        {
            title: '',
            content: (
                <div>
                    <h1>Chapter 2</h1>
                    <h3>The...</h3>
                    <p></p>
                </div>
            ),
        },

        {
            title: '',
            content: (
                <div>
                    <h1>Chapter 3</h1>
                    <h3>The...</h3>
                    <p></p>
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

    return (
        <div className="story">
            <div className="text">
                {TheStory[story].content}
            </div>
            
            <div className="button">
                <button onClick={PreviousButton} disabled={story === 0} >Previous</button>

                <button onClick={NextButton} disabled={story.length === TheStory.length - 1} >Next</button>
            </div>
        </div>
    );
};