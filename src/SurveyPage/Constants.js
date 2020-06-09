import React from 'react';

export const Constants = (questionType) => {
    switch(questionType) {
        case 3:
            return 'checkbox';
        case 4:
            return 'radio';
        default:
            return 'checkbox';
        };
}